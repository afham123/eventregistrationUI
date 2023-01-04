import React from "react";

export default function Card(props) {
    return (
        <div className="item">
            <img className="item-photo"
                src={props.imgUrl}
                alt="hand holding phone with whatsapp converstaion"/>
            <div className="item-header">
                <ion-icon className="item-icon" name="chatbubble-ellipses-outline" ></ion-icon>
                <h3 className="item-title">{props.title}</h3>
            </div>
            <p className="item-text">{props.detail}</p>
            <a className="item-link" href="#">Click to see by yourself &rarr;</a>
        </div>
    )
}