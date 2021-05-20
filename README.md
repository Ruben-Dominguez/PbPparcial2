# Tu primer sitio web

Proyecto Segundo Parcial

## Getting Started

Bajar la imagen de Docker hub:
```
sudo docker pull rubendominguez/
```

### Prerequisites

Tener Docker instalado en su version mas nueva.

Correr lo siguiente para asegurar de que este instalado:

```
docker ps
```

### Installing

```
docker pull rubendominguez/
```

## Running the tests

Una vez instalado Docker y de haber inicializado el contenedor de correr un servidor de node.js en el puerto 8888

### Break down into end to end tests

Se corre con:

```
docker run -ti rubendominguez/carros5:v1
```

Dado unos conflicto que las funciones de node fs no corrian en el browser se utilizo localStorage para tener una forma de almacenamiento permanente. Para acceder a los datos ingrsados en la pagina de contacto se ingresa a

```
http://localhost:8888/contacto/retrieve.html
```
y se oprime el boton datos para generar los datos en la console


## Deployment

Pruebelo profe ta chido B)

## Built With

* [HTML](https://en.wikipedia.org/wiki/HTML) - Document format file
* [NodeJS](https://nodejs.org/en/) - JavaScript runtime
* [Docker](https://www.docker.com/) - Desarrollo de la aplicacion por medio de contenedores

## Contributing

NO HAY, NO SE ACEPTAN POR EL MOMENTO.

## Versioning

*Ver 1.0*
Para mas info ver los commits.

## Authors

* **Juan Pablo Martinez Cantu 329688** - *Paginas de contactos* - [JuanPablomtz0](https://github.com/JuanPablomtz0)
* **Luis Enrique Fernandez Reza 329865** - *Paginas de acerca de* - [fernandez17](https://github.com/lfernandez17)
* **Ruben Dominguez Chavez 329806** - *Pagina Home y detalleCarros* - [Ruben-Dominguez](https://github.com/Ruben-Dominguez)

## License

Open source para uso de cualquier tipo.

## Acknowledgments

* Un saludo a Edibraaay
* Al equipo de los que sobraron B)
* etc
