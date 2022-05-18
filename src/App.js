import React,{useState, Component} from 'react';
import Axios from 'axios';
import './App.css';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { MD5 } from 'crypto-js';
import Modal from 'react-awesome-modal';

function App() {
  axios.defaults.baseURL="https://connect-global-api.paytriot.co.uk";
  //axios.defaults.headers.common['Authorization'] = "01d74cd8-24cf-48e5-a78a-f97a3a43ce26";
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  const [firstname, setfirstname] = useState("firstname");
  const [lastname, setlastname] = useState("lastname");
  const [email, setemail] = useState("12345678@163.com");
  const [phone, setphone] = useState("7845125623");
  const [address, setaddress] = useState("address");
  const [city, setcity] = useState("Tukwila");
  const [state, setstate] = useState("WA");
  const [zipcode, setzipcode] = useState("518109");
  const [country, setcountry] = useState("US");
  const [payby, setpayby] = useState("card");
  const [cardname, setcardname] = useState("Cardholder name");
  const [cardnumber, setcardnumber] = useState("4711100000000000");
  const [ccexpmonth, setccexpmonth] = useState("12");
  const [ccexpyear, setccexpyear] = useState("2022");
  const [cvv, setcvv] = useState("123");
  const [currency, setcurrency] = useState("USD");
  const [amount, setamount] = useState("10");
  const orderno = Math.floor(10000000000000000000 + Math.random() * 900000000).toString();
  const [modal, setModal] = useState(false);
  let api_data = { "foo": "sample", "bar": "sample" }


  function myFunction(dataa) {
    alert( JSON.stringify(dataa.tradeMsg) + "\n" + JSON.stringify(dataa));
  }


 

  function submit(e){
 
    const payment_data = {
      billAddress   :   address ,
      billCity   :   city  ,
      billCountry   :   country  ,
      billEmail   :   email  ,
      billFirstName   :   firstname   ,
      billLastName   :   lastname   ,
      billPhone   :   phone  ,
      billState   :   state  ,
      billZip   :   zipcode   ,
      cardName   :   cardname   ,
      cardNo   :   cardnumber   ,
      cvv   :   cvv   ,
      month   :   ccexpmonth   ,
      notifyUrl   :   "https://paytriot.co.uk"  ,
      orderAmount   :   amount   ,
      orderCurrency   :   currency  ,
      orderNo   :  orderno   ,
      remark   :   "payment"   ,
      returnUrl   :   "https://paytriot.co.uk"   ,
      terNo   :   "70044001"  ,
      website   :   "https://paytriot.co.uk"   ,
      year   :   ccexpyear   
    }
    
    console.log(payment_data);




    e.preventDefault();
    Axios.post('/payment/create_payment',JSON.stringify(payment_data))
    .then(res=>{
      console.log(firstname,lastname,email,phone,address);
      api_data = res.data;
      console.log(res.data)
      myFunction(res.data);
    })
    console.log("api data->",api_data);
    





  
        /*fetch("https://connect-global-api.paytriot.co.uk/payment/create_payment", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
      },
      "body": {
        "orderNo": "20211112000113047996",
        "terNo": "70044001",
        "orderAmount": "150",
        "orderCurrency": "USD",
        "billFirstName": "First_name",
        "billLastName": "Last_Name",
        "billAddress": "str",
        "billCity": "Tukwila",
        "billState": "WA",
        "billCountry": "US",
        "billZip": "518109",
        "billPhone": "12345678",
        "billEmail": "12345678@163.com",
        "cardName": "Anish Kul",
        "cardNo": "4711100000000000",
        "cvv": "123",
        "month": "12",
        "year": "2022",
        "website": "http://www.paytriot.co.uk",
        "returnUrl": "http://www.paytriot.co.uk",
        "remark" : "paytriot_payments"
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });*/





     
  }
  return (
    <div className='centre' >
      <h1>Paytriot Payments </h1>
      <div className='row'> 
        <form >
          <div className='row1'>
            <label>FirstName:
              <input
                className='inp-fntend'
                name="FirstName"
                type="text"
                value={firstname}
                onChange= {(e) => setfirstname(e.target.value)} />
            </label>
            <label>LastName:
              <input
                className='inp-fntend'
                name="LastName"
                type="text"
                value={lastname}
                onChange= {(e) => setlastname(e.target.value)} />
            </label>
            <label>Email:
              <input
                className='inp-fntend'
                name="email"
                type="text"
                value={email}
                onChange= {(e) => setemail(e.target.value)} />
            </label>
            <label>Phone:
              <input
                className='inp-fntend'
                name="Phone"
                type="text"
                value={phone}
                onChange= {(e) => setphone(e.target.value)} />
            </label>
            <label>Address:
              <input
                className='inp-fntend'
                name="address"
                type="text"
                value={address}
                onChange= {(e) => setaddress(e.target.value)} />
            </label>
            <label>City:
              <input
                className='inp-fntend'
                name="city"
                type="text"
                value={city}
                onChange= {(e) => setcity(e.target.value)} />
            </label>
            <label>State:
              <input
                className='inp-fntend'
                name="state"
                type="text"
                value={state}
                onChange= {(e) => setstate(e.target.value)} />
            </label>
            <label>Zipcode:
              <input
                className='inp-fntend'
                name="zipcode"
                type="text"
                value={zipcode}
                onChange= {(e) => setzipcode(e.target.value)} />
            </label>
            <label>Country:
              <input
                className='inp-fntend'
                name="country"
                type="text"
                value={country}
                onChange= {(e) => setcountry(e.target.value)} />
            </label>
          </div> 
          <div className='row1'> 
            <label>payby:
              <input
                className='inp-fntend'
                name="payby"
                type="text"
                value={payby}
                onChange= {(e) => setpayby(e.target.value)} />
            </label>
            <label>CardName:
              <input
                className='inp-fntend'
                name="cardname"
                type="text"
                value={cardname}
                onChange= {(e) => setcardname(e.target.value)} />
            </label>
            <label>CardNumber:
              <input
                className='inp-fntend'
                name="cardnumber"
                type="text"
                value={cardnumber}
                onChange= {(e) => setcardnumber(e.target.value)} />
            </label>
            <label>ExpMonth:
              <input
                className='inp-fntend'
                name="ccexpmonth"
                type="text"
                value={ccexpmonth}
                onChange= {(e) => setccexpmonth(e.target.value)} />
            </label>
            <label>ExpYear:
              <input
                className='inp-fntend'
                name="ccexpyear"
                type="text"
                value={ccexpyear}
                onChange= {(e) => setccexpyear(e.target.value)} />
            </label>
            <label>CVV:
              <input
                className='inp-fntend'
                name="cvv"
                type="text"
                value={cvv}
                onChange= {(e) => setcvv(e.target.value)} />
            </label>
            <label>Currency:
              <input
                className='inp-fntend'
                name="currency"
                type="text"
                value={currency}
                onChange= {(e) => setcurrency(e.target.value)} />
            </label>
            <label>Amount:
              <input
                className='inp-fntend'
                name="Amount"
                type="text"
                value={amount}
                onChange= {(e) => setamount(e.target.value)} />
            </label>
          </div>  
          
        </form>
        
        </div>
        <button className='btn' type='submit' onClick={submit} >Submit</button> 

    </div>
    
  );
}

 /* constructor(props) {
    super(props);
    this.state = {
      firstname:"test",
      lastname:"test",
      email:"test@gmail.com",
      phone:"7845125623",
      address:"test",
      city:"test",
      state:"dl",
      zipcode: "4567",
      country:"AI",
      timestamp:"12010210",
      payby:"Visa",
      cardname: "test",
      Cardnumber: "4111111111111111",
      ccexpmonth:"01",
      ccexpyear: "34",
      cvv: "123",
      currency: "USD",
      amount: 15,
      postbackurl:"https://www.google.com/vt/redirect/",
      successurl:"https://www. google.com/vt/redirect/",
      failurl:"https://www. google.com/vt/redirect/",
      c1:null,
      c2:null,
      c3:null,
      tokencode:"cc9bba11e51208fff4af83d144296f14",
      ipaddress:"::1",
      cctokenid:null,
      istokenrequest:false

    }
  };*/

export default App;
