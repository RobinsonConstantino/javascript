<!DOCTYPE html>
<html lang="pr-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DETRAN</title>
  </head>
  <body>
    <h1>Sistema de Multas</h1>
    Velocidade do carro: <input type="number" name="txtvel" id="txtvel" /> km/h
    <input type="button" value="Verificar" onclick="calcular()" />
    <div id="res"></div>
    <script>
      function calcular() {
        var txtv = window.document.querySelector(`input#txtvel`);
        var res = window.document.querySelector(`input#res`);
        var vel = Number(txtv.value);
        res.innerHTML = (`Sua velocidade é de ${vel} km/h`);
      }
    </script>
  </body>
</html>
