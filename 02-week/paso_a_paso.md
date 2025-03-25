# configuracion de mysql y docker

## estudiante:Nicolas Obregon Rojas*
----------------------------------------------
----------------
## paso 1:
![](/02-week/imagen/Captura%20de%20pantalla%202025-02-17%20180601.png)
## primero agregamos los tres archivos en un mismo repositorio.
-------------------------------------
## paso 2:   
![](/02-week/imagen/Captura%20de%20pantalla%202025-02-17%20170047.png)
**luego abrimos cd y colocamos el primer comando:** 
- docker build -t custom-mysql .
--------------
-------------------------------------------------
## paso 3:    
![](/02-week/imagen/Captura%20de%20pantalla%202025-02-17%20173626.png)
**seguimos con los siguientes 2 codigos:**  
- docker-compose down  
- docker-compose up -d --build  
#### con el primero levantamos el contenedor y a continuacion con el siguiente codigo se reconstruye.
-------------------------------------------------    
## paso 4:    
![](/02-week/imagen/Captura%20de%20pantalla%202025-02-17%20171310.png)
## abrimos cmd   
### y a continuacion agregamos el puerto que se ve en el docker compose y el nombre del contenedor.  
- container_name: serve-mysql.  
- ports: "3307:3306" el puerto a camabiar es a 37.  
### y le damos en test connection y luego colocamos la contraseña puesta en el archivo .env e ingresamos.
-------------------------------------------------
## paso 5:
![](/02-week/imagen/Captura%20de%20pantalla%202025-02-17%20171357.png)
### verificamos que correctamente nos entro al mysql ahora toca comprobar si de verdad se unio, verificando con la creacion de una base de datos y una tabla con sus atributos.
-------------------------------------------------
## paso 6:    
![](/02-week/imagen/Captura%20de%20pantalla%202025-02-17%20172422.png)
### abrimos docker y entramos en serve-mysql y seguimos estos pasos:  
### nos vamos a exec para abrir la terminal dentro de mysql y escribimos el siguiente codigo:  
- mysql -u root -p.  
- ingresamos la contraseña: abcd1234.  
### y se conecta.
-------------------------------------------------
### paso 7:    
![](/02-week/imagen/Captura%20de%20pantalla%202025-02-17%20172844.png)
### a continuacion usamos este codigo para crear una base de datos y luego ingresaremos a ella.  
- create database contenedor;  
- y luego entramos con use contenedor;  
## despúes creamos una tabla:  
- create table personas(id_persona int primary key,nombre varchar(50),apellido varchar(50));  
## y la creamos.
-------------------------------------------------
### paso 8:    
![](/02-week/imagen/Captura%20de%20pantalla%202025-02-17%20172922.png)
## finalmente para corroborar que si funciona de verdad.  
### vamos a mysql y verificamos que tanto la base de datos como las tablas se han creado con exito.

---------------------------------------
