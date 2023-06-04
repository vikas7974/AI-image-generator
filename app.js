const API_KEY="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"
// const submitIcon=document.getElementById("submitIcon")
const inputElement=document.querySelector("input")

const getImages=async()=>{
    const options ={
    method: "POST",
    headers: {
    "Authorization": `Bearer ${API_KEY}`,
     'Content-Type': "application/json"
    },
    body: JSON.stringify({
    "prompt":inputElement.value,
    "n": 1,
    "size": "1024x1024"
    })}
try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options)
        const data = await response.json()
        console.log(data)
        data?.data.forEach (imageObject => {
            const ImageContainer = document.createElement('div') 
            ImageContainer.classList.add('image-container') 
            const imageElement = document.createElement('img') 
            imageElement.setAttribute('src', imageObject.url)
            ImageContainer.append(imageElement)})
        } catch (error) {
        console.error(error)
        }}
// document.getElementById("submitIcon").addEventListner("click",getImages);

getImages();
