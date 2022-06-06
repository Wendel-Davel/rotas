import { Link } from "react-router-dom";

export default function Header(){


    return(
        <header>
            <h2>Header da pagina</h2><br/>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link> 
            <Link to="/contato">Contato</Link> 
            
        </header>
 
    
    );
    }