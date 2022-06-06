import { useParams } from "react-router";

export default function Produto(){
    const {id} = useParams();


    return(
      <div>
        <h1>Grade de Produto</h1><br/>

        <span>Produto selecionado: {id}</span>

      </div>
    
    );
    }