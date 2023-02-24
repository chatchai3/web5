import { Alert } from "bootstrap";
import React,{useState} from "react";
import Show from "./Show";
const Post=()=>{
    const [datastate,setdatastate] = useState({
        data :[
            {id:1,product:"ขนม",price:90,quantity:4},
            {id:2,product:"ขนม1",price:90,quantity:10},
            {id:3,product:"ขนม2",price:90,quantity:10},
            {id:4,product:"ขนม3",price:90,quantity:10},
            {id:5,product:"ขนม3",price:90,quantity:10},
            {id:6,product:"ขนม3",price:90,quantity:10},
            {id:7,product:"ขนม3",price:90,quantity:10},
            {id:8,product:"ขนม3",price:90,quantity:10},
            {id:9,product:"ขนม3",price:90,quantity:10},
            {id:10,product:"ขนม3",price:90,quantity:10}
        ]


    })
    const delete_std=(index)=>{
        const  information = [...datastate.data]
        information.splice(index,1)
        setdatastate({
           data: information
        })
    }
    const buy=(index)=>{
        let quantity_ = datastate.data[index].quantity = datastate.data[index].quantity -1;

        const  information = [...datastate.data]
        information[index].quantity = quantity_
       
        setdatastate({
            data: information
         })  
    }
    const cancel_buy=(index)=>{
        let quantity_ = datastate.data[index].quantity = datastate.data[index].quantity +1;
        const  information = [...datastate.data]
        information[index].quantity = quantity_
       
        setdatastate({
            data: information
         })
    }
    
    return(
        <React.Fragment>
        {datastate.data.map((e,index)=>{
        
            return (
            
            <Show send_data={e} key = {datastate} de={delete_std.bind(this,index) } bu = {buy.bind(this,index)} cancel ={cancel_buy.bind(this,index)} ></Show>
           
    
            )

        })}
        </React.Fragment>
    );
}
export default Post;