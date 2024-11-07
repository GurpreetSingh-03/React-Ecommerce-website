import React from 'react'
import { Link } from 'react-router-dom'
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products({ items, cart, setCart }) {
    const addToCart = (id, price, description, title, imgSrc) => {
        const obj = {
            id,
            price,
            description,
            title,
            imgSrc
        }

        setCart([...cart, obj]); // products of the cart remain as it is and product in the obj will be added.
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
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
                />

            <div className="container my-5">
                <div className="row">
                    {items.map((product) => {

                        return (
                            <>
                                <div className="col-lg-4 col-md-6 my-3 text-center">
                                    <div className="card" key={product.id} style={{ width: '18rem' }}>
                                        <Link to={`/products/${product.id}`} style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <img src={product.imgSrc}
                                                className="card-img-top"
                                                alt="..." />

                                        </Link>

                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <button className="btn btn-primary mx-3">₹ {product.price}</button>
                                            <button
                                                onClick={() => addToCart(product.id, product.price, product.description, product.title, product.imgSrc)}
                                                className="btn btn-warning">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </>)
                    })}
                </div></div>
        </>
    )
}

export default Products