const cities = [
    { name: "Boston", temperature: 71 },
    { name: "New York", temperature: 75 },
    { name: "Denver", temperature: 45 },
    { name: "Los Angeles", temperature: 80 },
    { name: "Chicago", temperature: 65 },
    { name: "Houston", temperature: 90 },
];



let ul = document.querySelector("#cityList")
// console.log( ul)

for (let city of cities){
    // console.log(city)
    let cityName = city.name
    let temp = city.temperature

    // ul.textContent= ul.textContent+  cityName  + " temperature is "+temp

    // ul.innerHTML = ul.innerHTML+`<li>${cityName}</li>
    // <li>Temperature: ${temp}</li>
    // `

    let cityLi = document.createElement("li")
    cityLi.textContent = cityName
    if(cityName === "Boston"){
        cityLi.style.fontSize = "32px"
    }
    ul.append(cityLi)

    let tempLi = document.createElement("li")
    tempLi.textContent = `Temperature: ${temp}`
    tempLi.classList.add("temp")
    ul.append(tempLi)


}

//part 2: convert those to celsius 
let tempList = document.querySelectorAll(".temp")

for (let temp of tempList){
    let currentTemp = Number(temp.textContent.split("Temperature: ")[1])

    let celsius =  Math.round((currentTemp - 32) * 5/9)
   
    // temp.textContent=  `Temperature: ${celsius}`

   let newText =  temp.textContent.replace(currentTemp,celsius)
   temp.textContent = newText
   
}


// part3: The Return of Color

let cityList = document.querySelectorAll("li:nth-child(odd)")
// console.log(cityList)

for (let city of cityList){
    // city.style.color = "red"
    let temp = city.nextSibling.textContent.split("Temperature: ")[1]
    if(temp>=30){
        console.log("too hot",city.textContent)
        city.nextSibling.remove()
        city.remove()
       continue 
    }
    if(temp>=20){
        city.style.color="red"
    }else{
        city.style.color = "blue"
    }
}
