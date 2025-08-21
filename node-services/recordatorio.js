const { Client, LocalAuth } = require('whatsapp-web.js');
const mysql = require('mysql2');
const cron = require('node-cron');

const client = new Client({
  authStrategy: new LocalAuth()
});
client.initialize();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nailsalon'
});

// Recordatorio 3 horas antes
cron.schedule('*/10 * * * *', () => {
  db.query("SELECT * FROM reservas WHERE estado='pendiente' AND TIMESTAMPDIFF(HOUR, NOW(), fecha)=3", (err, results) => {
    if(err){console.log(err);return;}
    results.forEach(reserva => {
      let mensaje = `Recordatorio: tienes una cita a las ${reserva.fecha}. ¿Aceptar o cancelar? Responde con 'Aceptar' o 'Cancelar'.`;
      client.sendMessage(reserva.telefono + '@c.us', mensaje);
    });
  });
});

// Cambia estado según respuesta
client.on('message', message => {
  if (message.body.toLowerCase() === 'aceptar' || message.body.toLowerCase() === 'cancelar') {
    let estado = message.body.toLowerCase();
    db.query("UPDATE reservas SET estado=? WHERE telefono=?", [estado, message.from.split('@')[0]]);
    client.sendMessage(message.from, `Tu cita ha sido marcada como "${estado}". ¡Gracias!`);
  }
});