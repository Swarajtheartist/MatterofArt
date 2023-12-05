<?php

    $post = (!empty($_POST)) ? true : false;
    if ($post) {
        $email = trim($_POST["email"]);
        $name  = htmlspecialchars($_POST["name"]);
        $email = htmlspecialchars($_POST["email"]);
        $phone = htmlspecialchars($_POST["phone"]);
        $msg   = htmlspecialchars($_POST["msg"]);
        $error = "";
        if (!$name) {
            $error .= "Please enter your name.<br />";
        }
        // Check email
        function ValidateEmail($value)
        {
            $regex = "/^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)*\.([a-zA-Z]{2,6})$/";
            if ($value == "") {
                return false;
            } else {
                $string = preg_replace($regex, "", $value);
            }
            return empty($string) ? true : false;
        }
        if (!$email) {
            $error .= "Please enter your e-mail.<br />";
        }
        if ($email && !ValidateEmail($email)) {
            $error .= "Please enter a valid email address.<br />";
        }
        if (!$msg) {
            $error .= "Please enter the message.<br />";
        }
        if (!$phone) {
            $error .= "Please enter the phone.<br />";
        }
        if (!$error) {
            $subject = "New message!";
            $message = "New request!\n\nE-mail: " . $email . "\n\nName: " . $name . "\n\nPhone: " . $phone . "\n\nMessage: " . $msg . "\n\n";
            
            $mail = mail("swarajbsk1@gmail.com", $subject, $message, "From: " . $name . " <" . $email . "> " . "Reply-To: " . $email . " " . " X-Mailer: PHP/" . phpversion());
            if ($mail) {
                echo 'OK';
            }
        } else {
            echo '<div class="notification_error"></div>';
        }
    }

?>