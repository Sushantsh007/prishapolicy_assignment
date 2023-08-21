import './OpenBook.css';
import { useParams } from "react-router-dom";
import { trpc } from "../lib/trpc";

export default function OpenBook() {
    const data = useParams();
  const id = data.id;

  const response = trpc.book.filter.useQuery(id)

  if (!response.data) return <div>Loading...</div>;

  return (
    <iframe src={require(`../../../server/src/files/${response.data[0].file}`)} className="displayPdf"/>
  );
}
