import {useEffect, useState} from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import SliderData from './SliderData';
const BackgroundSlider = () => {
    const[currentState,setState]=useState(0);
    const[mouseHovered,setMouse]=useState(false);
    // useEffect({
    //     if(mouseHovered){
            
    //     }
    // }
    // ,[mouseHovered])
    const prevSlide=()=>{
        const isFirstSlide= currentState === 0;
        const prevState=isFirstSlide?SliderData.length-1:currentState-1;
        setState(prevState);
    }
    const nextSlide=()=>{
        const isFinalSlide= currentState === SliderData.length-1;
        const newState=isFinalSlide?currentState-(SliderData.length-1):currentState+1;
        setState(newState);
    }
    return(
        <div className='background-slider'>
            <button className="arrow-left" onClick={prevSlide}><BsChevronCompactLeft size={50}/></button>
            <button className="arrow-right" onClick={nextSlide}><BsChevronCompactRight size={50}/></button>
        {SliderData.map((slide,index)=>{
            return(
                <div className={index === currentState?'current-slide-active':'current-slide'} key={index}>
                    {index === currentState &&(
                        <>
                        <div className='current-image'>
                            <img src={`${require(`${slide.image}`)}`}/>
                        </div>
                        
                        <div className='current-text'>
                            <h1>{slide.title}</h1>
                            <p>{slide.body}</p>
                            <a href={slide.buttonURL}>
                                <button>{slide.button}</button>
                            </a>
                        </div>
                        </>) 
                    }
                    
                </div>
            )
        })}
        </div> ); 
}
 
export default BackgroundSlider;