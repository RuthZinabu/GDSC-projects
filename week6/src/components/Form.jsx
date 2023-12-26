import React, { useState, useEffect } from 'react';

const Form = ({ addNote, selectedNote, updateNote }) => {
  const [mainTopic, setMainTopic] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setMainTopic(selectedNote.mainTopic || '');
      setSubTopic(selectedNote.subTopic || '');
      setContent(selectedNote.content || '');
    }
  }, [selectedNote]);

  const submitHandler = (ev) => {
    ev.preventDefault();
    const note = { mainTopic, subTopic, content };

    if (selectedNote) {
      updateNote(selectedNote.index, note);
    } else {
      addNote(note);
    }

    setMainTopic('');
    setSubTopic('');
    setContent('');
  };

  return (
    <main>
      <form className="note-form" onSubmit={submitHandler}>
        <h1>{selectedNote ? 'Edit Note' : 'Taking Note'}</h1>
        <input
          type="text"
          placeholder="Main topic"
          className="main-topic"
          value={mainTopic}
          onChange={(event) => setMainTopic(event.target.value)}
        />

        <input
          type="text"
          placeholder="Subclass"
          className="sub-topic"
          value={subTopic}
          onChange={(event) => setSubTopic(event.target.value)}
        />

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <button type="submit">{selectedNote ? 'Update' : 'Save'}</button>
      </form>
    </main>
  );
};

export default Form;
