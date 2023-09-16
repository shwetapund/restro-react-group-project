import Navbar from "./../../component/Navbar/Navbar";
import "./Products.css";
import Card from "../../component/Card/Card";
import Footer from "./../../component/Footer/Footer";
// import Pizza from "./../Categories/FastFood/Image/pizza.png";
// import Burger from "./../Categories/FastFood/Image/b3.png";
// import WendysFrostyDairyDessert from "./../Categories/FastFood/Image/d6.png"
// import Dosa from "./../Categories/Vegeterian/Image/dosa4.jpg";
// import Idli from "./../Categories/Vegeterian/Image/i3.png";
export default function Product(){
    return(
        <>
<div>
    <Navbar/>
    {/* <div className="flex">
    {/* <Card imgc={Pizza} text="Pizza" price="150" offer="10%"/><br/>
    <Card imgc={Burger} text="Burger" price="150" offer="10%"/><br/>
    <Card imgc={WendysFrostyDairyDessert} text="Wendys Frosty Dairy Dessert" price="150" offer="10%"/><br/>
    </div>
    <div className="flex">
    <Card imgc={Dosa} text="Dosa" price="150" offer="10%"/><br/>
    <Card imgc={Idli} text="Idli" price="150" offer="10%"/><br/>
    <Card imgc={Pizza} text="Pizza" price="150" offer="10%"/><br/>
    </div>
    {/* <div className="flex">
    <Card imgc={Pizza} text="Pizza" price="150" offer="10%"/><br/>
    <Card imgc={Pizza} text="Pizza" price="150" offer="10%"/><br/>
    <Card imgc={Pizza} text="Pizza" price="150" offer="10%"/><br/>
    </div> */} 
    <Footer/>
</div>

</>

    )
}