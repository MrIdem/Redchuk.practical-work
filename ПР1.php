<?php
echo 'Завдання 1'."<br><br>";

$a = 5;
$b = 10;

echo 'Сума: '.$a + $b."<br>";
echo "Різниця: ".$a - $b."<br>";
echo "Добуток: ".$a * $b."<br>";
echo "Частка: ".$a / $b."<br><br>";


echo 'Завдання 2'."<br><br>";

$week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

echo $week[2]."<br>";
echo $week[6]."<br><br>";


echo 'Завдання 3'."<br><br>";

$product = ['Дрова' => '1000 грн', 'Фарба' => '100 грн'];

print_r($product);

echo "<br><br>".'Завдання 4'."<br><br>";

$day = date("l");

switch ($day) {
  case 'Monday':
    echo 'Сьогодні понеділок';
    break;
  case 'Tuesday':
    echo 'Сьогодні вівторок';
    break;
  case 'Wednesday':
    echo 'Сьогодні середа';
    break;
  case 'Thursday':
    echo 'Сьогодні четвер';
    break;
  case 'Friday':
    echo "Сьогодні п'ятниця";
    break;
  case 'Saturday':
    echo 'Сьогодні субота';
    break;
  case 'Sunday':
    echo 'Сьогодні неділя';
    break;  
}

echo "<br><br>".'Завдання 5'."<br><br>";

$x = 15;

function even($number, $two) {
  return $number % $two === 0;
}

if(even($x, 2)) {
  echo "Число $x парне";
} else {
  echo "Число $x не парне";
}

?>