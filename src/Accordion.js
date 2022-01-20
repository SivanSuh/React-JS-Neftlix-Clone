import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus} from  "react-icons/ai";

function Accordion(props){
    const [info, setInfo] = useState(false);

    return(
        <div className="accordion">
            <ul className="ul">
                <li className="li">          
                    <button className="btn-accordion" onClick={() =>{
                        setInfo(!info)
                    }}>{props.button} {info ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
                    <div className="info"> 
                        {info && <span className="info">{props.description}</span>}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Accordion;