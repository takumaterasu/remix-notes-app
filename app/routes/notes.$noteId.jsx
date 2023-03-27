import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";

import { getStoredNotes } from "~/data/notes";
import styles from "~/styles/note-details.css";

export default function NoteDetailsPage() {
  const note = useLoaderData();

  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  );
}

export async function loader({ params }) {
  const notes = await getStoredNotes();
  // noteId === filename argument
  const noteId = params.noteId;
  const selectedNote = notes.find((note) => note.id === noteId);

  if (!selectedNote) {
    throw json(
      { message: "Could not find note for id " + noteId },
      {
        status: 404,
      }
    );
  }

  return selectedNote;
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta({ data }) {
  return { title: data.title, description: "Manage your notes with ease." };
}
