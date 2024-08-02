import styled from "styled-components";

export const NoteStyle = styled.div`
  background-color: #add8e6;
  color: black;
  padding: 1rem;
  min-height: 170px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 15px;


  textarea {
    background-color: #add8e6;
    border: none;
    resize:none;
    outline: none;
    width: 100%;
  }
`;
