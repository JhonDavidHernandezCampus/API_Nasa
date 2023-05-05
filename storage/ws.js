
let ws = {
    async dataconsulta(fecha) {
        try{
            const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=f3Z7FJLTQgj2vWXyWVki2KaeGURpf26RmZGdm5W6&date=${fecha}`);
            const result = await data.json();
            return result;
        }
        catch(error){
            console.log(error);
        }
    },
    pintarData(data){
        //console.log(data)
        let vard = "";
        vard =`
            <div class="informacion">
                <h1>Informacion</h1>
                <h5>${data.title}</h5>
                <p>Fecha: ${data.date}</p>
                <p> Explicacion: ${data.explanation}</p>
                <p>Autor: ${data.copyright}</p>
                <a href="${data.url}" class="btn btn-info" target="_blank">Ver imagen</a>
            </div>`;
        return vard;
    }
}
self.addEventListener("message", async (e)=>{
    let fechaPordefecto = new Date().toISOString().slice(0,10);
    /* console.log(fechaPordefecto);
    console.log(e.data); */
    console.log(e.data);
    let res = await ws.dataconsulta((e.data.data)?e.data.data:fechaPordefecto)
    postMessage([ws[`${e.data.module}`](res), res])
})