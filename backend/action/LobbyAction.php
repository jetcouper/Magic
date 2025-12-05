<?php
    require_once("action/CommonAction.php");

    class LobbyAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];


            if (isset($_POST["key"])) {
                $data["key"] = $_POST["key"];
                if(isset($_POST["type"]))
                {
                    if($_POST["type"] == "PVP"){
                        $data["type"] = $_POST["type"];
                        $result = parent::callAPI("games/auto-match", $data);
                        return compact("result");
                    }
                    if($_POST["type"]== "TRAINING"){
                        $data["type"] = $_POST["type"];
                        $result = parent::callAPI("games/auto-match", $data);
                        return compact("result");
                    }
                }
                else{
                    
                    $result = parent::callAPI("signout", $data);
                    return compact("result");
                }
                
            }
            else {
                $username = $_SESSION["username"];
                $result["key"] = $_SESSION["key"];
                $result["username"] = $username;
                return compact("result");
            }
        }
    }