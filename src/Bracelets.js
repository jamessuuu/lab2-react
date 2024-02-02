import { braceletData } from "./data";

function Bracelets() {
    return (
        <div>
            <div className="bracelet-container">
                {braceletData.map((bracelet, index) => (
                    <div key={index} className="items">
                        <img className="img" src={bracelet.img} alt={bracelet.name} />
                        <div className="item-name">{bracelet.name}</div>
                        <div className="item-collection">{bracelet.collection}</div>
                        <div className="item-price">{bracelet.price}</div>
                        <div className="add">{bracelet.status}</div>
                        <div className="offer">{bracelet.offer}</div>
                        {bracelet.preview ? (
                            <img className="preview" src={bracelet.preview} />
                        ) : null}
                    </div>
                ))}
            </div>
            <div class="parent-container">
                <div class="view">View all</div>
            </div>
        </div>
    );
}


export default Bracelets