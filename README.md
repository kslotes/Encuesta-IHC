<!-- 
      * Detectar y recomendar navegador *
      * Mejorar visibilidad de la pagina al cargarla. *
      
      Colores, Tipografia, Diseño Responsive, Texto alternativo a imagenes, Panel Accesibildad para cubrir distintas dispacacidades.
      Si la encuesta es multipage, persistir la opcion de accesibilidad

      Fundamentos teoricos en el documento:

      1) El documento posee solo 1 elemento <header> junto con un <h1> para facilitar el uso de lectores de pantalla
      2) El documento posee solo 1 elemento <footer> al final del documento para facilitar los lectores de pantalla
      3) El documento no posee elementos <div>
      4) Los <input> estan acompañados de elementos <label> para facilitar el trabajo de los lectores de pantalla
      5) Todos las respuestas a las preguntas estan encerradas en tags <fieldset> para los lectores de pantalla
      6) Todas las clases de las secciones fueron elegidas de acuerdo al diseño responsive de Bootstrap para elegir el % de pantalla que ocupe cada elemento
      7) El documento contiene 1 solo elemento "container" para utilizar la Grid Responsive de Bootstrap (relacionado con punto 5)
      8) El documento al final posee un elemento <time datetime> para facilitar la lectura de fechas de los lectores de pantalla
      9) Los elementos <input> dentro de las preguntas estan encerrados por tags <fieldset> para agrupar por grupos los campos del formulario y mejorar los lectores de pantalla
      10) Existe un @media-query en el archivo CSS para modificar el texto y centrarlo cuadno los dispositivos son de pantalla pequeña
      11) El font-color y background-color de la pagina esta preparada para mejorar la facilidad de lectura de los textos. Segun The Web
      Content Accessibility Guidelines (WCAG). El ratio de nuestro constraste es de 21:1, el mayor posible.
      12) Los botones "Guardar Encuesta" y "Limpiar encuesta" tienen acceskey para facilitar el uso de los usuarios que utilizan solo teclado
      13) Usamos variables para colores y agregamos compatibilidad con IE

 -->
