//window.alert("hello");

async function weather(c){
    let url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${c}&appid=d8bfd6af126c435066c31369085179fc`;
    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    console.log(data);
    if(data.cod=='404'){
        window.alert("enter again");
        document.querySelector('#search>input').value="";
        main.style.dispay="none";
    }
    else{
        temp.innerHTML=Math.round(data.main.temp)+"℃";
        city.innerHTML=data.name;
        window.innerHTML=data.wind.speed  +"km/h";
        humidity.innerHTML=data.main.humidity +"%";
        main.style.display="block";   
    }
}  
var search = ()=>{
 let n=document.querySelector('#search>input');
    if(n.value.trim()==""){
        window.alert("Please Enter City Name:");
    }
    else{
        let cn =n.value;
        //window.alert(cn);
        weather(cn);
    }
}