'use strict';
const $ = id => document.getElementById(id);
const search = $('search'), disconnect = $('disconnect');
let device = null, server = null, busy = false;
function log(message){const time=new Date().toLocaleTimeString('es');$('log').textContent=`[${time}] ${message}\n`+$('log').textContent;}
function status(message){$('status').textContent=message;log(message);}
function compatible(){
 if(!window.isSecureContext)return 'Se requiere HTTPS (o localhost).';
 if(!navigator.bluetooth || typeof navigator.bluetooth.requestDevice!=='function')return 'Este navegador no admite Web Bluetooth. Abre la página en Chrome para Android; Safari de iPhone no es compatible.';
 return null;
}
function check(){const error=compatible();$('support').textContent=error||'Web Bluetooth disponible en este navegador.';search.disabled=!!error; if(error)log(error);}
function onDisconnect(){server=null;disconnect.disabled=true;$('battery').textContent='Batería: no disponible';status('Dispositivo desconectado.');}
function explain(error){const name=error?.name||'Error';if(name==='NotFoundError')return 'No se seleccionó ningún dispositivo o se canceló la búsqueda.';if(name==='SecurityError')return 'Acceso Bluetooth bloqueado: revisa HTTPS y permisos del navegador.';if(name==='NotAllowedError')return 'Permiso Bluetooth denegado o solicitud cancelada.';if(name==='NetworkError')return 'No fue posible establecer o mantener la conexión GATT.';if(name==='NotSupportedError')return 'La operación o servicio Bluetooth no está disponible.';return `${name}: ${error?.message||'Error desconocido'}`;}
async function readBattery(gatt){try{const service=await gatt.getPrimaryService('battery_service');const characteristic=await service.getCharacteristic('battery_level');const value=await characteristic.readValue();$('battery').textContent=`Batería: ${value.getUint8(0)}%`;log('Nivel de batería leído.');}catch(e){$('battery').textContent='Batería: no disponible';log('No se pudo leer la batería: '+explain(e));}}
async function listServices(gatt){const list=$('services');list.replaceChildren();try{const services=await gatt.getPrimaryServices();if(!services.length){const li=document.createElement('li');li.textContent='No hay servicios accesibles.';list.append(li);}for(const service of services){const li=document.createElement('li');li.textContent=`Servicio: ${service.uuid}`;list.append(li);try{const chars=await service.getCharacteristics();for(const c of chars){const child=document.createElement('li');child.textContent=`  Característica: ${c.uuid}`;list.append(child);}}catch(e){log('Características no accesibles: '+explain(e));}}}catch(e){const li=document.createElement('li');li.textContent='No se pudieron enumerar servicios.';list.append(li);log(explain(e));}}
search.addEventListener('click',async()=>{if(busy)return;const error=compatible();if(error){status(error);return;}busy=true;search.disabled=true;try{status('Abriendo selector Bluetooth…');device=await navigator.bluetooth.requestDevice({acceptAllDevices:true,optionalServices:['battery_service','device_information']});device.addEventListener('gattserverdisconnected',onDisconnect,{once:true});$('device').textContent=`${device.name||'Sin nombre'} (${device.id||'ID no disponible'})`;status('Dispositivo seleccionado. Intentando conexión GATT…');server=await device.gatt.connect();disconnect.disabled=false;status('Conexión GATT establecida (no implica emparejamiento con Galaxy Watch).');await listServices(server);await readBattery(server);}catch(e){status(explain(e));}finally{busy=false;search.disabled=!!compatible();}});
disconnect.addEventListener('click',()=>{if(device?.gatt?.connected)device.gatt.disconnect();else onDisconnect();});
$('clear').addEventListener('click',()=>{$('log').textContent='';});
check();log('Galaxy Bridge 1.4 iniciado.');
