<?php
  $data = file_get_contents("./blackoutdata.all.json");
  $json = json_decode($data);
  $len = count($json);
  $group = array($len);
  $address = array($len);

  for($i=0; $i<$len; $i++){
    $group[$i] = $json[$i]->group;    
    $address[$i] = $json[$i]->address;
  }

  $query = $_REQUEST['query'];
  $query = json_decode($query);


  $l = count($query);
  if(is_array($query) && $l>0){
    for($i=0; $i<$l; $i++){
      $q = $query[$i];
      $key = array_search($q, $address);
      if($key){
        $ret = array("address"=>$address[$key], "group"=>$group[$key]);
        echo json_encode($ret);
        exit;
      }
    }
  }

  echo json_encode(array("address"=>"", "group"=>0));
?>
