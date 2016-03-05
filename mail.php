<!DOCTYPE html>
<html>
<head>
  <link href="css/main.css" type="text/css" rel="stylesheet" />
  <link href="css/normalize.css" type="text/css" rel="stylesheet" />
  <link href="fonts/stylesheet.css" type="text/css" rel="stylesheet" />
  <style>
    body{
      padding: 5px 10px;
      font-size: .9em;
      text-align: center;
    }
    .success{
      color: #72a01c;
      font-size: 1em;
    }
    .failed{
      color: #CE2464;
    }
  </style>
</head>
<body>
<?php
$headers= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers.="From:".$_REQUEST['email'];
$subject="New Request from ".$_REQUEST['email'];
$message="<b>Name:</b> ".$_REQUEST['name']."<br /><br /> <b>Services Requested: </b>";
if(isset($_REQUEST['wd'])){ $message= $message."<br /> Web Design/Development";}
if(isset($_REQUEST['ld'])){ $message= $message."<br /> Logo Design";}
if(isset($_REQUEST['gd'])){ $message= $message."<br /> Graphic Design";}
if(isset($_REQUEST['ud'])){ $message= $message."<br /> UI Design";}
if(isset($_REQUEST['bi'])){ $message= $message."<br /> Complete Brand Identity";}
if(isset($_REQUEST['cg'])){ $message= $message."<br /> Customized Gifts";}
$message= $message."<br /><br /><b> Additional Message: </b><br />".$_REQUEST['message'];
$status=mail('mail.citrus@gmail.com',$subject,$message,$headers);
if($status){echo "<div class='success'>Thank you! We'll get back to you soon.</div>";}
else{
echo "<div class='failed'>Oops! There was a problem sending your mail. Kindly contact us at mail.citrus@gmail.com</div>";
}
?>
</body>
</html>
