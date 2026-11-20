# Galaxy Bridge 1.3

Prototipo web experimental para explorar dispositivos Bluetooth Low Energy mediante Web Bluetooth.

## Funciones
- Selector de dispositivos BLE desde el navegador.
- Intento de conexión GATT y desconexión.
- Enumeración de servicios y características accesibles.
- Intento de lectura del servicio estándar de batería.
- Registro de actividad y errores.

## Uso
1. Publica los archivos `index.html`, `style.css` y `app.js` en GitHub Pages (Settings → Pages → Deploy from a branch → main → /root).
2. Abre la URL HTTPS resultante en **Chrome para Android**.
3. Activa Bluetooth y pulsa **Buscar dispositivos**.
4. Selecciona un dispositivo BLE disponible y revisa el registro.

## Limitaciones importantes
- El Galaxy Watch 8 no tiene compatibilidad oficial con iPhone; este prototipo **no** proporciona emparejamiento ni sincronización completa.
- Web Bluetooth no está disponible en Safari de iOS; GitHub Pages no soluciona esa limitación.
- El navegador solo expone servicios autorizados y accesibles; algunos dispositivos no aparecerán o rechazarán GATT.
- El acceso a batería depende de que el dispositivo exponga el servicio estándar y permita leerlo.
- No se han validado aquí conexiones físicas reales con Galaxy Watch 8.

## Próxima etapa
Investigar una app iOS nativa con CoreBluetooth y evaluar las restricciones reales del reloj, sin prometer compatibilidad.
