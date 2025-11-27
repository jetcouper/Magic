<?php
    require_once("action/NoteAction.php");
	
	$action = new NoteAction();
	$data = $action->execute();
	
	echo json_encode($data["result"]);