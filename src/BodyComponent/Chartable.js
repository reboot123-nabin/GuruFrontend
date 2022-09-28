const Charatable=()=>{
return(
    <>
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
          <img src={'./photos/18.jpg'} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={'./photos/16.jpg'} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={'./photos/3.jpg'} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={'./photos/8.jpg'} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={'./photos/10.jpg'} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={'./photos/14.jpg'} class="d-block w-100" alt="..." />
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
    </>
)
}

export default Charatable;