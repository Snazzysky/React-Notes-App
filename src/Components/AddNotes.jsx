import { React, useState } from "react";
import { AddStyledNotes } from "./Styled/AddStyledNotes";
import { Flex } from "./Styled/Flex";
import { Button } from "./Styled/ButtonStyle";

const AddNotes = ({ handleAddNotes }) => {
  const CharacterLimit = 200;
  const [noteText, setNoteText] = useState("");

  const handleOnchange = (event) => {
    if (CharacterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNotes(noteText);
      setNoteText("");
    }
  };

  return (
    <AddStyledNotes>
      <textarea
        rows="8"
        cols="10"
        placeholder="type to add a note..."
        value={noteText}
        onChange={handleOnchange}
      ></textarea>
      <Flex>
        <span>{CharacterLimit - noteText.length} Remaining</span>
        <Button onClick={handleSaveClick}>Save</Button>
      </Flex>
    </AddStyledNotes>
  );
};

export default AddNotes;
