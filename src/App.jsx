import {useState} from "react";
import {CountValue} from ".";
import { ProductCard } from "./components/ProductCard";


const products = [
{
    'img': "https://istore.kg/media/products/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium.webp",
    name: "Iphone 15 Pro",
    price: "1299$",
},
{
    'img': "https://istore.kg/media/products/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.webp",
    name: "Iphone 15 Pro Max",
    price: "1499$",
},
];

export function App(props) {
    return (
        <div>
            {
                products.map((product) => ( <ProductCard data = {product}/>))
            }
        </div>
    );
}