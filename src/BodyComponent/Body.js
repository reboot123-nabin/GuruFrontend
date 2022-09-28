import React from 'react';
 import Header from '../CommonComponent/Header'
 import Footer from '../CommonComponent/Footer'
const Body = () => {

    

  return (
    <div>
     









<div class="slider">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={'./img/slider_6'} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={'./img/sliider_4.jpg'} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={'./img/slider_3.jpg'} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={'./img/slider_5.jpg'} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={'./img/slider_2.jpg'} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={'./img/slider_1.jpg'} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div> 
     <section class="video_details">
      <div class="wrapper details_video">
        <div class="vid_detail container">
          <div>
            <h1>RDCCK, Who we are?</h1>
            <h5>
              RDCCK is a practical school run by Buddhist monk that is
              responsible for teaching and training Buddhism, Philosophy,
              Buddhist Arts, culture, rituals, yoga and retreat, healing,
              astrology, modern education including IT and Television programs
              and also it's operating system.
            </h5>
            <button>
              <a href="aboutus.html"
                >More About Us <i class="fa-solid fa-arrow-right"></i></a>
            </button>
          </div>
        </div>
        <div class="yt_video container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LF0Vh5cs6LQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
   
    <section class="mission_vision">
      <h1>Our mission and vision</h1>
      <div class="wrapper misson_IT">
        <div class="why_IT">
          <a href=""
            ><img src={'./img/7.jpg'} alt="" />
            <div class="description">
              <h3>Why IT, Television and Film trainings ?</h3>
              <h5>
                To the era of Info-Tech, IP TV, Social media, Film and
                documentary We RDCCK without personal attachment just take
                benefits from all those new technologies to pass voice of
                Buddhas to the entire world fastest and effective way and make
                Buddha Dharma a digital path as an easy way of usderstanding
                Self-Buddha nature and unltimate truth.
              </h5>
            </div>
          </a>
        </div>
        <div class="why_IT">
          <a href=""
            ><img src={'./img/8.jpg'} alt="" />
            <div class="description">
              <h3>Mission of RDCCK</h3>
              <h5>
                Our mission is to produce excellent trained and qualified monks,
                nuns and general students on modern and traditional Buddhist
                education , IT, Television, documentery and Film industry field.
              </h5>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="mission_vision">
      <h1>Cheritable Projects</h1>
      <div class="wrapper charatable_IT">
        <div class="charatable_projects">
          <a href=""
            ><img src={'./img/project_1.jpg'} alt="" />
            <div class="description">
              <h3>Monastic scholl contruction at Barahithan, Nuwakot, Nepal</h3>
            </div>
          </a>
        </div>
        <div class="charatable_projects">
          <a href=""
            ><img src={'./img/project_2.jpg'} alt="" />
            <div class="description">
              <h3>
                Temporary Monastic college construction at Jorpati,
                Kathmandu,Nepal
              </h3>
            </div>
          </a>
        </div>
        <div class="charatable_projects">
          <a href=""
            ><img src={'./img/project_3.jpg'} alt="" />
            <div class="description">
              <h3>Retreat Centre at Kakani, Nuwakot,Nepal
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="video_details video_2">
      <div class="wrapper details_video">
        
        <div class="yt_video container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0ON4EoahD0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="vid_detail container">
          <div>
            <h1>Support Us</h1>
            <h5>
              RDCCK is a practical school run by Buddhist monk that is
              responsible for teaching and training Buddhism, Philosophy,
              Buddhist Arts, culture, rituals, yoga and retreat, healing,
              astrology, modern education including IT and Television programs
              and also it's operating system.
            </h5>
            <button>
              <a href="suport_us.html"
                >Support Us <i class="fa-solid fa-arrow-right"></i></a>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="image_ads">
      <img src={'./img/slider_5.jpg'} class="d-block w-100" alt="..." />
    </section>
    <section class="our_products">
      <h1>Supporting members</h1>
      <div class="wrapper products_img_details">
        <div class="product"><img src={'./img/person_1.jpg'} alt=""/></div>
        <div class="product"><img src={'./img/person_2.jpg'} alt=""/></div>
        <div class="product"><img src={'./img/person_3.jpg'} alt=""/></div>
        <div class="product"><img src={'./img/person_4.jpg'} alt=""/></div>
        <div class="product"><img src={'./img/person_5.jpg'} alt=""/></div>
        <div class="product"><img src={'./img/person_6.jpg'} alt=""/></div>
        <div class="product"><img src={'./img/person_7.jpg'} alt=""/></div>
        <div class="product"><img src={'./img/person_1.jpg'} alt=""/></div>
      </div>
    </section> 
     
</div>
  )
  }

export default Body