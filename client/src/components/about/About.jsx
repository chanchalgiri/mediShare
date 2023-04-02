import { color } from "@mui/system";
import medicines from "../../aboutUsimg.gif";
const About = () => {

    return (
        <div style={{display:'flex'}}>
            <div>
                <img src={medicines} />
            </div>
            <div style={{marginTop:'50px',width:'50%'}}>
                <h1 style={{fontSize:'33px',color:'#0d89de'}}>MEDIshare</h1>
                <p style={{fontSize:'23px'}}>Trying to make the world a happier and healthier place, Donating health and wellness through free medicines.</p>
                <p style={{fontSize:'20px'}}>We often are left over with surplus medicines. Many a times, we do not consume all the medicines from a bottle or a strip and then are faced with a dilemma as to what to do with them. On the other hand there are several people who are in need of such expensive medicines in the course of their treatment, but cant afford to buy these.
                 We understood the dilemma faced by those who had surplus medicines as well as those who are medicine deficit. They devised a technique to bridge the gap —- they would collect surplus and donate to the deficit areas.</p>
                 <h3 style={{fontSize:'24px'}}>Our Missions</h3>
                <ul>
                    <li style={{fontSize:'20px'}}>To ensure that surplus medicine is utilised in the correct manner</li>
                    <li style={{fontSize:'20px'}}>To reduce medical waste</li>
                </ul>

            </div>
        </div>
    )
}

export default About;