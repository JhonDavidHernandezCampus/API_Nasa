import storage from '../consulta_API/consulta_ETC.js';
export default{
    async datos(){
        const data = await storage.dataconsulta();
        console.log(data);
        const elements = document.querySelector('.elements');
        const ws = new Worker("./storage/ws.js",{type:"module"});
        ws.postMessage({module: "pintarData",data: data});

        ws.addEventListener("message",(e)=>{
            console.log(e.data);
        })
    }

}