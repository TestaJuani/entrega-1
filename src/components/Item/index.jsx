import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({product}) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail/${product.id}`)
  }
  return (
    <div onClick={handleDetail}>
    <li>{product.title}</li>
    </div>
  )
}

export default Item;
