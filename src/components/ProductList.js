import React from "react";
import useAPI from "../hooks/useAPI";
import Product from "./Product";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ProductList(){
    const {categoryName} = useParams();
    const {loading,data,error}=useAPI(
        `https://fakestoreapi.com/products/category/${categoryName}`,
        []
    );

    console.log({categoryName});

    if(loading){
        return (
            <div className="loader">
               Product is loading...
            </div>
        )}else if(error){
            <div className="error">
                oops please reload the page...!
            </div>
        }else if(data.length ===0){
            return(
                <div>
                    No products found, select a category!
                </div>
            )
        }else{
            return (
                <div className="product-list">
                    {data.map(product => 
                    <Product key={product.id} product={product}/>)}
                </div>
            );            
            
        }
}

export default ProductList;