import React, { useState } from 'react'
import "./Book.css"
import BookInfo from './BookInfo';
import { NavLink } from 'react-router-dom';

interface BookProps {
  id: string,
  title: string;
  file: string;
  image: string;
  authors: string;
  description: string;
}

const Book: React.FC<BookProps> = ({ id, title, image, authors, description, file }) => {

  return (
    <>
    <NavLink to={`/description/${id}`}>
    <div className='card'>
        <img src={require(`../../../server/src/images/${image}`)}className='book-img' />
        <div className='book-title'>
            <h4>{title}</h4>
        </div>
        <div className='author'>
            <p>{authors}</p>
        </div>
    </div>
    </NavLink>
    </>
  )
}

export default Book;
