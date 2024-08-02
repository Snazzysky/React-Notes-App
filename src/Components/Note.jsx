import { React, useState } from "react";
import { NoteStyle } from "./Styled/NoteStyle";
import { MdDeleteForever } from "react-icons/md";
import { Btn } from "./Styled/BtnStyle";
import { Button } from "./Styled/ButtonStyle";
import { Flex } from "./Styled/Flex";

const Note = ({ text, date, id, handleDelete, handleSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  const characterLimit = 200;
  const handleEdit = () => {
    setIsEditing((prevEdit) => !prevEdit);
  };

  return (
    <NoteStyle>
      <span>
        {isEditing ? (
          <textarea
            rows="8"
            cols="10"
            value={currentText}
            onChange={(event) => {
              if (event.target.value.length <= characterLimit) {
                setCurrentText(event.target.value);
              }
            }}
          ></textarea>
        ) : (
          text
        )}
      </span>
      <Flex>
        <small>{date}</small>
        {!isEditing && <Button onClick={handleEdit}>Edit</Button>}
        {isEditing && (
          <Button
            onClick={() => {
              setCurrentText(text);
              setIsEditing(false);
            }}
          >
            Cancel
          </Button>
        )}
        {isEditing && (
          <Button
            onClick={() => {
              if (currentText.trim().length > 0) {
                handleSave(id, currentText);
                setIsEditing(false);
              }
            }}
          >
            Save
          </Button>
        )}
        <Btn>
          <MdDeleteForever
            size="1.3em"
            onClick={() => {
              handleDelete(id);
            }}
          />
        </Btn>
      </Flex>
    </NoteStyle>
  );
};

export default Note;
