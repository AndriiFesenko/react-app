import React, {useState, useEffect} from 'react'
import List from './List';

export default function Index() {
    const [itemList, setItemList] = useState([]);
    const [userSelectedItems, setUserSelectedItems] = useState([]);

    useEffect(() => {
        fetch('https://demo9165932.mockable.io/products')
            .then(resp => resp.json())
            .then(data => {
                setItemList(data.products)
            })
    }, []);
    function onInputChange(value) {
        let val = value;
        let item = itemList.filter((item) => {
            let name = item.name.toLowerCase();
            return name.startsWith(val)
        })
        setUserSelectedItems(item);
    }
    return (
        <div className="AppList">
            <input type="text" onChange={(e) => onInputChange(e.target.value)}></input>
            <List items={userSelectedItems.length < 1 ? itemList : userSelectedItems}></List>
        </div>
    )
}

