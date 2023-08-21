import React from "react";
import "./MyBook.css";
import Book from "./Book";
import { NavLink } from "react-router-dom";

interface MyBookProps {
  data: any;
}

const MyBook: React.FC<MyBookProps> = ({data}) => {

  return (
    <div className="container-mybook">
      <div className="header-mybook">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/000000/book.png"
          alt="book"
        />
        <p className="title">My Books</p>
      </div>

      <div className="parent-book-container">
      <div className="book-container">
        {
          data.map((item: any) => <Book key={item.id} {...item} />)
        }
      </div>
      <div className="add-book">
        <NavLink to="/addBook">
        <img
            width="24"
            height="24"
            src="https://img.icons8.com/android/24/000000/plus.png"
            alt="plus"
            className="plus_icon"
          />
          <div className="Text">Add a Book</div>

        </NavLink>
          
      </div>

      </div>
      

      
    </div>
  );
};

export default MyBook;
