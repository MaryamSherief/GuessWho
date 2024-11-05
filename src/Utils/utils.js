export function extractFolderID(link) {
    const match = link.match(/(?<=\/folders\/)([^\/?]+)/) 
    return match ? match[0] : null 
}

export function extractImageName(path) {
    return path.slice(0,path.indexOf(".")).toUpperCase().split(" ")[0]
}

export function getRandomImage(images) {
    return images[Math.floor(Math.random()*images.length)]
}

