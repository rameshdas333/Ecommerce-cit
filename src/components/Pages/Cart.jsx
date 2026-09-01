
import MonitorImg from '../../assets/monitotimg.png'
import GameImg from '../../assets/gameimg.png'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


import { useDispatch, useSelector } from 'react-redux';
import { cartQuentity, removeFromCart } from '../slices/CartSlice';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
  import { Bounce, ToastContainer, toast } from 'react-toastify';
import Container from '../container/Container';
import CartTotal from '../carttotal/CartTotal';
;


const Cart = () => {
    const [couponText,setCouponText] = useState(" ");
    const [discount,setDiscount]= useState(0)
    const data = useSelector(state=>state.cartDetails.cartItems)
    const dispatch = useDispatch();
    // console.log(data,'data')
    const totalPrice = data.reduce((prev,current)=>{
        // console.log(current.price,'pricee')
        return prev + current.price * current.cartQun
    },0)
    console.log(totalPrice);
    const handleIncrement = (id)=>{
        // console.log('increment',id)
       dispatch(cartQuentity({id: id , type:'increment'}))

    }
     const handleDecrement = (id)=>{
        // console.log('Decrement',id)
       dispatch(cartQuentity({id: id , type:'decrement'}))

    }
    const handleRemove = (id)=>{
        dispatch(removeFromCart(id))
    }
    const handleChange = (e)=>{
setCouponText(e.target.value)

        
    }
    const handleApplyCoupon = ()=>{
        console.log(couponText);
        if(couponText == "fdr30"){
                  setDiscount(totalPrice * 0.3)
                   toast("Apply Coupon Successfull")
        }
    }
    const total = totalPrice - discount;
    return (
      <div>
        <Container>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />

          <div className="mt-20 mb-20 space-y-3">
            <div className=" rounded flex items-center justify-between px-5 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.25)] ">
              <p className="">Product</p>
              <p className="ml-48">Price</p>
              <p className="ml-24">Quantity</p>
              <p>Subtotal</p>
            </div>
            {data.map((product, index) => (
              
              <div
             
                key={index}
                className="rounded flex items-center justify-between px-10 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.1)] "
              >
                <div className="flex items-center">
                  <div>
                    <RxCross2
                      className="w-4 h-4 bg-red-500 rounded-full text-2xl text-white"
                      onClick={() => handleRemove(index)}
                    />
                    <img
                      className="w-[80px] h-15"
                      src={product.thumbnail}
                      alt=""
                    />
                    
                  </div>
                  <p className="w-[200px]">{product.title}</p>
                </div>
                <p className="w-24">${product.price.toFixed(2)}</p>
                <div className="w-20  flex p-3 gap-6 border rounded">
                  <p >{product.cartQun}</p>
                  <div >
                    <IoIosArrowUp onClick={() => handleIncrement(index)} />
                    <IoIosArrowDown onClick={() => handleDecrement(index)} />
                  </div>
                </div>
                <p className="w-16 overflow-hidden">
                  ${(product.price * product.cartQun).toFixed(2)}
                </p>
              </div>
            ))}
            {/* <div className='rounded flex items-center justify-between px-10 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.25)] '>
               <img src={GameImg} alt="" />
                <p> $550</p>
                   <div className='ml-3 flex p-3 gap-6 border rounded'>
                    <p>01</p>
                
                    <div>
                         <IoIosArrowUp />
                         <IoIosArrowDown />
                        </div>
                </div>
               <p>$1100</p>
                
            </div> */}

            {/* cart total components */}

            <div className="md:flex  justify-between pt-6 md:pt-0">
              <div>
                <input
                  onChange={handleChange}
                  name="coupon"
                  className="text-base font-primary border overflow-hidden rounded md:w-[300px] py-4 px-6 mr-4"
                  type="text"
                  placeholder="Coupon Code"
                />

                {/* <Button onClick={handleApplyCoupon} name='Apply Coupon'/> */}
                <button
                  onClick={handleApplyCoupon}
                  className="bg-red-500 text-white px-12 py-4 rounded-[4px] my-5 md:my-0">
                  Apply Coupon
                </button>
              </div>

              <CartTotal
                discount={discount}
                total={total}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Cart;