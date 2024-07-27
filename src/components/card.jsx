import React, { useState } from "react";
import Modal from "./model"

const card = ({book})=>{
   
    const [Show,setShow] = useState(false);
    const [bookItem,setItem]=useState();
    return(
        <>
        {
            book.map((item)=>{
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount; 
                if(thumbnail!= undefined && amount!=undefined){
                    return(
                        <>
                        <div className="card" onClick={()=>{setShow(true),setItem(item)}}>
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">{amount}</p>
                            </div>
                        </div>
                        <Modal show = {Show} item={bookItem}/>
                        </>
                    );
                }

            })
        }
        </>
    );
}
export default card


// const card = ({book})=>{
//      console.log(book);
//     return(
//         <>
//         {
//             book.map((item)=>{
//                 let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
//                 let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
//                 if(thumbnail!= undefined && amount!=undefined){
//                     return(
//                         <>
                        
//                         <div className="card">
//                             <img src={thumbnail} alt="" />
//                            <div className="bottom">
//                                <h3 className="tittle">{item.volumeInfo.title}</h3>
//                                 <p className="amount">{amount}</p>
//                            </div>
                           
//                        </div>
//                        </>
//                     )
                       
                       

//                 }
                

//             })
//         }
        
        
//     );
// }
// export default card
