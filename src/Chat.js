import { useState } from "react"
import { BsWhatsapp, BsX } from "react-icons/bs"
import {motion} from "framer-motion"
const Chat = () => {
    const[buttonPress,setbuttonPress]=useState(false)
    const class1={
        position:'fixed',
        padding:12,
        bottom:30,
        right:30,
        borderRadius: 80,
        backgroundColor:'rgb(67, 226, 67)',
        border:'none',
        rotate:0,
        transition:{duration:0.12}
    }
    const class2={
        position:'fixed',
        padding:12,
        bottom:30,
        right:30,
        borderRadius: 80,
        backgroundColor:'rgb(67, 226, 67)',
        border:'none',
        rotate:180,
        transition:{duration:0.12}
    }
    const changeClass=()=>{
        if(buttonPress){
            setbuttonPress(false)

        }
        else{
            setbuttonPress(true)
        }
    }
    return ( 
        <>
        <div className="chat">
                {buttonPress?<motion.button animate={class2} onClick={()=>changeClass()}><BsX size="25" color="white"/></motion.button>:<motion.button  animate={class1} onClick={()=>changeClass()}><BsWhatsapp size="25" color="white"/></motion.button>}
                {buttonPress?<motion.p animate={{y:30,opacity:0}}>Need Help? Chat with us</motion.p>:<motion.p animate={{y:0,opacity:1}}>Need Help? Chat with us</motion.p>}
        </div>
        </>
     )
}
 
export default Chat