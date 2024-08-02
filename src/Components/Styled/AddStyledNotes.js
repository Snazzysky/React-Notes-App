import styled from "styled-components";

export const AddStyledNotes = styled.div`
  background-color: #fef68a;
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
    background-color: #fef68a;
    border: none;
    outline: none;
    resize: none;
  }
`;
