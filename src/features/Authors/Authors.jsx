import React, { useEffect, useState } from 'react'
import axiosClient from '../../plugins/axiosClient'
import Menu from '../menu/Menu'
import AuthorsModal from './AuthorsModal'
import { Link } from 'react-router-dom';

export default function Authors() {
    const [modal, setModal] = useState(false)
    const [authors, setAuthors] = useState([])
    const [edit, setEdit] = useState('')
    const toggle =()=>{
        setModal(false)
        setEdit('')
    }
    const openEditModal = (item) => {
    setEdit(item);
    setModal(true);
  };

    const deleteModal = (id) => {
    axiosClient.delete("/author/${id}").then((res) => {
        if (res?.status === 200) {
          window.location.reload();
        }
      }).catch((err) => {
        console.log(err);
      });
  };

    useEffect(()=>{
        axiosClient.get("/author").then((response)=>{
            setAuthors(response?.data)
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
   <div>
    <div className='flex gap-[50px] h-[100vh] w-[1519px] bg-[url("./src/assets/books-img.jpg")]'>
      <Menu/>
      <AuthorsModal edit={edit} open={modal} toggle={toggle}/>
      <div className='ml-[300px]'>
              <button className='p-[10px] text-2xl h-[60px] mt-[20px] w-[200px] py-[10px] bg-red-900 text-white  rounded-xl' onClick={()=>setModal(true)}>Add Authors</button>
      </div>
     <div className=" flex flex-wrap">
         {
        authors?.map((item,index)=>{
          return <div key={index} className='mt-[20px] pt-[10px] rounded-xl w-[300px]  h-[420px] bg-slate-300 ml-[20px]'>
              <img src={item.image} className='flex w-[250px] h-[200px] ml-[20px] rounded-xl' alt="" />
              <h3 className='pl-[20px] h-[30px]'>{item.full_name}</h3>
              <h3 className='pl-[20px] h-[30px] w-[290px]'>{item.birthdate}</h3>
              <h3 className='pl-[20px] mt-[5px] h-[30px]'>{item.country}</h3>
              <div className=' ml-[60px]'>
                <button className="w-[80px] bg-sky-600 p-[10px] text-white rounded-xl" onClick={() => openEditModal(item)}>Edit</button>
                <button className="ml-[20px] w-[80px] bg-red-600 p-[10px] text-white rounded-xl" onClick={() => deleteModal(item.id)}>Delete</button>
              </div>
                <button className="w-[200px] ml-[50px] bg-violet-900 p-[10px] mt-[10px] text-white rounded-xl">
                <Link to={'/singleauthor'}>More</Link>
              </button>
          </div>
        })
      }
     </div>
    </div>
   </div>
  );
}