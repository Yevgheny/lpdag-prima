 
<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="hormann@dag-prima.com.ua";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год  
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="../thanks.html";  // На какую страничку переходит после отправки письма 

$landingname ="Даг-Прима";  // Название лэндинга
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name'];  
$phone=$_POST['phone'];
$whatform=$_POST['whatform'];
 
$msg=" 
Зявки обратного звонка с лэндинга $landingname
 
Имя: $name
Телефон: $phone 

----------------------------------------------

Форма: $whatform

"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$msg");   
 
// Сохраняем в базу данных 
 
$f = fopen("callback.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $name"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 
 
  
 
// Выводим сообщение пользователю   
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 100); 
//--></script> ";  
exit; 
 
 
 
?>