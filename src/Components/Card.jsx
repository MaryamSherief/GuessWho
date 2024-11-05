import { React,useState } from "react"
import { extractImageName } from "../Utils/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark,faCircleCheck } from "@fortawesome/free-solid-svg-icons"

export default function Card({image}) {  
  const [eliminated,setEliminated] = useState(false)
  const eliminate = eliminated ? "opacity-25" : "opacity-100"
  const borderColor = eliminated ? "border-red" : "border-blue" 
  const bgColor = eliminated ? "bg-red" : "bg-blue" 
  
  return (
    <div className={`m-4 flex flex-col w-fit items-center border-4 ${borderColor} rounded-xl ${bgColor}`}>
     
      <img
        key={image.id} 
        src={`https://drive.google.com/thumbnail?id=${image.id}`}
        className={`h-40 w-40 rounded-t-lg transition-opacity duration-300 ${eliminate}`}
        alt={image.name}
      />
      
      <div className={`w-40 p-2 flex justify-between border-t-4 ${borderColor}`}>
        <div className="text-grey font-bold truncate mr-5 overflow-hidden whitespace-nowrap">
            {extractImageName(image.name)}
        </div>
        <button className="text-grey" onClick={()=>setEliminated(!eliminated)}>
          {eliminated ? <FontAwesomeIcon icon={faCircleCheck} size="xl"/> : <FontAwesomeIcon icon={faCircleXmark} size="xl"/>}
        </button>
      </div>
    </div>
  )
}