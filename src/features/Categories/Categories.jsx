import React, { useEffect, useState } from 'react'
import Menu from '../menu/Menu'
import CategoriesModal from './CategoriesModal'
import axiosClient from '../../plugins/axiosClient'

export default function Categories() {
    const [modal, setModal] = useState(false)
    const [item, setItem] = useState('')
    const [category, setCategory] = useState([])
    const [deleteCategory] = useState('')
    useEffect(()=>{
        axiosClient.get("/category/get/all").then((response)=>{
            setCategory(response?.data)
        })
    },[])
    const toggle =()=>{
        setModal(false)
    }
    const addCategory =()=>{
        setModal(true)
    }
    const editCategory =(item)=>{
        setModal(true),
        setItem(item)
    }
    // const deleteCategory =(id)=> {
    //     axiosClient.delete(`/category/${id}`).then((response) => {
    //         if(response?.status === 200) {
    //             window.location.reload()
    //         }
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }
  return (
    <div className='flex h-[100vh] bg-[url("./src/assets/books-img.jpg")]'>
      <Menu/>
    <CategoriesModal open={modal} toggle={toggle} item={item} setItem={setItem}/>
    <div className='ml-[250px]'>
        <button onClick={addCategory} className=' w-[100px] h-[60px] ml-[20px] mt-[20px] rounded-xl text-white text-2xl bg-orange-950'>Open</button>
    </div>
    <div className='flex flex-wrap gap-[100px] h-[100px] '>
            {
                category?.map((item, index)=>{
                    return <div className=' w-[200px] h-[200px] mt-[20px] ml-[10px] bg-white rounded-xl' key={index}>
                        <h1 className='text-current p-[20px]' >{item.name}</h1>
                        <div className='mt-[20px] flex'>
                            <button className='rounded-xl text-white text-xl bg-orange-950 ml-[15px] p-[20px]' onClick={()=>editCategory(item)}>Edit</button>
                            <button className='rounded-xl text-white text-xl bg-orange-950 ml-[20px] p-[20px]' onClick={()=>deleteCategory(id)} >Delete</button>
                        </div>
                    </div>
                })
            }
    </div>
    </div>
  )
}
