# Galaxy Bridge 1.5

Prototipo web experimental de diagnóstico Bluetooth Low Energy.

## Novedades
- Identificación **orientativa** del modelo a partir del nombre anunciado (Active2 / Watch 8 / otros); no verifica el hardware.
- Selector Bluetooth, conexión y desconexión GATT y consulta de servicios accesibles.
- Intento de lectura de batería BLE estándar.
- Historial local de pruebas y exportación a TXT, sin guardar identificadores Bluetooth.
- Diagnóstico de compatibilidad del navegador y HTTPS.

## Publicación
Subir `index.html`, `style.css`, `app.js` y `README.md` a la raíz de la rama `main`. Publicar con GitHub Pages desde `main` / `(root)`. Abrir la página HTTPS con Chrome en Android.

## Limitaciones
El Galaxy Watch 8 no tiene compatibilidad oficial con iPhone. Safari de iOS no soporta Web Bluetooth. La conexión GATT con un dispositivo BLE no prueba que el Watch 8 se pueda emparejar o sincronizar. Los servicios disponibles dependen del dispositivo y de permisos. No se han realizado pruebas físicas con Galaxy Watch 8.
