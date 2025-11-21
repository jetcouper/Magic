<?php
    require_once("action/CommonAction.php");

    class JeuAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {


            $data = [];

            $data["key"] = $_SESSION["key"];
            $data["type"] = $_POST["type"];
            if(isset($_POST["uid"]))
            {
                $data["uid"] = $_POST["uid"];
                if(isset($_POST["targetuid"]) && $_POST["type"] == "ATTACK"){
                    $data["targetuid"] = $_POST["targetuid"];
                }

            }
            
            $result = parent::callAPI("games/action", $data);
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
            



        }
    }