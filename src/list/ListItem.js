import React from 'react'

export default function ListItem(props) {
    return (
        <div className="wrapper">
            <div>
                <img src={props.item.img}></img>
            </div>
            <h3>{props.item.name.length > 30 ? props.item.name.slice(0,30) + '...' : props.item.name}</h3>
            <div>
                <h4>{props.item.price}$</h4>
                <a href={props.item.link} target="_blank">more...</a>
            </div>
            {/* {console.log(props.item)} */}
        </div>
    )
}
