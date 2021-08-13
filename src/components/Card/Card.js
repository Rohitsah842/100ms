import React from 'react'
import "./Card.css"

const Card = (props) => {
    let len = props.info.length;
    const obj = props.info[len - 1];
    console.log(obj)
    console.log(len)
    return (
        <div className='card card_mob'>
            <div className="profile">
                <img src={obj.img} className="img" />
                <h1>Name:- {obj.name}</h1>
                <div className="profileInformation">
                    <div>
                        <h4>Nickname:- {obj.nickname}</h4>
                        <h4>Birthday:-{obj.birthday}</h4>
                        <h4>Occupation:-{obj.occupation}</h4>
                        <h4>Status:-{obj.status}</h4>
                        <h4>Portrayed:-{obj.portrayed}</h4>
                        <h4>Category:-{obj.category}</h4>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Card
