import {React,useState} from "react"
import Form from "./Components/Form"
import Card from "./Components/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStopwatch } from "@fortawesome/free-solid-svg-icons"
import SelectCard from "./Components/SelectCard"

export default function App() {
    const [images, setImages] = useState([])
    const [showBtn,setShowBtn] = useState(true)
    const [time,setTime] = useState(5)
    const [counter,setCounter] = useState(0)
    const [savedImage,setSavedImage] = useState(null)
    const [gameStart,setGameStart] = useState(false)

    function handleTimer(timeNow) {
        setShowBtn(false)
        setCounter(counter=>counter+1)

        const timer = setInterval(()=> {
            if(timeNow>0) {
                timeNow--
                setTime(timeNow)
            } else {
                clearInterval(timer)
                setShowBtn(true)
                setTime(5)
            }
        },1000)}

        return (
            <div className="bg-grey">


                {/* // STEP ONE */}
                <div>
                    {!gameStart && images.length==0 &&
                        <div className=" text-blue  h-dvh flex flex-col items-center justify-center">
                            <Form setImages={setImages}/>
                        </div>}
                </div>

                {/* //STEP TWO */}
                <div>
                    {!gameStart && images.length > 0 && 
                        <div className="text-blue w-full h-dvh flex flex-col justify-center items-center">
                            <SelectCard images={images} saveCurrentImage={(image)=>{setSavedImage(image)}}/>
                            <div className="flex items-center">
                                <button onClick={()=>setImages([])} className="bg-grey border-2 border-blue px-4 py-2 rounded font-bold mr-10">BACK</button>
                                <button onClick={()=>setGameStart(true)} className="bg-blue text-grey border-blue border-2 px-4 py-2 rounded font-bold">START</button>
                            </div>
                        </div>}
                </div>
                

                {/* STEP THREE */}
                <div>
                    {gameStart && 
                        <div className="text-blue w-full h-dvh flex flex-col items-center">
                            <div className="flex flex-col items-center justify-center">

                                {/* INTRO */}
                                <div className="sticky top-0 bg-blue pb-5 w-screen z-10">

                                    {/* TITLE & CONTAINER */}
                                    <div className="flex flex-col items-center">

                                        {/* TITLE */}
                                        <div className="font-bold m-4 text-lg text-grey">STEP THREE: GUESS WHO?</div>
                                        
                                        {/* CONTAINER */}
                                        <div className="flex gap-x-5 items-center">
                                            {/* CHARACTER */}
                                            <img
                                                key={savedImage.id} 
                                                src={`https://drive.google.com/thumbnail?id=${savedImage.id}`}
                                                alt={savedImage.name}
                                                className="h-40 w-40 border-4 border-grey rounded"
                                            />
                                            {/* GAME */}
                                            <div className="flex flex-col space-y-4">
                                                <div className="h-16 w-16 bg-grey rounded flex items-center justify-center">
                                                    {!showBtn && <div className="font-bold text-lg">{time}</div>}
                                                    {showBtn && <button onClick={()=>handleTimer(time)}><FontAwesomeIcon icon={faStopwatch} size="xl"/></button>}
                                                </div>
                                                <div className="h-16 w-16 bg-grey rounded flex items-center justify-center">
                                                    {<div className="font-bold text-lg">{counter}</div>}
                                                </div>
                                            </div>
                                        </div>
                        
                                    </div>

                                </div>
                               

                                {/* CHARACTERS */}
                                <div className="flex flex-wrap justify-center items-center m-2 bg-grey w-full">
                                    {images.map(image => <Card image={image} key={image.id}/>)}
                                </div>

                            
                            </div>
                        </div>}

                          
                </div>
                
            {/* FINAL */}
            </div>
        )
}

