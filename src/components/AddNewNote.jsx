import { useState } from "react";

import decors from "./decor";


function AddNewNote({ onAddNote }) {
  const [title, setTtile] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTtile("");
    setDescription("");
  };

  const random_decors = [1, 2, 3];
  for (let i = 0; i < 3; ++i) {
    let decorIdx = Math.floor((Math.random() * decors.length));
    random_decors[i] = decors[decorIdx];
  }

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTtile(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note description"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
      <div className="decor-box">
        {
          random_decors.map((icon, idx) => {
            return (
              <img src={icon} alt={`decor-${idx + 1}`} key={idx + 1} className="decor-icon" />
            )
          })
        }
      </div>
    </div>
  );
}

export default AddNewNote;
