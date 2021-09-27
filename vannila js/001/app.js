
const btn = document.getElementById("btn")
const color = document.querySelector(".color")


const hexCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E"]


btn.addEventListener("click",()=>{
    let hexColor = "#"
    for(let i=0; i<6;i++){
        hexColor +=hexCode[Math.floor(Math.random()*hexCode.length)]
    }
    
    color.textContent = hexColor
    document.body.style.background = hexColor
})

function morning(){
    return "morning"
}
function evening(){
    return "evening"
}function night(){
    return "night"
}

function greeting(greet){
    return `hi good ${greet()} `
}

console.log(greeting(morning))
console.log(greeting(evening))
console.log(greeting(night))


