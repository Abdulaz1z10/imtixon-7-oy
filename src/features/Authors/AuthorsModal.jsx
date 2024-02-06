import React, { useState } from 'react'
import axiosClient from '../../plugins/axiosClient'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function AuthorsModal({open, toggle}) {
    const [file, setFile] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        let payload = {
            full_name: e.target[0].value,
            birthdate: e.target[1].value,
            country: e.target[2].value
        }
        const formData = new FormData()
        formData.append("file", file)
        axiosClient.post("/files/upload", formData).then((response)=>{
            if (response?.status === 201) {
                axiosClient.post("/author", {...payload, image:response?.data?.link}).then((response)=>{
                    if(response.status === 201) {
                        window.location.reload()
                    }
                })
            }
        })
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
        <div>
            <ModalHeader>
            <h1>Add Authors</h1>
        </ModalHeader>
        <ModalBody>
            <div>
                <form className='flex flex-col' id='form' onSubmit={handleSubmit}>
                    <input type="text" className='mt-[20px] p-[10px] rounded-xl bg-orange-950 text-white' placeholder='Author name' />
                    <input type="birthdate" className='mt-[20px] p-[10px] rounded-xl bg-orange-950 text-white' placeholder='Birth data' />
                    <input type="text" className='mt-[20px] p-[10px] rounded-xl bg-orange-950 text-white' placeholder='State' />
                    <input type="file" className='mt-[20px] p-[10px] rounded-xl bg-orange-950 text-white' onChange={(e)=>setFile(e.target.files[0])} />
                    {/* <button>Add Authors</button> */}
                </form>
            </div>
        </ModalBody>
        <ModalFooter>
            <button form='form' className='rounded-xl bg-orange-950 p-[10px] text-white'>Add Authors</button>
        </ModalFooter>
        </div>
    </Modal>
  )
}
