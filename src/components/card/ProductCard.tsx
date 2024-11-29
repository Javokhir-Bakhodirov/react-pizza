import { PizzaI } from "@/types";
import React, { useState } from "react";
import { Segmented } from "antd";

interface PizzasProps {
    pizza: PizzaI;
}

const ProductCard: React.FC<PizzasProps> = ({ pizza }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const pizzaOptions = [
        {
            label: "тонкий",
            value: "тонкий",
            disabled: pizza.type.length === 1 && pizza.type[0] !== "тонкий",
        },
        {
            label: "традиционный",
            value: "традиционный",
            disabled:
                pizza.type.length === 1 && pizza.type[0] !== "традиционный",
        },
    ];

    const sizeOptions = [
        { label: "26 см", value: 26, disabled: !pizza.size.includes(26) },
        { label: "30 см", value: 30, disabled: !pizza.size.includes(30) },
        { label: "40 см", value: 40, disabled: !pizza.size.includes(40) },
    ];

    const defaultSelectedValue =
        selectedValue || (pizzaOptions[0].disabled ? "традиционный" : "тонкий");

    const defaultSelectedSize = selectedSize || 26;

    return (
        <div className="w-[297px] flex flex-col items-center gap-5">
            <img src={pizza.imgUrl} width={260} height={260} alt={pizza.name} />
            <h2 className="text-black text-[20px] font-extrabold">
                {pizza.name}
            </h2>
            <div className="w-full bg-[#F3F3F3] rounded-lg">
                <Segmented
                    className="w-full"
                    options={pizzaOptions}
                    value={defaultSelectedValue}
                    onChange={value => {
                        setSelectedValue(value);
                        console.log(value);
                    }}
                />
                <Segmented
                    className="w-full"
                    options={sizeOptions}
                    value={defaultSelectedSize}
                    onChange={value => {
                        setSelectedSize(value);
                        console.log(value);
                    }}
                />
            </div>
            <div className="flex items-center justify-between w-full">
                <p className="font-bold text-[22px] text-black">
                    от {pizza.price}₽
                </p>
                <button className="px-[20px] py-[12px]  rounded-full bg-[#FE5F1E] text-white font-bold flex space-x-4">
                    {" "}
                    + Добавить
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
