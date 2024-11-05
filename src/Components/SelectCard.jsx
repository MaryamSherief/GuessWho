import React, { useState,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { extractImageName, getRandomImage } from "../Utils/utils"

export default function SelectCard({images,saveCurrentImage}) {

    const [currentImage,setCurrentImage] = useState(getRandomImage(images))

    useEffect(()=> { saveCurrentImage(currentImage) },[currentImage])
    
  return (
    <div className="flex flex-col items-center justify-center w-full">
        
        {/* INTRO */}
        <div className="font-bold m-4 text-lg">STEP TWO: CHOOSE A CHARACTER</div>

        {/* LIST */}
        <div className="flex justify-center w-full max-w-lg overflow-x-auto px-4 no-scrollbar">
            <ul className="p-2 flex space-x-4 max-w-full">
                {images.map(image => (
                    <li key={image.id} className="w-16 flex-shrink-0"> 
                        <div className="flex flex-col items-center">
                            <img
                                onClick={() => setCurrentImage(image)}
                                className="h-16 w-16 rounded-sm border-2 border-blue cursor-pointer"
                                src={`https://drive.google.com/thumbnail?id=${image.id}`}
                                alt={image.name}
                            />
                            <p className="font-bold text-sm text-center whitespace-nowrap overflow-hidden truncate w-16">
                                {extractImageName(image.name)}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

        {/* RANDOM */}
        <div className="m-4 flex flex-col w-fit items-center border-4 border-blue rounded-xl bg-blue">
            <img
                key={currentImage.id} 
                src={`https://drive.google.com/thumbnail?id=${currentImage.id}`}
                className={`h-48 w-48 rounded-t-lg`}
                alt={currentImage.name}
            />
            <div className="w-48 p-2 flex justify-between border-t-4 border-blue">
                <div className="text-grey font-bold truncate mr-5 overflow-hidden whitespace-nowrap">{extractImageName(currentImage.name)}</div>
                <button className="text-grey" onClick={()=>setCurrentImage(getRandomImage(images))}>
                    <FontAwesomeIcon icon={faShuffle} />
                </button>
            </div>
        </div>
        
    </div>
  )
}
