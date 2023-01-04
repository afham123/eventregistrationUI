import React from "react";
import Card from "./Card";
import '../App.css';
import cardData1 from "./cardData";

export default function Cards() {
    // cardData.pop();
    const [MycardData, setMyCardData] = React.useState(cardData1.slice(0,3));
    const [cardData, setcardData] = React.useState(cardData1);

    async function fetchData(){
        const result = await fetch('http://localhost:3500/eventApi/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                skip : 0,
                limit : 10
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            console.log(result.data);
    
        } else {
            alert(result.error)
        }
    }

    function handleRightClick(){
        fetchData()
        debugger;
        if(MycardData[2].id === cardData.length)
        return;
        console.log('hii');

        let newArr = [];
        newArr.push(MycardData[1]);
        newArr.push(MycardData[2]);
        newArr.push(cardData[MycardData[2].id])
        setMyCardData(newArr);
    }
    
    function handleLeftClick(){
        if(MycardData[0].id === 1)
        return;

        let newArr = [];
        newArr.push(cardData[MycardData[0].id-2])
        newArr.push(MycardData[0]);
        newArr.push(MycardData[1]);
        setMyCardData(newArr);
             
    } 

    return (
        <div className="articles">
            <h1 className="h1">Most viewed articles</h1>
            <div>
            <span className="mr-4 pr-4" style={{ display: "inline-block" }}>
                    <button className="slideBtn" onClick={handleLeftClick}><i className="bi bi-arrow-left" style={{fontSize:"2.5em"}}/></button>
                </span>
                <div style={{ display: "inline-block" }}>
                    <div className="features">
                        {MycardData.map((elem) => {
                            return (
                                <Card key={elem.id}
                                    title={elem.title}
                                    imgUrl={elem.imgUrl}
                                    detail={elem.detail} />
                            )
                        })}
                    </div>
                </div>
                <span className="ml-4 pl-4" style={{ display: "inline-block" }}>
                    <button className="slideBtn" onClick={handleRightClick}><i className="bi bi-arrow-right" style={{fontSize:"2.5em"}}/></button>
                </span>
            </div>
        </div>
    )
}