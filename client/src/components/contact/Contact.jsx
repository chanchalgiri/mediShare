import { display } from "@mui/system";
import contactUsimg from "../../contactusImage.gif";

const Contact = () => {
    return (
        <div style={{width:'90vw',display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex',flexDirection:'column',margin:'70px'}}>
                <div><h2 style={{fontSize:'70px'}}>We Are Here For You.</h2></div>
                <div style={{display:'flex',flexDirection:'column', marginLeft:'10px'}}>
                    <a href="" style={{textDecoration:'none',fontSize:'18px',margin:'5px'}}>Email</a>
                    <a href="" style={{textDecoration:'none',fontSize:'18px',margin:'5px'}}>Phone</a>
                    <a href="" style={{textDecoration:'none',fontSize:'18px',margin:'5px'}}>Facebook</a>
                    <a href="" style={{textDecoration:'none',fontSize:'18px',margin:'5px'}}>Instagram</a>
                </div>
            </div>
            <div>
                <img src={contactUsimg}/>
            </div>
        </div>
    );
}

export default Contact;