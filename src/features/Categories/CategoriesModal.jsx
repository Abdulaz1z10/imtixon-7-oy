    import React from 'react'
    import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
    import axiosClient from '../../plugins/axiosClient'

    export default function CategoriesModal({open, toggle, item, setItem}) {
        const handleSubmit=(e)=>{
            e.preventDefault();
            let name = e.target[0].value
            axiosClient.post("/category/create", {
                name: name,
            }).then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            })
            setItem('')
        }
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1>Add categories</h1>
            </ModalHeader>
            <ModalBody>
                <div className=''>
                    <form id='form' onSubmit={handleSubmit}>
                        <input className='w-[470px] bg-black rounded-xl py-[10px] px-[10px] text-white text-xl' defaultValue={item.name} type="text" placeholder='name' />
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className='text-white bg-black p-[10px] rounded-xl text-xl 'form='form' >Add categories</button>
            </ModalFooter>
        </Modal>
    )
    }
