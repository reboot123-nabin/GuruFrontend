import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Registration=()=>{
    const navigate = useNavigate();
    const[user,setUser]=useState({name:"",address:"",email:"",password:"",country:"",sponsor:""})
    const handleInput = (e) => {

        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      }
   
      const registerform=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',user)
        .then((res)=>{
            setUser(res.data.user);
            console.log(res.data)
          toast.success("you have successfully regitered")
            setTimeout(()=>{
              navigate('/login')
          },3500)
        })
        .catch((err)=>{
          toast.error("registration failed")
            console.log(err);
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
                <p>Name :</p>
                <input type="text" placeholder="Enter your name :" onChange={handleInput} name="name" value={user.name}/>
            </div>
            <div class="inputs">
                <p>Address :</p> 
                <input type="text" placeholder="Enter your address :" onChange={handleInput} name="address" value={user.address}/>
            </div>
            <div class="inputs">
                <p>Email :</p>
                <input type="text" placeholder="Enter your email :" onChange={handleInput} name="email" value={user.email}/>
            </div>
            <div class="inputs">
                <p>Password :</p>
                <input type="password" placeholder="Enter your password :" onChange={handleInput} name="password" value={user.password}/>
            </div>
            <div class="inputs">
                <label > Choose Country :</label>
                <select onChange={handleInput} name="country" value={user.country}>
                    <option value="nepal">Nepal</option>
                    <option value="australia">Australia</option>
                    <option value="thailand">Thailand</option>
                    <option value="india">India</option>
                </select>
            </div>
            <div class="inputs">
                <label>Types of Sponsored : </label>
                
            </div>
            <div class="inputs">
                <div class="sponsored">
                <select onChange={handleInput} name="sponsor" value={user.sponsor}>
                    <option value="5">General Sponsor   $5</option>
                    <option value="10">General Sponsor $10</option>
                    <option value="15">General Sponsor $15</option>
                    <option value="20">General Sponsor $20</option>
                    <option value="25">General Sponsor $25</option>
                    <option value="30">General Sponsor $30</option>
                    <option value="35"> General Sponsor $35</option>
                    <option value="40">General Sponsor $40</option>
                    <option value="45">General Sponsor $45</option>
                     <option value="50">General Sponsor $50</option>
                     <option value="100">General Sponsor $100</option>
                    <option value="250">General Sponsor $250</option>
                    <option value="500">General Sponsor $500</option>
                     <option value="1000">General Sponsor $1000</option>
                </select>
                <select onChange={handleInput} name="sponsor" value={user.sponsor}>
                    <option value="1000">Life time Sponsor $1000</option>
                </select>
                <select>
                    <option>Indivisual Monk Sponsor per month </option>
                    <option>Indivisual Monk Sponsor per year </option>
                </select>
            </div>
            </div>
    <button class="login_button" type="submit" onClick={registerform}>
       <p>Sign up as Sponsor</p> 
    </button>

        </div>
    </section>
        </>
    )
    }
    
    export default Registration;