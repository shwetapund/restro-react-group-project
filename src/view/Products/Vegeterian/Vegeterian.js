import "./Vegeterian.css";
import Info from "../../../component/Info/Info";
import Dosa from "./Image/dosa.jpg";

export default function Vegeterian({ img, name, text, price }) {
    return (
        <>
            <Info img={Dosa} name="Dosa" text="lkjhfgsfcvbjkn" price="200" />
            <Info img={Dosa} name="Dosa" text="lkjhfgsfcvbjkn" price="200" />
            <Info img={Dosa} name="Dosa" text="lkjhfgsfcvbjkn" price="200" />
            <Info img={Dosa} name="Dosa" text="lkjhfgsfcvbjkn" price="200" />
            <Info img={Dosa} name="Dosa" text="lkjhfgsfcvbjkn" price="200" />
        </>
    )
}