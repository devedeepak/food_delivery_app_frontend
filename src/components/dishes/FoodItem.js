import { LevelContext } from "../../Context/LevelContext";
import { assets } from "../../assets/assets"
import { useContext, useState } from "react";


export default function FoodItem({ dishes, index }) {
  //const[showAddRemoveProduct,setShowAddRemoveProduct] = useState(0)
  const level = useContext(LevelContext);
  
  return (
    <div className="item fooditem" key={index} >
      {/* {console.log(level.product)}
      {console.log(dishes)} */}
      <div className="subfood">
        <div class="dish-image">
          <img src={dishes.image} alt={dishes.name} />
          <div className="add-minus-icon">
            {!level.product[dishes._id]
             ?
              <img src={assets.add_icon_white} alt="" onClick={()=>level.addProduct(dishes._id)}/>
              :
              <div className="add-pm-funtion">
                <img src={assets.remove_icon_red} alt="" onClick={()=>level.removeProduct(dishes._id)}/>
                <span>{level.product[dishes._id]}</span>
<                 img src={assets.add_icon_green} alt="" onClick={()=>level.addProduct(dishes._id)}/>
              </div>

              }
          </div>
        </div>
        <div className="subcontent">
        <div className="subfoodsection">
          <p>{dishes.name} </p>
          <div className="rating">
            <img src={assets.rating_starts} alt="rating start" />
          </div>

        </div>
        <p className="description">{dishes.description}</p>
        <p className="price">${dishes.price}</p>

        </div>
      
      </div>

    </div>
  )
}