import React from 'react';
import ListItem from './ListItem';
import './list.css';

export default function List(props) {
    return (
        <div>
            {props.items.map(item => (
                <ListItem key={item.name} item={item}/>
            ))}
        </div>
    )
}
