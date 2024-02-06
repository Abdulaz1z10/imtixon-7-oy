import React, { useEffect, useState } from 'react'
import Menu from './../Menu/Menu';
import BookModal from './BookModal';
import axiosClient from '../../plugins/axiosClient';

export default function Books() {
  const [modal, setModal] = useState('')
  const [books, setBooks] = useState([])
  const [edit, setEdit] = useState('')
  const toggle =()=>{
    setModal(false)
    setEdit('')
  }
  useEffect(()=>{
    axiosClient.get("/book").then((response)=>{
      setBooks(response?.data)
      console.log(response?.data)
    })
  },[])
  const deleteBooks =(id)=>{
    axiosClient.delete(`/book/${id}`).then((response)=>{
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const editBooks =(item)=>{
    setEdit(item);
    setModal(true)
  }
  return (
    <div className="flex no-repeat pb-[500px] gap-[200px] w-[1519px] bg-[url('./src/assets/books-img.jpg')] ">
      <div className='fixed ' >
        <Menu />
      </div>
      <div className="flex gap-[50px] w-[100%] ml-[200px] p-[20px]">
        <BookModal edit={edit} open={modal} toggle={toggle} />
        <button className="px-[40px] text-2xl h-[60px] py-[20px] bg-orange-800 text-white w-[200px] rounded-xl mt-[20px]" onClick={()=> setModal(true)}>Add books</button>
        <div className="flex  w-[100%] gap-[50px] h-[100vh] flex-wrap pb-[120px]">
          {
          books?.map((item, index) => {
            return  <div key={index} className="rounded-xl bg-white w-[250px] h-[400px]  p-[10px]">
                <img src={item.image} className="w-[250px] h-[200px] rounded-xl" alt="" />
                <h1 className="text-[25px] ml-[20px]">Name: {item.name}</h1>
                <h1 className="text-[25px] ml-[20px]">Price: {item.price}</h1>
                <div className="flex justify-around">
                  <button onClick={()=>editBooks(item)} className="w-[100px] bg-sky-600 p-[10px] text-white rounded-xl" > Edit</button>
                  <button onClick={()=>deleteBooks(item.id)} className="w-[100px] bg-red-500 p-[10px] text-white rounded-xl" > Delete </button>
                </div>
              </div>
          })
          }
        </div>
      </div>
    </div>
)}