import React, { useState } from "react";
import "./AddBook.css";
import { NavLink } from "react-router-dom";
import MyBook from "./MyBook";
import { trpc } from "../lib/trpc";
import axios from "axios";

export default function AddBook() {
  const [file, setFile] = useState("")
  const [image, setImage] = useState("")
  const addBookMutation = trpc.book.create.useMutation();
  const bookContext = trpc.useContext()

  async function handleAddBookSubmit(e: any) {

    let fileData = new FormData();
    fileData.set("file", file);

    let imageData = new FormData();
    imageData.set("image", image);

    const response = await axios.post<{ message: string, name: string }>("http://localhost:3001/uploadFile", fileData);

    const imageResponse = await axios.post<{ message: string, name: string }>("http://localhost:3001/uploadImage", imageData)

    const fileName = response.data.name;
    const imageName = imageResponse.data.name;
    

    const data = {
      title: e.target.title.value,
      authors: e.target.authors.value,
      description: e.target.description.value,
      fileName: fileName,
      imageName: imageName,
      time: e.target["reading-time"].value
    };

    addBookMutation.mutate(data, {
      onSuccess: () => {
        bookContext.book.list.invalidate();
      }
    })
  }

  return (
    <>

        <div className="addbook-container">
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
          
          <div className="addbook-body">
            <div className="left-dotted-img">
              
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/android/24/000000/plus.png"
                  alt="plus"
                  className="plus_icon"
                />
                <input className="Text_t" type="file" onChange={(e: any) => setImage(e.target.files[0])}/>Add a Book cover
              
            </div>

            <div className="right-portion-addbook">
              <form onSubmit={handleAddBookSubmit} action="/home">
                <div className="form-title">
                  <div className="title-header">
                    <div className="left-header-title">
                      <p>Name of Book</p>
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/000000/star-filled.png"
                        alt="star-filled"
                      />
                    </div>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency-systems-regular/48/info.png"
                      alt="info"
                      className="info-img"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Enter the Published Name"
                    className="input-box"
                    name="title"
                  ></input>
                </div>
                <div className="subform">
                  <div className="form-title extra-1">
                    <div className="title-header">
                      <div className="left-header-title">
                        <p>Author of book</p>
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/fluency/48/000000/star-filled.png"
                          alt="star-filled"
                        />
                      </div>
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency-systems-regular/48/info.png"
                        alt="info"
                        className="info-img"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Add all the authors comma seprated
              "
                      className="input-box"
                      name="authors"
                    ></input>
                  </div>
                  <div className="form-title extra-2">
                    <div className="title-header">
                      <div className="left-header-title">
                        <p>Book read time</p>
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/fluency/48/000000/star-filled.png"
                          alt="star-filled"
                        />
                      </div>
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency-systems-regular/48/info.png"
                        alt="info"
                        className="info-img"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Enter time in mins"
                      className="input-box"
                      name="reading-time"
                    ></input>
                  </div>
                </div>
                <div className="form-title extra">
                  <div className="title-header">
                    <div className="left-header-title">
                      <p>Book Details</p>
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/000000/star-filled.png"
                        alt="star-filled"
                      />
                    </div>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency-systems-regular/48/info.png"
                      alt="info"
                      className="info-img"
                    />
                  </div>

                  <textarea
                    placeholder="Should not more than 300 words"
                    className="input-box-large"
                    name="description"
                  ></textarea>
                </div>

                <div className="form-title-last">
                  <div className="title-header">
                    <div className="left-header-title">
                      <p>Upload PDF</p>
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/fluency/48/000000/star-filled.png"
                        alt="star-filled"
                      />
                    </div>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency-systems-regular/48/info.png"
                      alt="info"
                      className="info-img"
                    />
                  </div>
                  <div className="add-book-pdf">
                    <img
                      width="66"
                      height="66"
                      src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-Upload-networking-smashingstocks-glyph-smashing-stocks.png"
                      alt="external-Upload-networking-smashingstocks-glyph-smashing-stocks"
                      className="plus_icon"
                    />
                    <div className="adjust">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        style={{ display: "none" }}
                        accept=".pdf"
                        onChange={(e: any) => setFile(e.target.files[0])}
                      />
                      <label htmlFor="file">Browse&nbsp;</label>
                      {/* <div className="Text">Browse&nbsp;</div> */}
                      or Drop file here
                    </div>

                    <p>Supports PDF upto 100MB</p>
                  </div>
                </div>
                <input type="submit" value="Add Book" className="addbook-btn"/>
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
}
