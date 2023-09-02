<?php

$payload = file_get_contents('php://input');
$event = $_SERVER['HTTP_X_GITHUB_EVENT'];

if ($event === 'push') {
    $directory = '~/chena.pro/htdocs';

    // Discard all local changes
    exec("git -C $directory reset --hard");

    // Execute the git pull command and capture the output
    exec("git -C $directory pull 2>&1", $output, $returnCode);

    // Prepare the response
    $response = '';
    if ($returnCode === 0) {
        $response = 'Git pull successful' . PHP_EOL;
    } else {
        $response = 'Git pull failed' . PHP_EOL;
    }
    $response .= 'Output: ' . PHP_EOL;
    $response .= implode(PHP_EOL, $output);

    // Set the response headers
    header('Content-Type: text/plain');
    header('Content-Length: ' . strlen($response));

    // Send the response
    echo $response;
} else {
    header('HTTP/1.1 400 Bad Request');
    echo "Invalid event";
    exit();
}
?>
