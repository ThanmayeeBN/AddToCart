import { useEffect, useMemo, useState } from "react";
import useAPI from "../hooks/useAPI";
import { NavLink, useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { loadUser } from "../store/reducers/user";
import { useDispatch, useSelector } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar() {
    const { loading, error, data: categories } =
        useAPI("https://fakestoreapi.com/products/categories", null);

    const dispatch = useDispatch();
    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const [show, setshow] = useState(true);

    const cartItem = useMemo(() => {
        let totalItems = 0;

        if (Object.keys(cart).length > 0) {
            Object.keys(cart).forEach((productId) => {
                totalItems += cart[productId].quantity;
            })
        }

        return totalItems;
    }, [cart])

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])
    if (loading) {
        return (
            <div className="loader">
                Categories is loading...
            </div>
        )
    } else if (error) {
        <div className="error">
            oops please reload the page...!
        </div>
    } else if (categories.length === 0) {
        return (
            <div className="nocategories">
                No categories found!
            </div>
        )
    }

    else {
        return (
            <div>
                <FaBars onClick={() => setshow(!show)}>Toggle</FaBars>
                {
                    show ? <div>
                        <div className="navbar">
                            <div className="products">
                                {categories.map((category) => (
                                    <NavLink
                                        key={`category-${category}`}
                                        className="product-category"
                                        activeClassName="product-category--selected"
                                        to={`/products/${category}`}

                                    >
                                        {category}
                                    </NavLink>
                                ))}
                            </div>
                            <Link to="/cart" className="cart-icon-container">
                                <FaCartArrowDown className="cart-icon" />
                                <div className="cart-itemss">{cartItem}</div>
                            </Link>
                        </div>
                    </div> : null
                }
            </div>
        );

    }

}

export default Navbar;