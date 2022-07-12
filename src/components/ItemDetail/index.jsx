import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetail = ({product}) => {
    console.log(product);
    const navigate = useNavigate();

    product.stock = 10;
    const [qtyAdded, setQtyAdded] = useState(0);

    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    }

    const handleTerminate = () => {
        navigate('/cart')
    }

    console.log(qtyAdded);

    return (
        <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt=""/>
        <p>{product.description}</p>
        {!qtyAdded ?
                 <ItemCount handleAdd={handleConfirm} stock={product.stock} />
                :
                <button onClick={handleTerminate}>Terminar compra</button>
            }
       
    </div>
    )
}

export default ItemDetail;