import React, {useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import ItemCount from "../ItemCount";
import "./style.css"

const ItemDetail = ({product}) => {
    
    const navigate = useNavigate();

    const [qtyAdded, setQtyAdded] = useState(0);
    const [precioCant,setPrecioCant] = useState(0);
    const {addItem} = useContext(Shop);


    const handleConfirm = (qty,cantPrecio) => {
        setQtyAdded(qty);
        setPrecioCant(cantPrecio)
    }

    const handleTerminate = () => {
        addItem(product,qtyAdded,precioCant);
        navigate('/cart')
    }

    return (
        <div className="container-detail">
            <div className="card-detail">
                <h3 className="titulo-detail">{product.title}</h3>
                <img src={product.image} alt="" className="img-detail"/>
                <p>{product.description}</p>
                {!qtyAdded ?
                <ItemCount handleAdd={handleConfirm} stock={product.stock} precio={product.price} />
                :<button className="button-detail" onClick={handleTerminate}>Terminar compra</button>
                }
            </div>
        </div>
    )
}

export default ItemDetail;