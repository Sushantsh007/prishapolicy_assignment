import React, { useState } from "react";
import "./App.css";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./lib/trpc";
import { httpBatchLink } from "@trpc/client";
import AddBook from "./components/AddBook";
import BookInfo from "./components/BookInfo";
import OpenBook from "./components/openBook";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3001/books",
        }),
      ],
    });
  });

  return (
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path="/home" Component={Home}></Route>
              <Route path="/favourites" Component={Favourites}></Route>
              <Route path="/addBook" Component={AddBook}></Route>
              <Route path="/description/:id" Component={BookInfo}></Route>
              <Route path="/book/:id" Component={OpenBook}></Route>
              </Routes>
          </Router>
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
