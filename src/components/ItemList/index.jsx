import React from 'react'
import Item from '../Item'
import "./styles.css"

const ItemList = ({products}) => {
  let categoryProducto;
  if(products.length<20) {
    categoryProducto = products[0].category;
  }
  else {
    categoryProducto = "menu"
  }



  return (
    <div className='container-itemList'>
    {categoryProducto === "electronics" && <h1>Productos de electronica</h1>}
    {categoryProducto === "jewelery" && <h1>Nuestras joyas</h1>}
    {categoryProducto === "women's clothing" && <h1>Ropa de mujer</h1>}
    {categoryProducto === "men's clothing" && <h1>Ropa de hombre</h1>}
    {categoryProducto === "menu" && <h1>Nuestros productos</h1>}
    <div className='lista-productos'>
        {products.map(producto => {
            return  <Item product={producto} key={producto.id}/>
        })}
    </div>
    </div>
  )
}

export default ItemList;
