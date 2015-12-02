<!DOCTYPE html>
<html>
    <head>
        <title>.wrd file</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="http://vndile.com/wd/?q=jquery"></script>
        <script type="text/javascript" src="http://vndile.com/wd/?q=js"></script>
        <link type="text/css" rel="stylesheet" href="http://vndile.com/wd/?q=css">
    </head>
    <body>
		<?php 
	include_once('_.wrd.php');
	
	$c = curl_init();
    curl_setopt($c, CURLOPT_URL, "demo.wrd");
	curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
    $file = curl_exec($c);
    curl_close($c);
	
	wrd($file);
		?>
    </body>
</html>