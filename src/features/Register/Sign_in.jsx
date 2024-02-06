import React from "react";
import axiosClient from "../../plugins/axiosClient";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Books from "../Books/Books";
export default function Sign_in () {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    axiosClient
      .post("/auth/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response?.data?.tokens?.access_token);
        if (response?.status === 201) {
          navigate("/menu");
        }
      });
  };
  return (
    <div className="bg-[url('./src/assets/Soothing-nature-backgrounds-2.jpg.webp')] w-[1535px] h-[100vh]">
      <h1 className="text-center pt-[50px] text-[40px]">Sign in</h1>
      <div className="w-[400px] h-[300px] bg-current ml-[570px] rounded-xl ">
        <form
          className=" flex flex-col items-center mt-[100px] pt-[50px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-[350px] border-[2px] border-slate-200 bg-orange-950 text-white  mt-[10px] p-[10px] rounded-xl"
            placeholder="username"
          />
          <input
            type="text"
            className="w-[350px] border-[2px] border-slate-200 text-white  bg-orange-950  mt-[10px] p-[10px] rounded-xl"
            placeholder="password"
          />
          <button className="py-[10px] px-[40px] rounded-xl bg-green-600 text-white my-[20px]">
            Sign in
          </button>
        </form>
      </div>
      <Routes>
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
};

