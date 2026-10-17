## ADR-004: Motor de ejecución segura de código

Ticket: X-004 — Elección del motor de ejecución de código
Estado: Decisión aprobada
Fecha de decisión: 2026-10-06

## 1. Contexto

El proyecto LeetCode requiere ejecutar código enviado por los usuarios en Python, JavaScript, Java y C++.

Debido a que el código enviado por los usuarios no es confiable, no debe ejecutarse directamente dentro del proceso de la API principal.

Se necesita un motor de ejecución independiente que permita procesar programas, obtener sus resultados y establecer controles de seguridad y límites de recursos.

## 2. Decisión arquitectónica

Se adopta Piston autohospedado, ejecutado en contenedores Docker sobre una máquina virtual dedicada, separada del servidor de la API principal.

La arquitectura prevista utiliza RabbitMQ para gestionar las solicitudes de ejecución y un worker independiente encargado de comunicarse con Piston.

La aplicación web consultará posteriormente el estado de los envíos mediante la API.

## 3. Alternativas evaluadas

Se consideraron dos motores de ejecución de código: Piston y Judge0.

### Piston

Piston permite ejecutar programas en distintos lenguajes mediante una API HTTP. Puede alojarse en infraestructura propia y utilizarse desde un servicio independiente.

Para el proyecto LeetCode, permite mantener el motor de ejecución separado de la API principal y utilizar RabbitMQ como sistema de colas de la arquitectura prevista.

### Judge0

Judge0 también permite ejecutar código en múltiples lenguajes y ofrece funcionalidades orientadas a la evaluación de programas.

Sin embargo, su despliegue autohospedado incorpora componentes adicionales, como una cola de trabajos y una base de datos, que aumentarían la complejidad operativa al combinarse con la arquitectura prevista del proyecto.

### Justificación de la elección

Se seleccionó Piston porque permite integrar un motor de ejecución mediante HTTP sin introducir otra infraestructura de colas y persistencia propia de Judge0.

La decisión reduce la duplicación de componentes y facilita que el worker previsto para el proyecto se encargue de enviar programas a Piston y procesar sus resultados.

Esta elección no garantiza por sí sola la seguridad del sistema. Será necesario configurar y verificar el aislamiento, las restricciones de red y los límites de recursos antes de utilizarlo en producción.

## 4. Prueba de concepto (PoC)

### 4.1. Entorno de pruebas

Para validar la viabilidad técnica de Piston se preparó un entorno local con las siguientes características:

- Sistema operativo: Windows 11.
- Plataforma de contenedores: Docker Desktop.
- Motor de ejecución: Piston autohospedado.
- Contenedor: "piston_x004".
- Dirección de acceso local: "http://127.0.0.1:2000".
- Comunicación: API HTTP de Piston, versión 2.

El contenedor se configuró para aceptar conexiones mediante la interfaz local "127.0.0.1", evitando publicar directamente el puerto de ejecución en las interfaces externas del equipo.

Esta configuración corresponde únicamente a una prueba de concepto y no constituye un despliegue seguro para producción.

### 4.2. Lenguajes evaluados

Se instalaron los paquetes necesarios y se realizaron pruebas básicas de ejecución mediante el endpoint "POST /api/v2/execute".

Lenguaje | Versión | Programa de prueba | Resultado
Python | 3.12.0 | "print("hi")"| Ejecución correcta
JavaScript| Node.js 20.11.1 | "console.log("hi");"| Ejecución correcta
Java | 15.0.2 | "System.out.println("hi");"| Compilación y ejecución correctas
C++ | GCC 10.2.0 | "std::cout << "hi" << std::endl;"| Compilación y ejecución correctas

Las pruebas permitieron comprobar que Piston puede recibir código fuente mediante HTTP, procesarlo y devolver los resultados correspondientes.

### 4.3. Resultados observados

En las pruebas exitosas, los programas imprimieron "hi" en la salida estándar ("stdout") y finalizaron con código de salida "0".

En los lenguajes compilados se revisó adicionalmente la información de compilación proporcionada por Piston.

### 4.4. Alcance de la validación

La prueba de concepto confirma la ejecución básica de los cuatro lenguajes requeridos por el proyecto.
Sin embargo, no valida todavía el aislamiento frente a código malicioso, el bloqueo de acceso a red, el comportamiento ante consumo excesivo de recursos ni el rendimiento bajo concurrencia.

Estos aspectos deberán verificarse antes del despliegue en producción.

## 5. Seguridad y límites de ejecución

### 5.1. Aislamiento del código

El código enviado por los usuarios se considera no confiable y no debe ejecutarse dentro del proceso de la API principal.

Se establece como arquitectura objetivo ejecutar Piston en una máquina virtual dedicada, separada de la API y de la base de datos del proyecto.

La comunicación con Piston deberá realizarse exclusivamente desde el worker autorizado, mediante una red privada y controles de acceso.

El entorno de producción no deberá utilizar contenedores con privilegios elevados sin una justificación y evaluación de seguridad específica.

### 5.2. Límites de ejecución

Se establecen los siguientes controles como requisitos de implementación:

Recurso | Control requerido
Tiempo de ejecución | Establecer un tiempo máximo y finalizar programas que lo superen
Memoria RAM| Limitar la memoria disponible para cada ejecución
Tamaño del código fuente| Rechazar solicitudes que superen 64 KB
Salida del programa | Limitar la cantidad de datos generados en stdout y stderr
Procesos | Restringir la creación excesiva de procesos
Sistema de archivos | Utilizar un espacio temporal aislado y restringir el acceso a archivos del servidor
Acceso a red | Bloquear las conexiones de red salientes del código ejecutado
Concurrencia | Limitar la cantidad de ejecuciones simultáneas

Los valores concretos de tiempo, memoria, salida y concurrencia deberán definirse y verificarse mediante pruebas antes del despliegue.

### 5.3. Protección de la infraestructura

La implementación deberá cumplir las siguientes condiciones:

- No exponer Piston directamente a Internet.
- No proporcionar credenciales, secretos ni acceso a la base de datos al entorno de ejecución.
- Mantener separados los recursos del motor de ejecución y de la API principal.
- Restringir el acceso del worker a los servicios estrictamente necesarios.
- Registrar errores, tiempos de ejecución y consumo de recursos.
- Mantener actualizados los componentes y lenguajes instalados.

  5.4. Riesgos pendientes

La prueba de concepto local utilizó una configuración de Docker con "privileged: true", por lo que no debe considerarse una configuración apta para producción.

Antes de implementar la solución definitiva será necesario comprobar que el mecanismo de aislamiento de Piston funciona correctamente en la VM elegida, que las restricciones de red se aplican realmente y que los límites de recursos no pueden eludirse mediante código enviado por usuarios.

La ejecución exitosa de programas sencillos no demuestra por sí sola que el sistema sea seguro frente a código malicioso.

## 6. Infraestructura y costos de alojamiento

### 6.1. Entorno de producción propuesto

Se propone alojar Piston en una máquina virtual Linux dedicada, separada de la API principal y de la base de datos.

El servidor deberá permitir configurar Docker, aislamiento mediante namespaces y cgroups, restricciones de red y límites de recursos. La compatibilidad del mecanismo de aislamiento de Piston deberá verificarse antes del despliegue.

### 6.2. Comparación de proveedores

Se investigaron las siguientes alternativas de infraestructura:

Proveedor | Configuración de referencia | Precio mensual aproximado
Hetzner Cloud| CX33, servidor compartido | USD 9.99
DigitalOcean | Basic Droplet, 2 vCPU y 4 GiB RAM| USD 24.00

Los precios son referencias publicadas para 2026, no cotizaciones contratadas. Pueden variar según región, impuestos, IPv4, almacenamiento adicional y otros servicios.

Se considera Hetzner como alternativa inicial de menor costo, sujeta a disponibilidad, compatibilidad técnica y pruebas de rendimiento.

### 6.3. Restricciones de Railway

Railway permite desplegar aplicaciones y servicios mediante imágenes Docker, pero esto no equivale a disponer de una máquina virtual con control completo del sistema anfitrión.

Piston utiliza Isolate y mecanismos de Linux para aislar las ejecuciones. Su configuración oficial de contenedor utiliza privilegios elevados, por lo que no debe asumirse que pueda desplegarse correctamente o de forma segura en un servicio administrado de Railway.

Por esta razón, se mantiene la decisión de alojar Piston en una VM independiente. La API principal podrá continuar utilizando Railway según las decisiones de despliegue del proyecto.

### 6.4. Costos y capacidad pendientes de validación

El costo mensual de referencia corresponde únicamente a la máquina virtual. No incluye necesariamente copias de seguridad, monitoreo, tráfico adicional ni mantenimiento.

Las pruebas locales realizadas no permiten determinar cuántas ejecuciones simultáneas soportará el servidor ni establecer tiempos promedio representativos.

Antes del despliegue se deberán medir los tiempos de ejecución, el consumo de CPU y memoria y el comportamiento bajo concurrencia, utilizando programas representativos de los cuatro lenguajes.

### 6.5. Referencias

- Piston: https://github.com/engineer-man/piston
- Configuración de Piston: https://github.com/engineer-man/piston/blob/master/docs/configuration.md
- Railway: https://docs.railway.com/services
- Hetzner: https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/
- DigitalOcean: https://www.digitalocean.com/pricing/droplets
- Docker y contenedores privilegiados: https://docs.docker.com/engine/containers/run/

## 7. Administración de lenguajes en Piston

### 7.1. Lenguajes seleccionados

La prueba de concepto utilizó los siguientes paquetes:

Lenguaje | Paquete Piston| Versión
Python | python | 3.12.0
JavaScript | node | 20.11.1
Java | java | 15.0.2
C++ | gcc | 10.2.0

Las versiones utilizadas corresponden al entorno de prueba y no representan necesariamente las versiones definitivas de producción.

### 7.2. Instalación de lenguajes

Piston proporciona el endpoint "POST /api/v2/packages" para instalar paquetes de lenguajes disponibles.

Ejemplo de solicitud para Python:

{
"language": "python",
"version": "3.12.0"
}

La lista de paquetes disponibles se consulta mediante "GET /api/v2/packages".

Los lenguajes instalados y disponibles para ejecutar programas se consultan mediante "GET /api/v2/runtimes".

### 7.3. Actualización de lenguajes

La actualización de un lenguaje deberá realizarse de forma controlada:

1. Consultar las versiones disponibles.
2. Instalar la nueva versión en un entorno de pruebas.
3. Ejecutar programas de validación.
4. Comprobar compatibilidad con los ejercicios existentes.
5. Actualizar la configuración de versiones admitidas.
6. Retirar versiones anteriores únicamente después de verificar que no sean necesarias.

Las actualizaciones no deberán realizarse automáticamente en producción sin pruebas previas.

## 8. Instrucciones para API-030

El ticket API-030 deberá implementar un adaptador que permita al worker comunicarse con Piston mediante HTTP.

### 8.1. Endpoint de ejecución

"POST /api/v2/execute"

Ejemplo de solicitud:

{
"language": "python",
"version": "3.12.0",
"files": [
{
"name": "main.py",
"content": "print(\"hi\")"
}
]
}

### 8.2. Responsabilidades del adaptador

El adaptador deberá:

- Utilizar la dirección privada configurada para Piston.
- Validar el lenguaje y la versión permitidos.
- Enviar los archivos del programa mediante la API HTTP.
- Aplicar límites de tamaño y restricciones de ejecución.
- Interpretar la salida estándar, los errores y los códigos de finalización.
- Gestionar errores de conexión y tiempos de espera.
- Evitar registrar código fuente sensible o credenciales innecesariamente.

### 8.3. Separación de responsabilidades

La API principal no deberá ejecutar directamente código enviado por usuarios.

El worker será responsable de solicitar la ejecución a Piston y entregar los resultados al flujo de evaluación.

La comparación de resultados con los casos de prueba corresponde a los componentes de evaluación previstos en otros tickets.

## 9. Conclusión

Se mantiene la decisión de utilizar Piston autohospedado como motor de ejecución de código para el proyecto LeetCode.

La prueba de concepto local permitió ejecutar programas básicos en Python, JavaScript, Java y C++, demostrando la viabilidad inicial de la integración HTTP.

La solución definitiva deberá incorporar aislamiento verificado, límites de recursos, restricciones de red, monitoreo y pruebas de rendimiento antes de utilizarse con código no confiable en producción.
