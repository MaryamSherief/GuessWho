const API_KEY = import.meta.env.VITE_API_KEY 

async function loadClient() {
    return new Promise((resolve,reject) => {
        gapi.load("client", { callback: resolve, onerror: reject })
    })
}

async function initializeClient() {
    try {await gapi.client.init({apiKey: API_KEY})}
    catch(error) {console.error(`Error Initializing Client: ${error}`)}
}

async function fetchFolderImages(folderID) {
    try {
        const response = await gapi.client.request({
            path: "https://www.googleapis.com/drive/v3/files",
            params: {
                q: `"${folderID}" in parents and trashed = false and mimeType contains "image/"`,
                fields: "files(id, name)",
            }})
        return response.result.files || []
    } catch(error) {console.error(`Error Fetching Images: ${error}`)}
}


export async function getFolderImages(folderID) {
    try {
        await loadClient()
        await initializeClient()
        return await fetchFolderImages(folderID)
    } catch(error)  {console.error(`Error Getting Images: ${error}`)}
}