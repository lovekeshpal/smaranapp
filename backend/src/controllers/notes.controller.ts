import { Request, Response } from "express";
import * as notesService from "../services/notes.services";

export const getNotes = async (req: Request, res: Response) => {
  const notes = await notesService.getAllNotes();
  res.json(notes);
};

export const createNote = async (req: Request, res: Response) => {
  const { text } = req.body;

  const newNote = await notesService.addNote(text);
  res.status(201).json(newNote);
};
