const citySearch = document.querySelector("form");
const whether_details = document.querySelector(".whether_details ");
const timeImage=document.querySelector(".timeimage");
const icons=document.querySelector(".icon img");
// const updateUI = async (city) => {
//   console.log(city);
//   const cityDet= await getCity(city);
//   const weather= await getweather(cityDet.Key);
//   const html = `
//     <h4 class="my-3">${cityDet.EnglishName}</h4>
//     <h4 class="my-2">${weather.WeatherText}</h4>
//     <div class="display-3 my-4">
//         <span>${weather.Temperature.Metric.Value}</span>
//         <span>&deg;C</span>

//     </div>
//     `;
//    whether_details.innerHTML=html;
// };

// citySearch.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const city = citySearch.city.value.trim();
//   citySearch.reset();
//   updateUI(city).then((data)=>{
//       console.log("request done");
//   })
// });




async function getData(city) {
    const cityDet = await getCity(city);
    const weather = await getweather(cityDet.Key);
    return {
        cityDet,
        weather,
    };


}

const updateUI=(data)=>{
    // const city= data.cityDet;
    // const weather=data.weather;
    const {cityDet,weather}=data;

    const html = `
    <h4 class="my-3">${cityDet.EnglishName}</h4>
    <h4 class="my-2">${weather.WeatherText}</h4>
    <div class="display-3 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>

    </div>
    `;
   whether_details.innerHTML=html;
   if(weather.IsDayTime){
       timeImage.setAttribute("src","./day img.jpg");
   }else{
       timeImage.setAttribute("src","./night img.jpg")
   };
   


   const whethericons= `../icons/${weather.WeatherIcon}.svg`;
   icons.setAttribute("src",whethericons);

};

citySearch.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const city = citySearch.city.value.trim();
    citySearch.reset();
    getData(city).then((data)=>{
        console.log(data);
        updateUI(data);

    })
  });