// src/pages/Home.tsx
import React from "react";
import imgHome from "../temporaryResources/HomeDisplayImage.png";
import img1 from "../temporaryResources/product1.png";
import Grid from "@mui/material/Grid2";
import ProductCard from "../components/ProductCard";
import { getMoreProducts } from "../hooks/products";
import { Typography } from "@mui/material";

const Home: React.FC = () => {
    const products = getMoreProducts();
    return (
        <div
            style={{
                width: "78vw",
                marginLeft: "11vw",
                marginRight: "11vw",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <img
                style={{
                    width: "74vw",
                    marginLeft: "2vw",
                    marginRight: "2vw",
                    height: "75vh",
                }}
                src={imgHome}
                alt="Image"
            ></img>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Explore
                <span style={{ color: "#0072ff" }}> Auctions</span>
            </span>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Grid container>
                    {products.map((e) => (
                        <ProductCard
                            imageUrl={e.imageUrl}
                            status={e.status}
                            minBid={e.minBid}
                            maxBid={e.maxBid}
                            endTime={e.endTime}
                        ></ProductCard>
                    ))}
                </Grid>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Grid container>
                    {products.map((e) => (
                        <ProductCard
                            imageUrl={e.imageUrl}
                            status={e.status}
                            minBid={e.minBid}
                            maxBid={e.maxBid}
                            endTime={e.endTime}
                        ></ProductCard>
                    ))}
                </Grid>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className='btn-grad' style={{ fontSize: 12, border: "none", borderRadius: 3, color: "white", padding: 7, paddingLeft: 12, paddingRight: 12 }}>Load More...</button>
            </div>
        </div>
    );
};

export default Home;
