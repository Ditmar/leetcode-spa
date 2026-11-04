/* global process, console, fetch, AbortSignal, setTimeout, require */
/* eslint-disable @typescript-eslint/no-require-imports */

const amqp = require('amqplib');

const RABBITMQ_URL = process.env.RABBITMQ_URL;
const PISTON_URL = process.env.PISTON_URL;

const QUEUE_NAME = 'leetcode.code.execute';

async function startWorker() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertQueue(QUEUE_NAME, {
    durable: true,
  });

  await channel.prefetch(1);

  console.log('Worker conectado a RabbitMQ');
  console.log(`Esperando trabajos en: ${QUEUE_NAME}`);

  await channel.consume(QUEUE_NAME, async (message) => {
    if (!message) return;

    try {
      const job = JSON.parse(message.content.toString());

      if (!['javascript', 'python'].includes(job.language) || typeof job.code !== 'string') {
        throw new Error('Trabajo inválido');
      }

      const version = job.language === 'javascript' ? '20.11.1' : '3.12.0';

      const filename = job.language === 'javascript' ? 'main.js' : 'main.py';

      const response = await fetch(`${PISTON_URL}/api/v2/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: job.language,
          version,
          files: [
            {
              name: filename,
              content: job.code,
            },
          ],
        }),
        signal: AbortSignal.timeout(30000),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status} en Piston`);
      }

      const result = await response.json();

      console.log('Resultado de ejecución:', {
        language: job.language,
        output: result.run?.stdout,
        error: result.run?.stderr,
        exitCode: result.run?.code,
      });

      channel.ack(message);
    } catch (error) {
      console.error('Error procesando trabajo:', error.message);
      channel.nack(message, false, false);
    }
  });
}

async function connectWithRetry() {
  while (true) {
    try {
      await startWorker();
      break;
    } catch (error) {
      console.error('Error conectando a RabbitMQ:', error.message);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

connectWithRetry();
