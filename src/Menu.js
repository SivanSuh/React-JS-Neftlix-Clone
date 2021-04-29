import React from "react";

function Menu(props){
    return(
        <div className="menu">
            <div className="menu-item">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <img  className="image-pict" src={props.image} alt="img"/>
        </div>
    )
}

export default Menu;