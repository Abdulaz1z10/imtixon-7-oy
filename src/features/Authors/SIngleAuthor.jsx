import React, { useEffect, useState } from "react";
import axiosClient from "../../plugins/axiosClient";
import img from "../../assets/bg-book.jpg"

export default function SIngleAuthor() {
  let url = window.location.href.split("/")[4];
  const [item, setItem] = useState("");
 const [birthdate, setBirthdate] = useState([])
  useEffect(() => {
    axiosClient.get(`/author/${url}`).then((response) => {
      setItem(response?.data);
      setBirthdate(response?.data.birthdate.slice(0, 10))
    }).catch((error)=>{
      console.log(error);
    })
  },[]);
  return (
    <div>
      <div className="flex mt-[30px] items-center flex-col h-[100vh]">
        <div className="flex items-center gap-[50px]">
          <h1 className="text-[40px] mb-[50px]">Single book</h1>
        </div>
          <img src={img} className=" mb-[30px] rounded-xl w-[350px] h-[300px]" alt=""/>
        <div className=" w-[400px] p-[20px] rounded-xl pl-[20px]  border-gray-800 justify-center items-center gap-[50px] border-[2px] ">
          <div className="flex flex-col gap-[10px] mt-[10px]">
            <h1 className="text-4xl">Name: {item.full_name}</h1>
            <h1 className="text-4xl">BirthDate: {item.birthdate}</h1>
            <h1 className="text-4xl">Country: {item.country}</h1>
            <h1 className="text-4xl"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};
