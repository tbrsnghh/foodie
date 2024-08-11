import React from 'react';  
import './Cart.css'; // Nhập file CSS  
import { useSelector, useDispatch } from 'react-redux';  
import { clearCart, removeFromCart } from '../../store/features/cart/cartSlice';
// Import action để xóa hàng hóa  
import Header from "../../components/header/Header";
import Footerr from '../../components/footer/Footer';
import { List, Button, Typography, Divider, Card, Space } from 'antd';  
import { useNavigate } from 'react-router-dom';
export default function Cart() {  
    const {  items, totalPrice} = useSelector((state) => state.cart);  
    const dispatch = useDispatch();   
    console.log(items)
    const navigate = useNavigate();
    const handleCheckout = () => {  
        if (totalPrice !== 0) {  
            navigate(`/checkout`);  
        } else {  
            alert("Giỏ hàng của bạn trống");  
        }  
    };  
    return (  
        <>
        <Header/>
        <div className='sectionContainer'>
            <div className='sectionContent'>
            <div className="cart-container">  
            <h1>Giỏ Hàng</h1>  
            <div className="cart-items">  
                {items.map(item => (  
                    <div key={item.id} className="cart-item">  
                        <div className="item-details">  
                            <h2>{item.itemName} - {item.restaurant}</h2>  
                            <p>Giá: {item.price ? item.price.toLocaleString() + ' VND' : 'Chưa có giá'}</p>  
                            <p>Số lượng: {item.quantity}</p>  
                        </div>  
                        <div className="item-remove">  
                            <Button onClick={() => dispatch(removeFromCart(item))}>Xóa</Button>  
                        </div>  
                    </div>  
                ))}  
            </div>  
            <div className="cart-summary">  
                <h2>Tổng tiền: {"   "}  
                    {totalPrice  
                        .toLocaleString()} VND  
                </h2>  
                <Space>
                <Button className="clear-button" onClick={()=>dispatch(clearCart())}>Xóa toàn bộ</Button>
                <Button className="checkout-button" onClick={handleCheckout}>Tiến hành thanh toán</Button>  
                </Space>
                
            </div>  
        </div>  
            </div>
        </div>
        <Footerr/>
        </>
        
    );  
}