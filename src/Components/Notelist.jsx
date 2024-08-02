import React from "react";
import { NoteStyleList } from "./Styled/NoteStyleList";
import Note from "./Note";
import AddNotes from "./AddNotes";

const Notelist = ({ note, handleAddNotes, handleDelete, handleSave }) => {
  return (
    <NoteStyleList>
      {note.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          id={note.id}
          date={note.date}
          handleDelete={handleDelete}
          handleSave={handleSave}
        />
      ))}
      <AddNotes handleAddNotes={handleAddNotes} />
    </NoteStyleList>
  );
};

export default Notelist;
