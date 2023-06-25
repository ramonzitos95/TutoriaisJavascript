<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
  </head>
  <body>
    <h1 id="header"></h1>
    <h2 id="demo"></h2>
    <script src="src/script.js">
      const message = 'Hello world' // Try edit me

      var elemento = document.getElementById("demo");
      var elemento2 = document.getElementById("header");
      
      elemento.innerHTML = "Sou o H1";
      elemento2.innerHTML = "Sou o H2";
      // Log to console
      console.log(elemento);
      console.log(elemento2);
      console.log(elemento.innerHTML);
      console.log(elemento2.innerHTML);

    </script>
    
  </body>
</html>
