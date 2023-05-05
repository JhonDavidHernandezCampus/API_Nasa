import storage from '../consulta_API/consulta_ETC.js';
export default{
    async datos(){
        const data = await storage.dataconsulta();
        const elements = document.querySelector('.elements');
        const ws = new Worker("./storage/ws.js",{type:"module"});
        ws.postMessage({module: "pintarData",data: data});

        ws.addEventListener("message",(e)=>{
            let section = document.querySelector(".elements");
            section.innerHTML = e.data;
            section.style.backgroundImage= `url(${data.url})`;
        })
    }

}