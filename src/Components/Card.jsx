import React from 'react'
import cardStyle from '../Styles/Card.module.css'
export default function Card({ picture, name, mrn }) {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={picture} class="card-img-top" alt={name} style={{ height: "18rem" }} />
            <div class="card-body" >
                <h5 class="card-title">{name}</h5>
                <p class="card-text" style={{ color: "gray" }}>MRN: {mrn}</p>
                <button href="#" class="btn btn-primary">More details</button>
            </div>
        </div>
        // <div className={cardStyle.container}>
        //     <img src={picture} alt={name} />
        //     <div>
        //         <h5>{name}</h5>
        //         <p>MRN: {mrn}</p>
        //         <button>More details</button>
        //     </div>
        // </div>
    )
}
