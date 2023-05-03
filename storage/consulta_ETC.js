
const dataconsulta= async ()=>{
    try{
        const local = localStorage.getItem("respuesta");
        if (local !== null) {
            return JSON.parse(local);
        } 
        //const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=f3Z7FJLTQgj2vWXyWVki2KaeGURpf26RmZGdm5W6&date=2021-01-01`);
        const result = await data.json();
        console.log(result);
        localStorage.setItem("respuesta",JSON.stringify(
            result
        )) 
        return result;

    }
    catch(error){
        console.log(error);
    }

}




export default{
    dataconsulta
}