const key="ijTKBmWh69XF4zxVtki11DLOCqSut4uy";

// const jsonTodo = async() =>{
//     const responce = await fetch("../api.json ");
//     const data = await responce.json();
//     if(responce.status !==200){
//         throw new Error("Could not Fetch Data!");
//     }
//     return data;
// };

// jsonTodo().then((data)=>{
//     console.log("resolved:",data)})
//     .catch((error)=>{
//         console.log("Error:",error);
//     }) ;
const getweather = async(id) =>{
     const base="https://dataservice.accuweather.com/currentconditions/v1/";
     const query=`${id}?apikey=${key}`;
     const responce=await fetch(base+query);
     const data = await responce.json();
     return data[0];
}

const getCity = async(city) =>{
    const base ="https://dataservice.accuweather.com/locations/v1/cities/search";
    const query=`?apikey=${key}&q=${city}`;
    const responce=await fetch(base  + query);
    const data= await responce.json();
    return data[0];
};

getCity("karachi").then((data)=>{
    console.log(data)
    return getweather(data.Key);
}).then((data)=>{
    console.log(data);
});

