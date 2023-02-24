import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Show.css';
const Show=(props)=>{
    const [status,setstatus]= useState(true);
    const [status_quantity,setstatus_quantity]= useState(true);
    const [confirm,setconfirm]= useState(true);
    let text = "ยืนยันการซื้อ!";

    let quantity = Number(props.send_data.quantity)
    const st =()=>{
        setstatus(!status)
        if(quantity ==0){
            setstatus_quantity(false)
        }else{
            if(status == true){
                props.bu()
            }else{    
                props.cancel()
            }
        }
       
    }
    const delete_std1=()=>{
        console.log(props.send_data)
        if (status){
            props.de()
        }else{
            if(quantity ==0){
                if(window.confirm(text)==true){
                    setstatus(true)
                    setstatus_quantity(false)
                }else{
                    setstatus(true)
                    props.cancel()
                }
            }else{
                if(window.confirm(text)==true){
                    setstatus(true)
                }else{
                    setstatus_quantity(true)
                    props.cancel()
                    setstatus(true)
                }
            }
        }
    }
    return(
            
            <div className="col-sm-2 m-2">
                <div className={status?"card border border-dark":"card shadow-lg  border border-dark"}>
                    <p className={status_quantity?"text":"text1"}><strong>{status_quantity?(`คงเหลือ${quantity}`):("หมดแล้ว")}</strong></p>
                    <div className="card-body "style={{width: "18rem;"}}>
                        <img src="aa.jpg" class="card-img-top" alt="..."/>
                        <h6 className="card-title">{props.send_data.product}  ราคา {props.send_data.price} บาท</h6>
                        <button className={status?"btn btn-primary me-1":"btn btn-danger me-1"} onClick={st}>{status?"ซื้อ":"ยกเลิก"}</button>
                        <button className={status?"btn btn-danger":"btn btn-success"} onClick={delete_std1}>{status?"ลบ":"ชำระเงิน"}</button>
                    </div>
                </div>
            </div>

    );
}
export default Show;