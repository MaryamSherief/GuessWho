import React from "react"
import { getFolderImages } from "../Utils/drive"
import { extractFolderID } from "../Utils/utils"

export default function Form({setImages}) {
  async function handleSubmit(e) {
    e.preventDefault() 
    const form = e.target 
    const formData = new FormData(form) 
    const formJson = Object.fromEntries(formData.entries()) 
    const folderID = extractFolderID(formJson.url) 
    if (folderID) { 
      const images = await getFolderImages(folderID)
      setImages(images)
    }
  }

  return (
    <div>
      <div className="font-bold m-4 text-lg">STEP ONE: IMPORT THE IMAGES</div>
      <form method="post" onSubmit={handleSubmit} className="flex items-center border-b-2 border-blue py-2">
        <input className="appearance-none bg-transparent border-none w-full text-blue mr-3 py-1 px-1 focus:outline-none" type="url" name="url" placeholder="Google Drive Folder URL"/>
        <button className="font-bold bg-blue text-grey px-3 py-2 rounded text-sm mr-1">SUBMIT</button>
      </form>
    </div>
  )
}


