<!DOCTYPE html>

<html>
    <head>
        <title>Sitio web sensores</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link href="style.css" rel="stylesheet">
        <script type="text/javascript">
            //Set a "listener" to the file "sse.php" (everytime we get data from this file the code will get executed)
            const eventSource = new EventSource('sse.php');
            eventSource.onmessage = function(event) {
                const data = JSON.parse(event.data);
                //We will read the last sent data
                ld = data.length-1;
                console.log('Données reçues du serveur :', data[ld]);

                //Update the html file
                document.getElementById("temperatura-aire").innerHTML = data[ld].temperatura;
                document.getElementById("humedad-aire").innerHTML = data[ld].humedad;
                document.getElementById("temperatura-suelo").innerHTML = data[ld].temp_suelo;
                document.getElementById("humedad-suelo").innerHTML = data[ld].hum_suelo;
            };
        </script>
    </head>

    <body>
        <div id = "pagina">
            <h2>Data sensores</h2>

            <table>
                  <colgroup>
                    <!--<col span="2">
                    <col style="background-color:#97DB9A;">
                    -->

                  </colgroup>
                  <tr>
                    <th>Temperatura Aire</th>
                    <td id=temperatura-aire>0</td>
                  </tr>
                  <tr>
                    <th>Humedad Aire</th>
                    <td id=humedad-aire>0</td>
                  </tr>
                  <tr>
                    <th>Temperatura Suelo</th>
                    <td id=temperatura-suelo>0</td>
                  </tr>
                  <tr>
                    <th>Humedad Suelo</th>
                    <td id=humedad-suelo>0</td>
                  </tr>

            </table>
        </div>
    </body>
</html>
