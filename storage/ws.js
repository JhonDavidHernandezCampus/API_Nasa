
let ws = {
    pintarData(data){
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
self.addEventListener("message",(e)=>{
    postMessage(ws[`${e.data.module}`](e.data.data))
})