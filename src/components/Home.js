import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home(){
    const {isloading, data, loadError} = useSelector((state)=>state.user);
if(isloading){
    return(
        <div>User data is loading please wait!</div>
    )
}else if(loadError){
    return(
        <div> User failed to load</div>
    )
}else if(data){
    console.log({data});
    return(
        <div>
            <h1>Hello {data.name.firstname}</h1>
            <h1>Fake store App</h1>
            Hey from Home
            <Link to='/products'>Go to Products</Link>
            <br/>
            <Link to='/not-found'>Go to Not found</Link>
        </div>
    )
    }else{
        return(
            <div>User data is null,please try again</div>
        )
         
}
   
}

export default Home;