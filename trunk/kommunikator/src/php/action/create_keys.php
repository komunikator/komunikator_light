<?
need_user();

$values = array();
$data = json_decode($HTTP_RAW_POST_DATA);
$rows = array();
$values = array();

if ($data && !is_array($data)) $data = array($data);
foreach ($data as $row)
{
$values = array();
    foreach ($row as $key=>$value)
        if ($key == 'id') $id = $key;
	else
            if ($key == 'status')
	     $values['prompt_id']= " (select prompt_id from prompts where prompt = '$value') "; 
		else 
            $values[$key]="'$value'"; 
$rows[] = $values;
}

require_once("create.php");
?>