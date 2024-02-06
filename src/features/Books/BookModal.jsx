import React, { useEffect, useState } from 'react'
import axiosClient from '../../plugins/axiosClient';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export default function BookModal({open, toggle}) {
    const [file, setFile] = useState('');
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        axiosClient.get("/author").then((response)=>{
            setAuthors(response?.data)
        })  
        axiosClient.get("/category/get/all").then((response)=>{
            setCategories(response?.data)
        })
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        let payload = {
            name: e.target[0].value,
            author_id: +e.target[1].value,
            price: +e.target[2].value,
            code: e.target[3].value,
            janr_id: +e.target[4].value,
            description: e.target[6].value
        }
        const formData = new FormData();
        formData.append("file", file)
        axiosClient.post("/files/upload", formData).then((response)=>{
            if(response.status === 201){
                axiosClient.post("/book/create", {...payload, image: response.data.link}).then((response)=>{
                    console.log(response)
                })
            }
        })
    }
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
          <h1 className="text-center">Add books</h1>
        </ModalHeader>
        <ModalBody>
          <div>
            <div>
              <form onSubmit={handleSubmit} id="form">
                <input
                  className="text-white bg-black text-xl p-[10px] w-[470px] rounded-xl my-[10px]"
                  type="text"
                  placeholder="name"
                />
                <select className="text-white bg-black text-xl p-[10px] w-[470px] rounded-xl my-[10px]">
                  <option value="" hidden>
                    Select author id...
                  </option>
                  {authors?.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.full_name}
                      </option>
                    );
                  })}
                </select>
                <input
                  className="text-white bg-black text-xl p-[10px] w-[470px] rounded-xl my-[10px]"
                  type="number"
                  placeholder="price"
                /> 
                <input
                  className="text-white bg-black text-xl p-[10px] w-[470px] rounded-xl my-[10px]"
                  type="number"
                  placeholder="code"
                />
                <select className="text-white bg-black text-xl p-[10px] w-[470px] rounded-xl my-[10px]">
                  <option value="">Select your janr id...</option>
                  {categories?.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <input
                  className="text-white bg-black text-xl p-[10px] w-[470px] rounded-xl my-[10px]"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <textarea
                  className="text-white bg-black text-xl p-[10px] h-[100px] w-[470px] rounded-xl my-[10px] resize-none"
                  cols="30"
                  rows="10"
                  placeholder="Description"
                >
                </textarea>
              </form>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            form="form"
            className="w-[100px] bg-cyan-700 text-white px-[10px] rounded-xl py-[10px]"
          >
            Add books
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
