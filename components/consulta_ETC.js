
const dataconsulta= async ()=>{
    try{
        const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2021-01-01&end_date=2023-01-01`);
        const result = await data.json();
        console.log(data,"data sin parsear");
        console.log(result,"data parseada a json");
        return result;
    }
    catch(error){
        console.log(error);
    }

}
localStorage.setItem()
export default{
    dataconsulta
}