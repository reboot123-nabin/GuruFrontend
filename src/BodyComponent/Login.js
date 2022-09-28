import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Login=()=>{
    const navigate = useNavigate();
    const[user,setUser]=useState({email:"",password:""})
    const handleInput = (e) => {

        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      }
      const loginform=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/signin',user)
        .then((res)=>{
            toast.success(res.data.message);
            localStorage.setItem('token', res.data.token)
           
            console.log(res.data.message)
            setTimeout(() => {
                navigate('/')
              }, 3500)
               })
        .catch((err)=>{
            console.log(err);
            toast.error("Invalid credentials!");
        })
        
    }
    return(
        <>

<ToastContainer/>
        <section class="boxform">
        <div class="login_box">
            <div class="logo_img">
               <a href="index.html"> <img src={'./img/logo.png'} alt=""/></a>
                <h2>RDCCK</h2>
            </div>
       
            <div class="inputs">
                <p>Email :</p>
                <input type="email" placeholder="Enter your email :" onChange={handleInput} name="email" value={user.email}/>
            </div>
            <div class="inputs">
                <p>Password :</p>
                <input type="password" placeholder="Enter your password :" onChange={handleInput} name="password" value={user.password}/>
            </div>
           
            </div>
    <button class="login_button" type="submit" onClick={loginform}>
       <p>Sign up as Sponsor</p> 
    </button>

      
    </section>
        </>
    )
    }
    
    export default Login;