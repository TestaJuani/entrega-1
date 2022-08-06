import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.css"

const Item = ({product}) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail/${product.id}`)
  }
  return (
    <div>
      <div className='card-producto'>
        <h3 className='titulo-card'>{product.title}</h3>
        <p className='cuerpo-card'>{product.description}</p>
        <button className="ver-mas" onClick={handleDetail}> Ver mas</button>
      </div>
    </div>
  )
}

export default Item;
