//Create container
var container=document.createElement("div");
container.setAttribute("class","container");

var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

//fetch res country data
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));


async function foo(value){
    
    try{
        for(var i=0;i<value.length;i++){
    
            row.innerHTML+=`<div class="col-lg-4">            
               <div class="card border-secondary mb-3 text-center" style="max-width: 20rem;">
               <div class="card-header"><b>${value[i].name}</b></div>
                 <div class="card-body text-secondary" >
                    <img src="${value[i].flag}" alt="flags" width=200px>
                    <p class="card-text"><b>Capital:</b> ${value[i].capital}</p>
                    <p class="card-text"><b>Region: </b>${value[i].region}</p>
                    <p class="card-text"><b>LatIng: </b>${value[i].latlng}</p>
                    <p class="card-text"><b>Country code:</b> ${value[i].alpha3Code}</p>
                     <p id="wet"></p>                                 
                     
                     <button class="btn btn-primary ">Click for Weather</button>
                  
                                          
                 </div>
             </div>
            </div>`};
    }catch (error){
      console.log("error!!");
   }
   
   //Give event to the button to get weather data
   let wetCli = document.getElementsByClassName("btn");
    for (let i=0;i<wetCli.length;i++){
    wetCli[i].addEventListener("click",async()=>{
    try {
        let wet=document.querySelectorAll("#wet");
                                                 
        let url=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${value[i].latlng[0]}&lon=${value[i].latlng[1]}&appid=5cf37c0d357e5b8332ccc4d1b98cddca`);
        let url1=await url.json();
        console.log(url1);
                                           
      wet[i].innerHTML=`Country Temp: ${url1.main.temp}F`;
                                           
                                               
      }
       catch(e){
       console.log("error!!");
        }
      });
      }
 }
document.body.append(container); 
foo();
