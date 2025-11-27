<?php
    require_once("action/CommonAction.php");
    require_once("action/DAO/notesDAO.php");

    class NoteAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {

            if(isset($_POST["sujet"]) && isset($_POST["description"]) && isset($_POST["date_note"])){
                $sujet = $_POST["sujet"];
                $description = $_POST["description"];
                $date_note = $_POST["date_note"];
                NoteDAO::addNotes($sujet, $description, $date_note);
                exit;
            }
            $notes = NoteDAO::getNotes();
            return compact("notes");
            
        }
    }