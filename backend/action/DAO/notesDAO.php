<?php
    require_once("action/DAO/Connection.php");

    class NoteDAO {

        public static function getNotes() {
            // Abstraction de BD
            $connection = Connection::getConnection();
            $statement = $connection->prepare("SELECT sujet, description, date_note FROM notes");
            $statement->execute();
            $allRows = $statement->fetchAll(); // Retourne un tableau de toutes les lignes
            return $allRows;
        }
        public static function addNotes($sujet, $description, $date_note) {
            // Abstraction de BD
            $connection = Connection::getConnection();
            $statement = $connection->prepare("INSERT INTO notes (sujet, description, date_note) VALUES (?,?,?)");
            $statement->bindParam(1, $sujet);
            $statement->bindParam(2, $description);
            $statement->bindParam(3, $date_note);
            $statement->execute();
        }
    }
