<?php
  // データは事前にソートされている前提
  $data = file_get_contents("./blackoutdata.json");
  $json = json_decode($data);


  $len = count($json);
  $group = array($len);
  $subs = array($len);
  $address = array($len);

  for($i=0; $i<$len; $i++){
    $subs[$i] = $json[$i]->subgroup;    
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
				// 停電実施状況（3/26追加）
			  $status = file_get_contents("./statusdata.json");
				$statusjson = json_decode($status, true);

        $addr = $address[$key];
        $g = array();
        $j = $key;
        while($j > -1){
          $tmp = $group[$j];
          if(array_search($tmp, $g) === false){
						$stats = array();
						for($k=0; $k<count($statusjson); $k++){
							$date = $statusjson[$k]["date"];
							$stat = $statusjson[$k]["status"][$tmp-1][$subs[$j]];
							array_push($stats, array("date"=>$date, "status"=>$stat));
						}
            array_push($g, array("group"=>$tmp, "subgroup"=>$subs[$j], "status"=>$stats));
          }
          
          array_splice($address, $j, 1);
          array_splice($group, $j, 1);
          array_splice($subs, $j, 1);

          $j = array_search($q, $address);
        }

        $ret = array("address"=>$addr, "group"=>$g);
	
        echo json_encode($ret);
        exit;
      }
    }
  }


  echo json_encode(array("address"=>"", "group"=>0));
?>
