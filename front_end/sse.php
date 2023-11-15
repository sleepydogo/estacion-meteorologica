<?php
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Connection: keep-alive');
    define("WAITING_TIME", 5);

    while (true) {

        $apiUrl = 'http://127.0.0.1:8000/api/datos';

        // GET request from apiUrl
        $response = file_get_contents($apiUrl);

        // Send the request to the client
        if ($response) {
            echo "data: " . $response . "\n\n";
            ob_flush();
            flush();
        }

        // Repeat after 5 seconds
        sleep(WAITING_TIME);
    }
    ?>