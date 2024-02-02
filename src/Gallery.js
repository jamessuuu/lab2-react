
function Gallery() {
    return (
        <div className="gallery-container">
            <div className="gallery">
                <div>
                    <img className="gallery-img" src="https://rastaclat.com/cdn/shop/files/shop-couples-set-hp-tiles_900x.jpg?v=1706551730" />
                </div>
                <div>
                    <img className="gallery-img" src="https://rastaclat.com/cdn/shop/files/shop-braided-hp-tiles_900x.jpg?v=1706551737" />
                </div>
                <div>
                    <img className="gallery-img" src="https://rastaclat.com/cdn/shop/files/shop-single-lace-hp-tiles_900x.jpg?v=1706551749" />
                </div>
                <div>
                    <img className="gallery-img" src="https://rastaclat.com/cdn/shop/files/shop-beaded-hp-tiles_900x.jpg?v=1706551758" />
                </div>
            </div>

            <div className="quote">
                “A brand isn’t your product. Rastaclat is a brand focused on
                <div className="quote-next">how you bring people together in the community.”</div>
            </div>

            <div className="partners">
                <img className="partner1" src="https://rastaclat.com/cdn/shop/files/hypebeast-logo-vector_300x.jpg?v=1667928551" />
                <img className="partner" src="https://rastaclat.com/cdn/shop/files/complex-logo-vector_300x.jpg?v=1667928470" />
                <img className="partner" src="https://rastaclat.com/cdn/shop/files/forbes-wordmark_300x.jpg?v=1667928477" />
                <img className="partner" src="https://rastaclat.com/cdn/shop/files/huffpost_300x.jpg?v=1667929216" />
            </div>

            <div className="charity">
                A percentage of your purchase will be donated to the Seek the Positive Foundation,
                <div style={{ marginTop: "8px" }}>which is dedicated to impacting humankind through service, charitable grants, and
                </div>
                <div style={{ marginTop: "8px" }}>awareness to causes focused on equality and personal development.</div>
            </div>

            <div className="charity2">
                <div className="charity-text">OVER $3 MILLION DONATED</div>
                <div></div>
                <div className="charity-text">36 MILLION LIVES IMPACTED</div>
            </div>
        </div>

    )
}

export default Gallery;