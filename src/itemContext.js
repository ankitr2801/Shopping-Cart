import { useState, createContext } from "react";
import { useContext } from "react";
import Cart from "./components/Cart";
const itemContext = createContext();


function useValue() {
    const value = useContext(itemContext)
    return value;
}


function CustomItemContext({ children }) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false)
    const[cart , setCart] = useState([])
    console.log(cart);
  


    const handleAdd = (product) => {
        const index = cart.findIndex((item)=>item.id === product.id)
        // console.log(index);
        if(index === -1){
            setCart([...cart , {...product ,qty:1}])
            // console.log(cart);
            setTotal(total + product.price)
        } else {
            cart[index].qty++
            setCart(cart)
            setTotal(total + cart[index].price)
        }
        setItem(item + 1)
       
    };

    const handleRemove = (id) => {
        if(total <= 0){
            return ;
        }
        const index = cart.findIndex((item)=>item.id === id)
        console.log(index);
        if(index !== -1){
            cart[index].qty--
            setItem(item-1)
            setTotal(total - cart[index].price)
            if(cart[index].qty == 0 ){
                cart.splice(index , 1)
            }
        } 
       setCart(cart)
      
    };

    const handleReset = () => {
        setTotal(0)
        setItem(0)
        setCart([])
    }
    const toggle = () => {
        setShowCart(!showCart);
    };


    return (
        <itemContext.Provider value={{ total, item, handleAdd, handleRemove, handleReset, toggle , cart }}>
            {showCart && <Cart toggle={toggle}/>}
            {children}
        </itemContext.Provider>
    )
}

export { itemContext, useValue }
export default CustomItemContext;
