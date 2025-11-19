// pages/TestExecutionPage/TestExecutionPage.constants.ts

import type { TestDefinition } from './TestExecutionPage.types';

export const TEST_EXECUTION_PAGE_TEST_ID_PARAM = 'testId';

export const TEST_EXECUTION_PAGE_LAYOUT = {
  sidebarWidthDesktop: 280,
  contentMaxWidth: 960,
  mobileBreakpoint: 'md',
} as const;

export const TEST_EXECUTION_PAGE_COPY = {
  loading: 'Cargando test…',
  errorLoading: 'No se pudo cargar el test.',
  timeIsUp: 'El tiempo ha finalizado',
  submitLabel: 'Enviar test',
  nextLabel: 'Siguiente',
  previousLabel: 'Anterior',
  submittingLabel: 'Enviando respuestas…',
  submittedLabel: 'Test enviado correctamente',
} as const;

// Mock de datos de prueba. En un futuro se podría reemplazar por llamada real a API.
export const MOCK_TESTS: Record<string, TestDefinition> = {
  'sample-test': {
    id: 'sample-test',
    title: 'Sample LeetCode Test',
    totalDurationSeconds: 20 * 60, // 20 minutos
    questions: [
      {
        id: 'q1',
        type: 'mcq' as const,
        title: '¿Cuál es la complejidad temporal de una búsqueda binaria?',
        description: 'Selecciona la opción correcta.',
        options: [
          { id: 'q1-a', label: 'O(1)', value: 'O(1)' },
          { id: 'q1-b', label: 'O(log n)', value: 'O(log n)' },
          { id: 'q1-c', label: 'O(n)', value: 'O(n)' },
          { id: 'q1-d', label: 'O(n log n)', value: 'O(n log n)' },
        ],
      },
      {
        id: 'q2',
        type: 'code' as const,
        title: 'Suma de dos números',
        description: 'Escribe una función que reciba dos números enteros y retorne su suma.',
        language: 'typescript',
        starterCode: `function add(a: number, b: number): number {
  // TODO: escribe tu solución aquí
  return 0;
}

export default add;
`,
        sampleInput: 'a = 2, b = 3',
        expectedOutputDescription: 'La función debería devolver 5.',
      },
    ],
  },
};
