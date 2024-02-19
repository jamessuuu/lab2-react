import { braceletData } from "./data";
import Swal from "sweetalert2";

function Bracelets() {
  const isAvailable = (status) => status === "available";
  const allSoldOut = braceletData.every(
    (bracelet) => !isAvailable(bracelet.status),
  );

  const handleAddClick = (status) => {
    if (status === "available") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item Successfully Added to Cart",
        text: "Thank you for purchasing!",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Item is Unavailable",
        text: "Sorry, this item is sold out.",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <div>
      <div
        className="bracelet-container"
        style={allSoldOut ? { position: "relative" } : null}
      >
        {braceletData.map((bracelet, index) => (
          <div
            key={index}
            className={`items ${!isAvailable(bracelet.status) ? "sold-out" : ""}`}
          >
            <img className="img" src={bracelet.img} alt={bracelet.name} />
            <div className="item-name">{bracelet.name}</div>
            <div className="item-collection">{bracelet.collection}</div>
            <div className="item-price">{bracelet.price}</div>
            <div
              className="add"
              onClick={() => handleAddClick(bracelet.status)}
            >
              {isAvailable(bracelet.status) ? "Add to Cart" : "Sold Out"}
            </div>
            <div className="offer">{bracelet.offer}</div>
            {bracelet.preview && (
              <img className="preview" src={bracelet.preview} alt="Preview" />
            )}
          </div>
        ))}
        {allSoldOut && <div className="overlay"></div>}
      </div>
      <div className="parent-container">
        <div className="view">View all</div>
      </div>
    </div>
  );
}

export default Bracelets;
