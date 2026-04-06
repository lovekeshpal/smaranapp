import prisma from "../config/prisma";

export const getAllNotes = async () => {
  return await prisma.note.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const addNote = async (text: string) => {
  return await prisma.note.create({
    data: { text },
  });
};
