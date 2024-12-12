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


