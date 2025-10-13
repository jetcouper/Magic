<?php
    require_once("action/CommonAction.php");

    class LoginAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
            $data = [];

            if(isset($_POST["username"]) && isset($_POST["password"])){
                $data["username"] = $_POST["username"];
                $data["password"] = $_POST["password"];

                $result = parent::callAPI("signin", $data);

                if ($result == "INVALID_USERNAME_PASSWORD") {
                	// err
                    return compact("result");
                }
                else {
                	// Pour voir les informations retournées : var_dump($result);exit;
                	$key = $result->key;
                    $_SESSION["username"] = $_POST["username"];
                    $_SESSION["key"] = $key;
                    //var_dump($result); exit;
                    return compact("result");
                }
            }
        }
    }