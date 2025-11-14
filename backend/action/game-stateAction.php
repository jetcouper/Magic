<?php
    require_once("action/CommonAction.php");

    class GameStateAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {

            $data = [];
            $data["key"] = $_SESSION["key"];

            $result = parent::callAPI("games/state", $data);
            return compact("result");


            // if (isset($_POST["key"])) {
            //     $data["key"] = $_POST["key"];
            //     $result = parent::callAPI("signout", $data);
            //     return compact("result");
            // }
            // else {
            //     $result = $_SESSION["key"];
            //     return compact("result");
            // }
            //if(isset())
        }
    }