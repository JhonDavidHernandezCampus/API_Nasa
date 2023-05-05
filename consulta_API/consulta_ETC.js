const dataconsulta= async ()=>{
    try{
        const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=f3Z7FJLTQgj2vWXyWVki2KaeGURpf26RmZGdm5W6&date=2020-01-01`);
        const result = await data.json();
        return result;
    }
    catch(error){
        console.log(error);
    }

}
export default{
    dataconsulta
}