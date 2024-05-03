<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Styles -->

    @vite('resources/css/app.css')<!-- necessary load before theme -->
    <link id="theme-css" rel="stylesheet" type="text/css" href="/panel/assets/themes/aura-dark-green/theme.css">

</head>

<body>
<div id="app"></div>
</body>

@vite('resources/js/app.js')
</html>
