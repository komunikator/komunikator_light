<?
need_user();

$values = array();
$data = json_decode($HTTP_RAW_POST_DATA);
$rows = array();
$values = array();

if ($data)
foreach ($data as $row)
{
$values = array();
    foreach ($row as $key=>$value)
            $values[$key]="'$value'"; 
$rows[] = $values;
}
$id_name = 'prompt_id';
require_once("update.php");
?>