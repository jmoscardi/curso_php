<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividad práctica obligatoria PHP</title>
</head>
<body>
    
<?php
 
    $datos = array(
        "nombre" => "Jorge", 
        "apellido" => "Moscardi",
        "edad" => "45",
        "hobbie" => "Tocar el piano",
        "editor_preferido" => "Visual Studio Code");

    echo "<strong>Nombre completo:</strong> ".$datos["nombre"]." ".$datos["apellido"];
    echo "<br>";
    echo "<strong>Edad:</strong> ".$datos["edad"];
    echo "<br>";
    echo "<strong>Hobbie:</strong> ".$datos["hobbie"];
    echo "<br>";
    echo "<strong>Editor de código preferido:</strong> ".$datos["editor_preferido"];
    echo "<br>";
    echo "<strong>Sistema operativo que se está utilizando:</strong> ".PHP_OS;

?>

</body>
</html>