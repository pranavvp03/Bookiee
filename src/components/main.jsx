import React, {useState} from "react";
import Card from "./card";
import axios from "axios";

const main = ()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook = (evt)=>{
        if(evt.key==="Enter"){

           axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyC5V-UR9-8ySfupOTPubdOcAdIdaNKyP-8'+'&maxResults=40')
           .then(res=>setData(res.data.items))
           .catch(err=>console.log(err));
        }
    }
  return(
        <>
          <div className="Header">
           <div className="row1">
            <h1>Welcome To Book Library</h1>
           </div>
           <div className="row2">
             <h2>Find Your Books</h2>
              <div className="search">
                  <input type="text" placeholder="Enter Your Book name" 
                  value={search} onChange={e=>setSearch(e.target.value)}
                  onKeyPress={searchBook}/>
                  <button ><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
             </div>
             <img src="https://raw.githubusercontent.com/Kirti-salunkhe/OpenBook/9ddd9aca63961ddf12d86a75791ccc6b6d9f3516/public/images/bg2.png" alt="" />
           </div>
          </div>

          <div className="container">
            {
               <Card book={bookData}/>
            }
             
              
          </div>
       </>  
   );
}
export default main