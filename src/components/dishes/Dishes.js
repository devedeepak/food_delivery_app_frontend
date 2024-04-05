

import "./Dishes.css";
import { food_list } from "../../assets/assets";
import FoodItem from "./FoodItem";


export default function Dishes({ item, setItem }) {

    return (
        <div className="exploredishes-container">
            <div className="explore-content">
                <h1>Explore our menu</h1>
                <p>Choose from the diverse menu feturing a delicatable array of dishes. Our mission is to satisfy carvings and elevate your dining experiences, one delicious meal at a time.</p>
            </div>
            <div className="dishtypes">
                {
                    food_list.map((dishes, index) => {
                        return (
                            <>                      
                                {(item === 'All' ||item === dishes.category)
                                    ?
                                    <FoodItem index={index} dishes={dishes}/>
                                    :
                                   ''
                                }
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}