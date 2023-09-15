import "./Info.css";


export default function Info({ img}) {
    return (
        <>
            <div className="main-content">
                <div>
                    <img className="images " src={img} />
                    
                </div>
            </div>
        </>
    )
}