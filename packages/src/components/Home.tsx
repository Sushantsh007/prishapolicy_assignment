import MyBook from "./MyBook";
import BookInfo from "./BookInfo";
import AddBook from "./AddBook";
import { trpc } from "../lib/trpc";
import React from "react";

const Home: React.FC = () => {
  const response = trpc.book.list.useQuery()
  console.log("home", response.data);
  
  if (!response.data) return <div>Loading...</div>;

  return (
    <div>
     <MyBook data={response.data}/>
     {/* <BookInfo />
     <AddBook /> */}
    </div>
  );
}

export default Home;
