<?php
/**
 * Created by PhpStorm.
 * User: shailesh bist
 * Date: 7/28/2016
 * Time: 3:20 PM
 */
header('content-type: application/json');

require_once 'api/v1/include/Connection.php';
$db = DB::getInstance();

$total = 80;
$promotional = (10 / 100) * $total;

$subFinalAmount = $total - $promotional;

$vat = (14.5 / 100) * $subFinalAmount;
$final = round($subFinalAmount + $vat);


//-------------------------------
$total = 80;
$vat = (14.5 / 100) * $total;
$final = $total + $vat;
echo round($final);

/*$vat = $total * 0.145; */





/*$query = "SELECT order_info.order_info FROM order_info WHERE user_id = 1";
$stmt = $db->prepare($query);
$stmt->execute();
$total_order = 0;
while($row = $stmt->fetch()){
    $json_data = json_decode($row['order_info']);
    $sum = 0;
    foreach ($json_data as $item){
        $sum += $item->item_price;
    }
    $total_order += $sum;
}
    echo $total_order;*/

//----------- Other option ------------------------

/*$query_insert = "INSERT INTO order_info(item_name, item_quantity, item_price)
                 VALUE(:item_name, :item_quantity, :item_price)";
$stmt_insert = $db->prepare($query_insert);

$query = "SELECT order_info.order_info FROM order_info WHERE user_id = 1";
$stmt = $db->prepare($query);
$stmt->execute();
while($row = $stmt->fetch()){
    $json_data = json_decode($row['order_info']);
    foreach ($json_data as $item){
        $item_name = $item->item_name;
        $item_quantity = $item->item_quantity;
        $item_price = $item->item_price;
        $stmt_insert->execute(array(
           ':item_name' =>  $item_name,
           ':item_quantity' =>  $item_quantity,
           ':item_price' =>  $item_price
        ));
    }
}*/