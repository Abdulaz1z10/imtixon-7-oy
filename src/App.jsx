import React from "react";
import Menu from "./features/menu/Menu";
import Books from "./features/Books/Books";
import Registeration from "./features/Register/Registeration";
import { Route, Routes } from "react-router-dom";
import Sign_in from "./features/Register/Sign_in";
import Authors from "./features/Authors/Authors";
import Categories from './features/Categories/Categories';
import SingleAuthor from "./features/Authors/SIngleAuthor";

export default function App() {
  return (
      <div className="flex flex-col">
    <Routes>
        <Route path="" element={<Registeration />} />
        <Route path="/sign_in" element={<Sign_in />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/singleauthor" element={<SingleAuthor/>}/>
    </Routes>
      </div>
  );
}
