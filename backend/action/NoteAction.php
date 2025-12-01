<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/notesDAO.php");

    class NoteAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {

            if((isset($_POST["sujet"])) && (isset($_POST["description"])) && (isset($_POST["date_note"]))){
                $sujet = $_POST["sujet"];
                $description = $_POST["description"];
                $date_note = $_POST["date_note"];

                if(isset($_POST["id"])){
                    $id = $_POST["id"];
                    NoteDAO::updateNotes($id, $sujet, $description, $date_note);
                    $result = NoteDAO::getNotes();
                    return compact("result");
                }
                else{
                    NoteDAO::addNotes($sujet, $description, $date_note);
                }
            }
            if(isset($_POST["delete_id"])){
                $id = $_POST["delete_id"];
                NoteDAO::deleteNotes($id);
            }

            $result = NoteDAO::getNotes();
            return compact("result");
            
        }
    }