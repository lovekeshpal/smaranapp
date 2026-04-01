let notes: { id: number; text: string }[] = [];

export const getAllNotes = () => {
  return notes;
};

export const addNote = (text: string) => {
  const newNote = {
    id: Date.now(),
    text,
  };

  notes.push(newNote);
  return newNote;
};