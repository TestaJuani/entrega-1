import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import Item from '../Item'

const ItemList = ({products}) => {

  const {setEstadoA} = useContext(Shop);

  const handleChangeState = () =>{
    setEstadoA("Otro valor")
  }
  return (
    <div>

    <ul>
        {products.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
    </ul>
    <button onClick={handleChangeState}>Cambio de estado</button>
    </div>
  )
}

export default ItemList;
