# 🔗 Proceso: Registro y Gestión de Conectores (Referidores)

**Código:** PROC-001  
**Versión:** 1.0  
**Fecha de creación:** 2026-05-19  
**Última revisión:** 2026-05-19  
**Responsable:** Equipo interno / Administración

---

## 🎯 Objetivo

Establecer el paso a paso para el alta de nuevos **Conectores** o referidores, la generación de sus enlaces personalizados y el proceso mediante el cual registrarán a sus clientes referidos en el sistema.

---

## 👥 Roles y responsabilidades

| Rol | Responsabilidad |
|-----|-----------------|
| **Prospecto a Conector** | Completar el formulario inicial de registro y, si aplica, agendar la cita de bienvenida |
| **Equipo de captación** | Acompañar o registrar al nuevo Conector cuando el alta sea asistida |
| **Administrador / equipo interno** | Buscar el Conector, asignar el asesor jurídico y generar el enlace personalizado |
| **Conector** | Usar su enlace único para registrar clientes referidos en el portal de activación |
| **Asesor jurídico asignado** | Recibir y atender los clientes que entren por el enlace del Conector |

---

## 📋 Fases del proceso

### Fase 1: Alta y registro del nuevo Conector

**Responsable:** Prospecto a Conector o equipo de captación.

1. **Ingreso al portal:** acceder a la landing page principal: [https://conectores.empiezadecero.es/](https://conectores.empiezadecero.es/)
2. **Formulario de Datos - Paso 1:** completar la información requerida:
   - Nombre completo
   - Email
   - Teléfono
   - Provincia
   - Opciones del perfil
3. **Creación en base de datos:** al enviar este primer formulario, el perfil del Conector queda creado automáticamente en la base de datos.
4. **Agendamiento - Paso 2, opcional:** el sistema mostrará una pantalla para agendar una **Cita de Bienvenida**.

> **Nota operativa:** la cita de bienvenida es una formalidad. El Conector ya existe en el sistema desde el envío del primer formulario, aunque no concrete la cita en ese momento.

### Fase 2: Generación del enlace personalizado

**Responsable:** Equipo interno / administrador.  
**Criticidad:** Alta.

1. **Ingreso al Generador:** acceder a la herramienta interna de creación de enlaces: [https://conectores.empiezadecero.es/generar-enlace.html](https://conectores.empiezadecero.es/generar-enlace.html)
2. **Búsqueda del Conector:** en el campo **Email del Conector/Afiliado**, introducir el correo electrónico con el que se registró el Conector en la Fase 1 y presionar **Buscar**.
3. **Asignación de Asesor Jurídico:** en el campo inferior, ingresar obligatoriamente el **Nombre y Apellido del Asesor Jurídico** que estará a cargo de esta cuenta. Ejemplo: `Carlos Apellido`.

   **Razón:** esta asignación garantiza que todos los clientes referidos mediante este enlace queden correctamente asignados a dicho asesor en la base de datos.

4. **Generación y entrega:** hacer clic en **Generar Enlace**.
5. **Validación antes de entregar:** copiar y entregar al Conector la **URL completa**, incluyendo todos los parámetros finales y el código de usuario.

> **Atención:** si se envía un enlace cortado o sin los parámetros finales, el sistema mostrará el error **"URL No Válida"**.

### Fase 3: Registro de referidos en el Portal de Activación

**Responsable:** Conector, utilizando el enlace único entregado en la Fase 2.

El portal de activación consta de 3 pasos que el Conector debe llenar junto con, o a nombre de, su referido.

#### Paso 1: Datos del Cliente - Segunda Oportunidad

1. Completar los datos personales del referido:
   - Nombre
   - DNI
   - Teléfono
   - Dirección
   - Estado civil
   - Demás datos solicitados por el formulario
2. Ingresar el monto total aproximado de la deuda.
3. Confirmar y enviar la información.
4. El sistema genera automáticamente la **Nota de Encargo**.

#### Paso 2: Cálculo de cuotas del servicio - Financiación

1. El sistema mostrará el total de los honorarios. Ejemplo: `4.235€`.
2. Usar la calculadora financiera flexible para definir:
   - **Cuota inicial:** monto de entrada. Ejemplo: `500€`.
   - **Resto a financiar:** importe que el cliente puede pagar mensualmente. Ejemplo: `200€` o `300€`.
3. El sistema calculará automáticamente en cuántos meses se divide el saldo restante.

> **Nota:** si el cliente no puede asumir la cuota mínima establecida por el sistema, se mostrará una alerta indicando que el caso requiere revisión y deberá hablar con un asesor.

#### Paso 3: Siguientes pasos y contacto

Una vez confirmadas las cuotas, el sistema preguntará al cliente cómo desea continuar el proceso y si necesita que un asesor lo atienda antes de acogerse a la Ley.

El cliente podrá elegir una de estas tres opciones de canalización:

| Opción | Acción |
|--------|--------|
| **WhatsApp** | El cliente confirma su número para que el equipo lo contacte por chat |
| **Llamada urgente** | El cliente confirma su número para recibir una llamada telefónica a la brevedad |
| **Calendly** | El sistema redirige al calendario del asesor, por ejemplo Julián, para que el cliente elija el día y la hora de su llamada telefónica |

---

## ⚠️ Puntos de control críticos

- [ ] El Conector fue creado correctamente desde el primer formulario de la landing.
- [ ] El email usado en el Generador coincide exactamente con el email registrado por el Conector.
- [ ] El asesor jurídico fue asignado con **Nombre y Apellido** antes de generar el enlace.
- [ ] La URL entregada al Conector está completa y conserva todos sus parámetros.
- [ ] El enlace fue probado antes de enviarlo al Conector.
- [ ] Los datos personales de los referidos se tratan únicamente dentro de los canales autorizados.

---

## 📎 Documentos y enlaces relacionados

- Portal principal de Conectores: [https://conectores.empiezadecero.es/](https://conectores.empiezadecero.es/)
- Generador interno de enlaces: [https://conectores.empiezadecero.es/generar-enlace.html](https://conectores.empiezadecero.es/generar-enlace.html)
- Video tutorial: [https://www.youtube.com/watch?v=5Lm_8oJ_L_U](https://www.youtube.com/watch?v=5Lm_8oJ_L_U)

---

## 📝 Historial de cambios

| Versión | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 2026-05-19 | Weaves | Creación inicial del proceso de registro y gestión de Conectores |
