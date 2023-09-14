import "./Info.css";

export default function Info({ img, name, text, price }) {
    return (
        <>
            <div className="main-content">
                <div className="image">
                    <img src="{img}" />
                </div>
                <div className="container">
                    <h1><i>{name}</i></h1>
                    <h3>{text}</h3>
                    <h2>{price}</h2>
                </div>
            </div>
        </>



    )

}