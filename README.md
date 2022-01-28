# WarmUpProject
 REIGN School Project

# Consideraciones 
 Este proyecto ocupa MongoDB Atlas (Cloud db) por lo que no es necesario crear una imagen de docker para la base de datos

# Como correr la aplicacion
 En la terminal, dentro de la carpeta WarmUpFront, ejercutar el siguiente codigo: 

 ```bash
 docker build -t warmupfront .
 ```

 Luego, en la terminal, dentro de la carpeta WarmUpBack, ejecutar el siguiente codigo:

 ```bash
 docker build -t warmupbackend .
 ```

 Esto creara las imagenes necesarias para correr la app.
 Una vez completados estos pasos, en la terminal, dentro de la misma carpeta 'WarmUpBackend' ejecutar el siguiente codigo:

 ```bash
 docker-compose up
 ```

 Esto iniciaria nuestra aplicacion.

 Una vez terminado este paso visitar en su navegador preferido el siguiente enlace: 

  ```bash
 http://localhost:3000
 ```