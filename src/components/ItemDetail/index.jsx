import React, {useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({product}) => {
    
    const navigate = useNavigate();

    product.stock = 10;
    const [qtyAdded, setQtyAdded] = useState(0);

    const {addItem} = useContext(Shop);


    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    }

    const handleTerminate = () => {
        addItem(product,qtyAdded);
        navigate('/cart')
    }

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