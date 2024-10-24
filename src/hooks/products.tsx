import img1 from "../temporaryResources/product1.png";
import img2 from "../temporaryResources/product2.png";
import img3 from "../temporaryResources/product3.png";
import img4 from "../temporaryResources/product4.png";
import img5 from "../temporaryResources/product5.png";



export const getMoreProducts = (): {
    imageUrl: string,
    status: "Live" | "Closed",
    minBid: number,
    maxBid: number,
    endTime: string,
}[] => {
    const totalProductCount = 100;
    const today = new Date();
    return [{
        imageUrl: img1,
        status: "Live",
        minBid: 100,
        maxBid: 190,
        endTime: (today.getDate() + 1) + "-" + (today.getMonth() + 1) + "-" + today.getFullYear(),

    },
    {
        imageUrl: img2,
        status: "Live",
        minBid: 100,
        maxBid: 190,
        endTime: (today.getDate() + 1) + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
    },
    {
        imageUrl: img3,
        status: "Live",
        minBid: 100,
        maxBid: 190,
        endTime: (today.getDate() + 1) + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
    },
    {
        imageUrl: img4,
        status: "Live",
        minBid: 100,
        maxBid: 190,
        endTime: (today.getDate() + 1) + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
    },
    {
        imageUrl: img5,
        status: "Live",
        minBid: 100,
        maxBid: 190,
        endTime: (today.getDate() + 1) + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
    }
    ]
}