
import React from 'react';
import "../styles/ProductCard.css";
import { Button } from '@mui/material';

interface Props {
    imageUrl: string,
    status: "Live" | "Closed",
    minBid: number,
    maxBid: number,
    endTime: string
}

function ProductCard(props: Props) {

    return (
        <div className='Container'>
            <img className='image' src={props.imageUrl} alt="Image"></img>
            <button style={{ backgroundColor: "#50C878", fontSize: 10, border: "none", borderRadius: 3, color: "white", padding: 2, paddingLeft: 5, paddingRight: 5, paddingBottom: 0 }}> Live Auction</button>
            <h5>Sony Black Headphones</h5>
            <p style={{ fontSize: 12 }}>Minimum Bid</p>
            <p style={{ fontSize: 12 }}>Maximum Bid</p>
            <p style={{ fontSize: 12 }}>Ends in 12:34:00</p>
            <button className='btn-grad2' style={{ width: "13.4vw", fontSize: 14, border: "none", borderRadius: 3, color: "white", padding: 7, paddingLeft: 7, paddingRight: 7 }}>Bid Now </button>

        </div>
    );
}

export default ProductCard;
