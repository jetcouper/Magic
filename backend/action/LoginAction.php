<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/AnswersDAO.php");

	class IndexAction extends CommonAction{

		public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
            
			
            if(isset($_POST["username"]) && isset($_POST["password"])){
                $author = $_POST["username"];
                $answer = $_POST["password"];

                //AnswersDAO::addAnswer($author,$answer);
                
                exit();
            }
            $answers = AnswersDAO::getAnswers();
            


			return compact("answers");
		}
	}