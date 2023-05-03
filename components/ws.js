import results from "../storage/consulta_ETC.js";

export default{
    log(){
        results.dataconsulta().then((e) => {
            console.log(e);

        });

    }
}


