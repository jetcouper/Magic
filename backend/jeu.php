<?php
    require_once("action/JeuAction.php");
	
	$action = new JeuAction();
	$data = $action->execute();
	
	echo json_encode($data["result"]);