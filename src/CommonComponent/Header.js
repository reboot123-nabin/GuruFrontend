import React,{useState,useEffect} from 'react';


const Header = () => {

   
  return (
    <div>
    
    <header>
      <section class="wrapper header_part">
        <div class="logo_img_name">
          <a href="">
            <div class="logo_img">
              <img src="img/logo.png" alt="" class="imagelogo" />
            </div>
            <h1 class="logo_display_1">Rigzin Dechhen Chhoeling Chuglag Khang</h1>
            <h1 class="logo_display">RDCCK</h1>
          </a>
        </div>
        <div class="main_menu">
          <ul>
            <li class="active menu_topic"><a href="index.html">Home</a></li>
            <li class="menu_topic"><a href="aboutus.html">About Us</a></li>
            <li class="menu_topic"><a href="charatable.html">Projects</a></li>
            <li class="menu_topic"><a href="login.html">Sign up</a></li>
            <li class="Donate_us"><a href="suport_us.html"> Support Us </a></li>
          </ul>
          
          <div class="dropdown">
            <li class="Donate_us display_donate"><a href="suport_us.html"> Support Us </a></li>
            <li class="signup_top display_donate"><a href="login.html">Sign up</a>  </li>
            <button
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="menu_bar" id="menu_bar">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </button>
            <ul class="dropdown-menu">
              <a class="dropdown-item" href="index.html">Home</a>
              <a class="dropdown-item" href="aboutus.html">About Us </a>
              <a class="dropdown-item" href="charatable.html"
                >Charitable Project
              </a>
              <a class="dropdown-item" href="login.html">Sign up </a>
            </ul>
          </div>
        </div>
      </section>
    </header>

 

    </div>
  )
}

export default Header