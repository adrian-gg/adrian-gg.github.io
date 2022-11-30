<?
    $mensaje="";
    $mensaje.="Nombre: ".$_POST['nombre']."\n";
    $mensaje.="E-mail: ".$_POST['correo']."\n";
    $mensaje.="Asunto: ".$_POST['asunto']."\n";
    $mensaje.="Mensaje: ".$_POST['mensaje']."\n";

    $email_destiny="garciagregoriadrian@gmail.com";
    $subject = "Formulario de contacto AboutMe: ".$_POST['asunto'];

    if (mail($email_destiny,$subject,$mensaje,"De: Contact<".$_POST['correo'].">")) {
        echo 'Thanks for your comments';
    } else {
        echo 'Error '.$_POST['nombre'];
    }
?>