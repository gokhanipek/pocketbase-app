import Link from "next/link";
import PocketBase from 'pocketbase';
import CreateNote from "./CreateNote";

export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto'

async function getNotes() {
    // const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records",
    // {cache: 'no-store'});
    // const data =await res.json();
    const pb = new PocketBase('http://127.0.0.1:8090');
    const data = await pb.collection('notes').getList();
    return data?.items as any[];

}

export default async function NotesPage() {

    const notes = await getNotes();
    return (
        <div>
            {notes?.map(note => <Note key={note.id}  note={note} />)}
            <CreateNote />
        </div>
    );
}

function Note({note}: any) {
    const {id, title, content, created} = note || {};
    return (
        <Link href={`/notes/${id}`}>
            <h2>{title}</h2>
            <h5>{content}</h5>
            <p>{created}</p>
        </Link>
    )
}