import { Request, Response } from "express";
import * as notesService from "../services/notes.services";

export const getNotes = (req: Request, res: Response) => {
  const notes = notesService.getAllNotes();
  res.json(notes);
};

export const createNote = (req: Request, res: Response) => {
  const { text } = req.body;

  const newNote = notesService.addNote(text);
  res.status(201).json(newNote);
};