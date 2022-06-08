# Friendly Neighbourhood Comics

Proyecto final del curso de React para Coderhouse

# Sitio en funcionamiento

<a href="https://fn-comicstore.web.app/" target="_blank">Firebase Hosting</a>

## Sobre FN Comics

e-commerce sobre comics e historietas americanas de Marvel, desarrollado como un SPA (single page application).

### / o Ruta raíz

En el home de la página veremos directamente los productos disponibles, pudiendo añadir más productos de forma sencilla sólo con añadirlos a la base de datos de Firebase.

### /Spiderman

Ruta dedicada a los cómics del personaje "Spiderman", donde actualmente se encuentra un solo item.

### /Crossover

Ruta dedicada a los eventos de Marvel donde se cruzan personajes de distintas franquicias, aquí podemos ver un item que no cuenta con stock disponible, así que al entrar al detalle del producto es imposible añadirlo al carrito.

### /Cart

Ruta en la que se encuentra nuestro carrito de compras, cuando está vacío podemos encontrar un botón que nos redirige al home, para poder encontrar productos para añadir al mismo. <br>
Cuando añadimos un producto al carrito tenemos la opción de acceder al checkout o de seguir comprando/añadiendo mas items.<br>
Dentro del cart se hace un cálculo global del total de los items, teniendo en cuenta los distintos items y la cantidad seleccionada de cada uno.

## Dependencias
<ul>
<li>Bootstrap (estilos y posibilidad de hacer la página responsive)</li>
<li>MUI (estilos e íconos)</li>
<li>React Router DOM (rutas y navegación)</li>
  <li>Sweetalerts2 (alertas personalizadas) </li>
</ul>

