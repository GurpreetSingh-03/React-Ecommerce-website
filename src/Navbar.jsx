import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaShoppingCart } from 'react-icons/fa';


function Navbar({ setData, cart }) {
  const [searchTerm, setSearchTerm] = useState(""); // term that user searched
  const navigate = useNavigate();
  const location = useLocation(); // for conditional redering (with repect to path) of filter bar in navbar

  const FilterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    setData(element);

  }

  const FilterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price)
    setData(element)
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
  }
  return (
    <>
      <header className="sticky-top">
        <div className="navbar">
          <Link to={"/"} className="logo">E-cart</Link>

          <form onSubmit={HandleSubmit} className="search">
            <input
              value={searchTerm}
              type="text"
              placeholder='Search Products'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaShoppingCart style={{ fontSize: '1.5rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {/* Conditional redering of filter bar because we only need it on the home page */}
        {location.pathname == '/' && (
          <div className="navbar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div onClick={() => setData(items)} className="items">No Filter</div>
            <div onClick={() => FilterByCategory('mobiles')} className="items">Mobiles</div>
            <div onClick={() => FilterByCategory('laptops')} className="items">Laptops</div>
            <div onClick={() => FilterByCategory('tablets')} className="items">Tablets</div>
            <div onClick={() => FilterByPrice(29999)} className="items">{">="}29999</div>
            <div onClick={() => FilterByPrice(49999)} className="items">{">="}49999</div>
            <div onClick={() => FilterByPrice(69999)} className="items">{">="}69999</div>
            <div onClick={() => FilterByPrice(89999)} className="items">{">="}89999</div>
          </div>
        )}

      </header>
    </>
  )
}

export default Navbar