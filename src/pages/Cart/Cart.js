import React, { useContext, useState } from 'react'
import { LevelContext } from "../../Context/LevelContext";
import './Cart.css'


export default function Cart() {
  const { product,food_list } = useContext(LevelContext);
  return (
    <div className="cart-container">
      <div className="cart-top">
        <table className="cart-table">
          <tr>
            <th>Items</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
          {
            food_list.map((fl) => {
              if(product[fl._id]>0){
                return <>
                <tr>
                  <td>
                    <img src={fl.image} alt="hello" />
                  </td>
                  <td>{fl.name}</td>
                  <td>${fl.price}</td>
                  <td>{product[fl._id]}</td>
                  <td>New this Week</td>
                  <td>remove</td>
                </tr>
              </>
              }
            })
          }
          
        </table>
      </div>
      <div className="cart-bottom">
        <div className="cart-bottom-left"></div>
        <div className="cart-bottom-right"></div>
      </div>
    </div>
  )
}