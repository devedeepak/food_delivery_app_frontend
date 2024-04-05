

import "./exploreMenu.css";
import { menu_list } from "../../assets/assets";


export default function exploreMenu({ item, setItem }) {
  
    return (
        <div className="exploremenu-container" id="exploredishes-container">
            
            <div className="explore-content">
                <h1>Explore our menu</h1>
                <p>Choose from the diverse menu feturing a delicatable array of dishes. Our mission is to satisfy carvings and elevate your dining experiences, one delicious meal at a time.</p>
            </div>

            <div className="menutypes">
                {
                    menu_list.map((category, index) => {
                        return (
                            
                            <div className="item" key={index} onClick={()=>setItem(item===category.menu_name? 'All': category.menu_name)}
                            >
                               
                                    <img src={category.menu_image} alt="" className={item===category.menu_name? 'active': ''}/>
                              
                               
                                <p>{category.menu_name}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}