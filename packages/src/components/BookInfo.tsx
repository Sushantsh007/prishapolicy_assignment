import React from "react";
import "./BookInfo.css";
import { NavLink, useParams } from "react-router-dom";
import { trpc } from "../lib/trpc";

type Data ={
  id: string;
}

export default function BookInfo() {
  const data = useParams();
  const id = data.id;

  const response = trpc.book.filter.useQuery(id)

  if (!response.data) return <div>Loading...</div>;
  
  const mainData = response.data[0];
  
  return (
    <div className="book-info-container">
      <div className="book-info-header">
        <NavLink to="/home">
        <button className="icon-button">
          <span className="icon">
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/ios-glyphs/30/000000/back.png"
              alt="back"
            />
          </span>
          Back to Home
        </button>


        </NavLink>
        
      </div>
      <div className="book-info-body">
        <div className="left-book-info">
          <img src={require(`../../../server/src/images/${mainData.image}`)} />
        </div>
        <div className="right-book-info">
          <div className="book-title">
            <p>{mainData.title}</p>
          </div>
          <div className="book-author">
            <p>Sushant Sharma</p>
          </div>
          <div className="bookreading-time">Book Read Time : {mainData.time}</div>
          <div className="book-discription">
            {/* <p>
              Modern discussions of alchemy are generally split into an
              examination of its exoteric practical applications and its
              esoteric spiritual aspects, despite criticisms by scholars such as
              Eric J. Holmyard and Marie-Louise von Franz that they should be
              understood as complementary.[8][9] The former is pursued by
              historians of the physical sciences, who examine the subject in
              terms of early chemistry, medicine, and charlatanism, and the
              philosophical and religious contexts in which these events
              occurred. The latter interests historians of esotericism,
              psychologists, and some philosophers and spiritualists. The
              subject has also made an ongoing impact on literature and the
              arts.
            </p> */}
            <p>{mainData.description}</p>
          </div>
          <div className="right-footer">
            <div className="fotter-left">
              <div className="book-author">
                <p>Summary</p>
              </div>
              <div className="summary">
                <div className="summary-left-portion">
                  <div className="rating-bar">
                    <div className="one-bar">
                      <div>5</div>
                      <div className="bar-container">
                        <div className="bar-5"></div>
                      </div>
                    </div>
                    <div className="one-bar">
                      <div>4</div>
                      <div className="bar-container">
                        <div className="bar-4"></div>
                      </div>
                    </div>
                    <div className="one-bar">
                      <div>3</div>
                      <div className="bar-container">
                        <div className="bar-3"></div>
                      </div>
                    </div>
                    <div className="one-bar">
                      <div>2</div>
                      <div className="bar-container">
                        <div className="bar-2"></div>
                      </div>
                    </div>
                    <div className="one-bar">
                      <div>1</div>
                      <div className="bar-container">
                        <div className="bar-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="summary-right-portion">
                  <div className="star-header">
                    <p className="rating-title">3.5</p>
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/fluency/48/000000/star.png"
                      alt="star"
                    />
                  </div>
                  <div className="start-body">
                    <div className="book-author">
                      <p>273 reviews</p>
                    </div>
                    
                      <p className="rating-title mar">88%</p>
                      <div className="book-author">
                        <p>Recommended</p>
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="right-rate-info">
                <div className="right-text">
                    <p> 
                    Yoh have not rated this book yet. Click on the button to review
                    </p>
                </div>
                <button className="rate-button">Rate this book

                </button>

            </div>
          </div>
          <NavLink to={`/book/${id}`}>
          <button className="icon-button-new">
            Read this Book
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
