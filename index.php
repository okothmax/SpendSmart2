<?php

declare(strict_types=1);

echo '<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="8; url=./public/">
    <script type="text/javascript">
    setTimeout(function() {
        window.location.href = "./public/";
        }, 8000);
    </script>
    <title>Firefly III</title>
    <style>
    p {font-family:Arial,sans-serif;font-size:18px;color:#222;text-align:center;}
</style>
</head>
<body>
<p>
    <strong style="color:red;">Danger!</strong> This directory should not be open to the public!
</p>
<p>
    <span style="font-family:monospace;">/public/</span> should be the document root of your web server.
</p>
<p>
    Leaving your web server configured like this is a <span style="color:red;">huge</span> security risk.
</p>
</body>
</html>
';
