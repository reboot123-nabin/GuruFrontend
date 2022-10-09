import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import QRCode from 'qrcode'
import 'react-toastify/dist/ReactToastify.css';
const Sponsor=()=>{
    const navigate = useNavigate();
    
    const[user,setUser]=useState({cname:"",cnumber:"",month:"",year:"",supportfor:"",name:"",csc:"",email:"",address:"",country:"",date:""})
    const handleInput = (e) => {

        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      }
      const [url, setUrl] = useState('')
      const [qr, setQr] = useState('')
    
      const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
          width: 800,
          margin: 2,
          color: {
            dark: '#335383FF',
            light: '#EEEEEEFF'
          }
        }, (err, url) => {
          if (err) return console.error(err)
    
          console.log(url)
          setQr(url)
        })
      }
      const sponsorform=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/insert',user)
        .then((res)=>{
        
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
 <section class="wrapper statement">
      <div class="through_bank">
        <h1>Support Us through bank</h1>
        <h4>Payment details</h4>
        <div class="cardholder">
          <h4>Cardholder name:</h4>
          <input type="text" placeholder="Cardholder name" name="cname" onChange={handleInput} value={user.cname} />
        </div>
        <div class="cardholder">
          <h4>Card number:</h4>
          <input type="text" placeholder="Card number" name="cnumber" onChange={handleInput} value={user.cnumber} />
        </div>
        <div class="cardholder card_img">
          <a href=""> <img src={'img/master (1).png'} alt="" /></a>
          <a href=""><img src={'img/master (2).png'} alt="" /></a>
        </div>
        <div class="cardholder">
          <h4>Expiration:</h4>

          <select name="month" onChange={handleInput}>
            <option>month</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option  value="5">5</option>
            <option  value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select name="year"onChange={handleInput}>
            <option>Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
          </select>
          <h4>CSC:</h4>
          <input type="text" name="csc" onChange={handleInput} id="" />
        </div>
        <div class="topic_name">
          <p>Support for :</p>
          <select name="supportfor" onChange={handleInput}>
            <option value="Yeshe Gyatso">Yeshe Gyatso</option>
            <option value="Indivisual monk per month">Indivisual monk per month</option>
            <option value="Intdivisual monk per year">Intdivisual monk per year</option>
            <option value="Food">Food</option>
            <option value="stationary">stationary</option>
            <option value="Medical care">Medical care</option>
            <option value="Staff expenses">Staff expenses</option>
            <option value="Puja and practices">Puja and practices</option>
            <option value="RDCCK monastic schooll construction">RDCCK monastic schooll construction</option>
            <option value="Temporary monastic college construction">Temporary monastic college construction</option>
            <option value="Meditation center construction">Meditation center construction</option>
            <option value="IT equiptments">IT equiptments</option>
            <option value="Buddhist Television Programs">Buddhist Television Programs</option>
            <option value="Pilgrimage documentary and Films">Pilgrimage documentary and Films</option>
            <option value="Mahabodhi Documentary & Film Production Foundation">Mahabodhi Documentary & Film Production Foundation</option>
          </select>
        </div>
      </div>
      {/* <div class="through_wallet">
        <h1>Bank Account Details</h1>
        <div class="wallet">
          <div class="khalti_wallet">
          <h3 style="text-align: center;margin-bottom: 30px">Beneficiary Bank account:</h3>
          <h4>
          Prabhu Bank
          Beneficiary Name:Dechhen Chhoeling Louke Boudha Gumba
          SWIFT:Dechhen Chhoeling Louke Boudha Gumba
          PRVUNPKA
          A/C No.: 0400-1439-5580-0011
          Swaymabhu Branch,KMC-15, Kathmandu
      
           
            </h4>
          </div>
          <div class="esewa_wallet">
            <h3 style="text-align: center;">QR Code</h3>
            <img src={'./img/esewa.png'} alt="" />
          </div>
        </div>
      </div> */}
    </section> 
    <section class="wrapper  statement">
      <section class="signup_sponsored through_bank">
        <h3>Sponsor's details</h3>
        <div class="topic_name">
          <p>Name :</p>
          <input type="text"  id="" placeholder="enter your name" onChange={handleInput} name="name" value={user.name} />
        </div>
        <div class="topic_name">
          <p>Email :</p>
          <input type="text" name="email" value={user.email} onChange={handleInput} id="" placeholder="enter your mail" />
        </div>
        <div class="topic_name">
          <p>Country :</p>
          <select name="country"onChange={handleInput}>
            <option value="thailand">Thailand</option>
            <option value="Myanmar">Manmyar</option>
            <option value="Australia">Australia</option>
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
          </select>
        </div>
        <div class="topic_name">
          <p>Address :</p>
          <input type="text" name="address" value={user.address} onChange={handleInput} id="" placeholder="enter your mail" />
        </div>
      
        <div class="topic_name">
          <p>Date of birth :</p>
          <input type="date" onChange={handleInput} value={user.date} name="date" />
        </div>

        <button class="submit_button" type="button" onClick={sponsorform}>Submit</button>
      </section>
      
      <section class="through_wallet western">
        <img src="img/western.png" alt="" />
        <h3>
          For Western Union, IME and others <br />
          Detail of reciepent's <br />
          Name: Sonam Gyurme Tamang<br />
          Adress: Boudha Circle, Boudha-6, Kathmandu,Nepal <br />
          Mobile Nomber: 977-9849118562 <br />
          Email: buddhistlecturer@gmail.com <br />
        </h3>
      </section>
    </section>
    <div class="content_center">
    <div class="through_wallet wallet_down">
      <h1>Support Us through Wallet</h1>
      <div class="wallet">
        <div class="khalti_wallet">
          <h3>Support us through khalti</h3>
          <img src="img/khalti.png" alt="" />
        </div>
        <div class="esewa_wallet">
          <h3>Support us through esewa</h3>
          <img src="img/esewa.png" alt="" />
        </div>
      </div>
    </div>
  </div>


  <h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}


        </>
    )
    }
    
    export default Sponsor;