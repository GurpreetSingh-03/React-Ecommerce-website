import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Products from './Products';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((prod) => prod.id == id);
    setProduct(filterProduct[0])

    const filterRelatedProducts = items.filter((relatedItems) => relatedItems.category == product.category)
    setRelatedProducts(filterRelatedProducts);
  }, [id, product.category])

  const addToCart = (id, price, description, title, imgSrc) => {
    const obj = {
      id,
      price,
      description,
      title,
      imgSrc
    }

    setCart([...cart, obj]);
    console.log(cart);
    toast.success('🦄 Added to cart!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  return (<>

    <div className="container">
      <div className="img">
        <img src={product.imgSrc} />

        <div>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">₹ {product.price}</button>
          <button
            className="btn btn-warning"
            onClick={() => addToCart(product.id, product.price, product.description, product.title, product.imgSrc)}
          >
            Add To Cart
          </button>
        </div>
      </div>


    </div>
    <div><h1 className="text-center">Related Products</h1></div>
    <Products cart={cart} setCart={setCart} items={relatedProducts} /></>
  )
}

export default ProductDetails