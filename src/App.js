import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Notelist from "./Components/Notelist";
import { Container } from "./Components/Styled/ContainerStyle";
import GlobalStyles from "./Components/Styled/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  mobile: "375px",
};

function App() {
  const [notes, setNotes] = useState([]);

  const [searchText, SetSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleAddNotes = (text) => {
    const newNotes = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    };

    const newNote = [...notes, newNotes];
    setNotes(newNote);
  };

  const handleDelete = (id) => {
    const remove = notes.filter((note) => note.id !== id);
    setNotes(remove);
  };

  const handleSearchNote = (event) => {
    SetSearchText(event.target.value);
  };

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSave = (id, text) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: text };
      } else {
        return note;
      }
    });
    setNotes(newNotes);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`${darkMode && "darkMode"}`}>
        <div>
          <GlobalStyles />
          <Container>
            <Header toggle={handleToggle} />
            <Search handleSearch={handleSearchNote} />
            <Notelist
              note={notes.filter((note) => note.text.includes(searchText))}
              handleAddNotes={handleAddNotes}
              handleDelete={handleDelete}
              handleSave={handleSave}
            />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
