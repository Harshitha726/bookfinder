import { useEffect, useState } from "react";
import '../App.css';

const getAPI=() =>{

    const [activeItemId, setActiveItemId] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        //need to connect service only once
        fetch('http://localhost:8099/getItems').then((response) => {
          response.text().then((items) => {
            console.table(JSON.parse(items));
            setItems(JSON.parse(items));
          });
        })
      }, [])
    
    return(
        <div>
            <div id="tabs">
                <menu>
                {
                    items && items.map(item => {
                    return (
                        <button className={activeItemId === item.id ? "active" : ""}
                        onClick={() => setActiveItemId(item.id)}> {item.name} </button>
                    );
                    })
                }


                </menu>
             </div>


            <div id="tab-content">
                <ul>
                {
                    items && items.find((item) => item.id === activeItemId)
                    ?.content?.map(item =>
                         <li key={item.id}> {item} </li>)
                }
                </ul>
            </div>
    </div>
  );
}


export default GetAPI;

       