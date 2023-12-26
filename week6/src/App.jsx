import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setSelectedNote(null);
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const editNote = (index) => {
    setShowForm(true);
    setSelectedNote({
      index,
      ...notes[index],
    });
  };

  const updateNote = (index, updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
    setSelectedNote(null);
    setShowForm(false);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  return (
    <div className="App">
      {showForm && (
        <Form
          addNote={addNote}
          selectedNote={selectedNote}
          updateNote={updateNote}
        />
      )}

      <button onClick={toggleForm} className="show-btn">
        {showForm ? '-' : '+'}
      </button>

      <main>
        <h1>Notes</h1>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <div>
                <strong>Main Topic:</strong> {note.mainTopic}
              </div>
              <div>
                <strong>Subclass:</strong> {note.subTopic}
              </div>
              <div>
                <strong>Content:</strong> {note.content}
              </div>
              <button onClick={() => editNote(index)}>Edit</button>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
