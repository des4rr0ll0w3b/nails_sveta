
create database salon_nails;
use salon_nails;


-- tabla de servicios--
create table servicios (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (100) NOT NULL,
descripcion TEXT,
precio DECIMAL(10,2) NOT NULL,
duracion INT NOT NULL 
);

-- tabla de citas (nombre y telefono del cliente--
create table citas (
id INT AUTO_INCREMENT PRIMARY KEY,
cliente_nombre  VARCHAR(100) NOT NULL,
cliente_telefono VARCHAR (20) NOT NULL,
servicio_id INT,
cita_fecha DATETIME NOT NULL,
estado ENUM('pendiente', 'confirmada', 'cancelada') DEFAULT 'pendiente',
confirmacion_estado ENUM('pendiente', 'confirmada', 'cancelada') DEFAULT 'pendiente',
FOREIGN KEY (servicio_id) REFERENCES servicios(id)
);

-- tabla de administradores--
create table admins (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

-- Insertar administrador por defecto (contraseña: "123" hasheada)
INSERT INTO admins (username, password) VALUES ('admin', '$322RF$··REEMPLAZAR POR ÂSSOWR HASDEADO'); -- Reemplazar con hash generado
 