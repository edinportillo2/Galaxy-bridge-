# Galaxy Bridge 1.4

Prototipo experimental para explorar dispositivos Bluetooth Low Energy mediante Web Bluetooth.

## Mejoras de 1.4
- Diagnóstico de soporte del navegador y HTTPS antes de buscar.
- Mensajes de error comprensibles y registro de actividad.
- Selector BLE, intento de conexión GATT, desconexión y servicios accesibles.
- Intento de lectura del servicio estándar de batería.
- Interfaz móvil azul marino y azul eléctrico.

## Publicación
Sube `index.html`, `style.css` y `app.js` a la raíz de la rama `main` del repositorio y configura GitHub Pages para publicar desde `main` / `(root)`. Después abre la URL HTTPS en Chrome para Android.

## Limitaciones
El Galaxy Watch 8 no ofrece compatibilidad oficial con iPhone. Esta página no proporciona emparejamiento ni sincronización completa con el reloj. Safari en iOS no admite Web Bluetooth. Un dispositivo puede no aparecer en el selector, o no permitir conexión GATT o lectura de servicios. El nivel de batería solo aparece si se expone el servicio estándar autorizado. No se han realizado pruebas físicas de conexión con Galaxy Watch 8.
