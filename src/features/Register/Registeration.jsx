import React from 'react'
import axiosClient from '../../plugins/axiosClient';
import { useNavigate } from 'react-router-dom';

export default function Registeration() {
  const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        const full_name = e.target[0].value;
        const username = e.target[1].value;
        const password = e.target[2].value;
        axiosClient.post( '/auth/signup', {
            full_name: full_name,
            username: username,
            password: password
        }).then((response)=>{
          let url = response?.data?.token?.refresh_token;
          localStorage.setItem("token", url)
            if(response?.status == 201){
              navigate ("/sign_in")
            }}).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='bg-[url("./src/assets/Soothing-nature-backgrounds-2.jpg.webp")] w-[1535px] h-[725px]'>
      <h1 className="text-white ml-[650px] pt-[30px] mb-[100px] font-serif">
        Registration
      </h1>
      <div className="ml-[550px] rounded-2xl w-[400px] h-[400px] bg-current ">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name..."
              className="p-[10px] w-[350px] rounded-xl mt-10 ml-8 bg-amber-900 text-white
              "
            />
            <input
              type="text"
              placeholder="Username..."
              className="p-[10px] w-[350px] rounded-xl mt-10 ml-8 bg-amber-900 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-[10px] w-[350px] rounded-xl mt-10 ml-8 bg-amber-900 text-white"
            />
            <h3> </h3>
          <div className="ml-[140px] mt-[30px]">
            <button type='submit' className=" rounded-xl p-[15px] px-[30px] text-white text-xl bg-sky-700">Sign up</button>
           
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
