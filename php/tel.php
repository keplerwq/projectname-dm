<?php
include "conn1.php";
if(isset($_POST['tel'])){
   $tel=$_POST['tel'];
   $result=$conn->query("select *from dm where tel='$tel'");
   if($tel->fetch_assoc()){
       echo true;
   }else{
       echo false;
   }
}
//获取注册的值，将其存入数据库中
if(isset($_POST['submit'])){
    $tel=$_POST['tel'];
    $pass=sha1($_POST['password']);
    $conn->query("insert dm values(null,'$tel','$pass',NOW())");
}