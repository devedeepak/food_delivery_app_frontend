import { useContext, useEffect, useState } from 'react';
import { LevelContext } from './LevelContext.js';

import { assets,food_list } from '../assets/assets';


export default function Section({ children, isFancy }) {
   // const level = useContext(LevelContext);
   const[product,setProduct] = useState({})
   const[cartCount,setCartCount] = useState('')
   //const[removeProduct,setRemoveProduct] = useState({})
   
    const addProduct = (itemid) => {
        if(!product[itemid]){
          setProduct(prevItem=>({...prevItem,[itemid]:1}))          
        }
        else{
          setProduct(prevItem=>({...prevItem, [itemid]:prevItem[itemid]+1}))
        }  
    } 

    const removeProduct = (itemid) => {
          setProduct(prevItem=>({...prevItem, [itemid]:prevItem[itemid]-1}))
    } 

    useEffect(() => {
      let arraylength = 0
      let pro = Object.values(product)
      if(pro.length>0){
        pro.map((pin)=>{
          arraylength = arraylength + pin
        })
      }
      setCartCount(arraylength)
    }, [addProduct, removeProduct]);

   const levelobj = {
    assets,
    food_list,
    addProduct,
    product,
    removeProduct,
    cartCount
   }

    return (
      <section className={
        'section ' +
        (isFancy ? 'fancy' : '')
      }>
        <LevelContext.Provider value={levelobj}>
          {children}
        </LevelContext.Provider>
      </section>
    );
}
  