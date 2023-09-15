import "./FastFood.css";
import Info from "../../../component/Info/Info";
import Navbar from "./../../../component/Navbar/Navbar";
import Button from "./../../../component/Button/Button";
import Pizza from "./Image/pizza.png";
import Pizza1 from "./Image/pizza1.png";
import Pizza2 from "./Image/pizza2.png";
import Pizza3 from "./Image/pizza3.png";
import Pizza4 from "./Image/pizza5.png";
import Pizza5 from "./Image/pizza7.png";
import Pizza6 from "./Image/pizza6.png";
import Burger from "./Image/b7.png";
import Burger1 from "./Image/b1.png";
import Burger2 from "./Image/b2.png";
import Burger3 from "./Image/b3.png";
import Burger4 from "./Image/b4.png";
import Burger5 from "./Image/b5.png";
import Burger6 from "./Image/b6.png";
import Noodles from "./Image/n1.png";
import Noodles1 from "./Image/n2.png";
import Noodles2 from "./Image/n3.png";
import Noodles3 from "./Image/n4.png";
import Noodles4 from "./Image/n5.png";
import Noodles5 from "./Image/n6.png";
import Noodles6 from "./Image/n6.png";
import Noodles7 from "./Image/n7.png";
import Dairy from "./Image/d1.png";
import Dairy1 from "./Image/d1.png";
import Dairy2 from "./Image/d2.png";
import Dairy3 from "./Image/d3.png";
import Dairy4 from "./Image/d4.png";
import Dairy5 from "./Image/d5.png";
import Dairy6 from "./Image/d6.png";
import Dairy7 from "./Image/d7.png";






export default function FastFood(){
    return (
        <>
            <Navbar />
            <h1 className="center green"><span className="brown">A</span>valiable-<span className="brown">T</span>o-<span className="brown">F</span>astFood</h1><hr />
            <div className="main-container">
                <div>
                    <img className="img"  src={Pizza}/>
                </div>
                <div>
                    <h1 className="center green"><span className="brown">P</span>izza</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. Wikipedia<br /><br />

                        <h4>Origin: Italy</h4>
                        <h4>Nutrition Facts</h4>
                        <h4>Pizza, 14" regular crust</h4> 
                        <h4>Sources include: USDA</h4></p>
                    <h4 className="front-text">Price:₹180</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Pizza1} />
                <Info img={Pizza2} />
                <Info img={Pizza3} />
                <Info img={Pizza4} />
                <Info img={Pizza5} />
                <Info img={Pizza6} />
            </div>
            <hr /><hr /><hr />


            <div className="main-container">
                <div>
                    <img className="img" src={Burger} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">B</span>urger</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world.<br /><br />
                        <h4>Main ingredients: Ground meat, Bread
</h4>
                        <h4>Origins: United States, Germany</h4>
                        <h4>Sources include: USDA</h4>
                         <h4>Serving temperature: Hot with a condiment such as</h4> </p>
                    <h4 className="front-text">Price:₹120</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Burger1} />
                <Info img={Burger2} />
                <Info img={Burger3} />
                <Info img={Burger4} />
                <Info img={Burger5} />
                <Info img={Burger6} />
            </div>
            <hr /><hr /><hr />



            <div className="main-container">
                <div>
                    <img className="img" src={Noodles}/>
                </div>
                <div>
                    <h1 className="center green"><span className="brown">N</span>oodles</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings. Noodles are a staple food in many cultures and made into a variety of shapes..<br /><br />
                        <h4>Chinese noodles

</h4>
                        <h4>Filipino pancit</h4>
                        <h4>CourseItalian pasta</h4>
                        <h4>Japanese noodleserving </h4> </p>
                    <h4 className="front-text">Price:₹150</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Noodles1} />
                <Info img={Noodles2} />
                <Info img={Noodles3} />
                <Info img={Noodles4} />
                <Info img={Noodles5} />
                <Info img={Noodles6} />
            </div>
            <hr /><hr /><hr />

            <div className="main-container">
                <div>
                    <img className="img" src={Dairy} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">W </span> endy's Frosty <span className="brown">D</span> airy <span className="brown">D</span>essert</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Frosty is a frozen dairy dessert of the American fast-food restaurant chain Wendy's. The Frosty was among the first five items introduced on the Wendy's menu.<br /><br />
                        <h4>    Icee</h4>
                        <h4> Shaved ice</h4>
                        <h4> Slushy</h4>
                        <h4> Slurpee</h4> </p>
                    <h4 className="front-text">Price:₹80</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Dairy6} />
                <Info img={Dairy1} />
                <Info img={Dairy2} />
                <Info img={Dairy3} />
                <Info img={Dairy4} />
                <Info img={Dairy5} />
            </div>
            <hr /><hr /><hr />

        </>
    )
}