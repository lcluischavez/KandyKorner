import React from "react"
import "./Locations.css"

export default ({ location }) => (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <address className="location__address">{location.address}</address>
            <div className="location__size">Square Footage: {location.squareFootage}ft.</div>
            <div className="location__accessible">
                Accessibilty: {location.handiAccessible === true ? "Accessible" : "Not Accessible"}
            </div>
        </section>
)