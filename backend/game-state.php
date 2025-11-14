<?php
    require_once("action/game-stateAction.php");
	
	$action = new GameStateAction();
	$data = $action->execute();
	
	echo json_encode($data);