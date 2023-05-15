const mainDiv = document.createElement("div");
const input = document.createElement("input");
const form = document.createElement("form");
const div1 = document.createElement("div");
const div2 = document.createElement("div");


input.setAttribute("id","inputField");

document.body.setAttribute("class"," mt-5 d-flex flex-column  align-items-center")
input.setAttribute("type","text");
input.setAttribute("placeholder","please enter value");
div2.setAttribute("id","main-div");
div2.setAttribute("class","d-flex flex-column mt-3 justify-content-center align-items-center");



document.body.append(mainDiv);
mainDiv.appendChild(div1)
mainDiv.appendChild(div2)

div1.append(form)
form.append(input)


form.addEventListener("submit",(e)=>{
    console.log(input.value)
    jakinData(input.value);
    input.value="";
    e.preventDefault();
})


async function jakinData(value){

    try{
        let inputValue= "";
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${value}&sfw`)
        const data = await res.json();

        if(data.data.length === 0){
            inputValue = "Please enter valid anime"
            div2.innerHTML = `<h1>${inputValue}<h1>`
        }
        else{
        console.log(data.data[0].images.jpg.large_image_url)
        inputValue+=`
        <h1>Series Name : <h1>  <h3>${data.data[0].titles[0].title}</h3>
        <img src = ${data.data[0].images.jpg.large_image_url} alt=${value}image />
        `
        div2.innerHTML = inputValue;
    }
    }
    catch(err){
        console.log(err)
    }
}
 