import { FaLeaf } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { PizzaI } from "@/types";
import React, { useState } from "react";
import { Segmented, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, StateI } from "@/store/slices/CartSlice";
import { motion } from "framer-motion";

interface PizzasProps {
    pizza: PizzaI;
}

const ProductCard: React.FC<PizzasProps> = ({ pizza }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state: { cart: StateI }) => state.cart);

    const [selectedValue, setSelectedValue] = useState<string>("тонкий");
    const [selectedSize, setSelectedSize] = useState<number>(pizza.size[0]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
    console.log(pizza);

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                ...pizza,
                type: [selectedValue],
                size: [selectedSize],
            })
        );
        setIsModalOpen(false);
    };

    const sizeOptions = [
        { label: "26 см", value: 26, disabled: !pizza.size.includes(26) },
        { label: "30 см", value: 30, disabled: !pizza.size.includes(30) },
        { label: "40 см", value: 40, disabled: !pizza.size.includes(40) },
    ];

    const defaultSelectedValue =
        selectedValue || (pizzaOptions[0].disabled ? "традиционный" : "тонкий");

    const defaultSelectedSize = selectedSize || 26;

    const pizzaCount = (id: number): number => {
        const pizza = cart.find((item: PizzaI) => item.id === id);
        return pizza ? pizza.quantity : 0;
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
            }}
            className="w-[297px] flex flex-col items-center gap-5 relative">
            <div className="absolute flex flex-col space-y-2 top-2 right-1">
                {" "}
                {pizza.popularity >= 5 && (
                    <FaFire className="text-[#FE5F1E] w-7 h-7" />
                )}
                {pizza.categoryId === 4 && (
                    <GiChiliPepper className="text-red-800 w-7 h-7" />
                )}
                {pizza.categoryId === 2 && (
                    <FaLeaf className="text-green-800 w-7 h-7" />
                )}
            </div>
            <img src={pizza.imgUrl} width={260} height={260} alt={pizza.name} />
            <h2 className="text-black text-[20px] font-extrabold line-clamp-1">
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
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-[20px] h-[56px] group py-[12px] rounded-full border-[2px] duration-300 border-[#FE5F1E] bg-white hover:bg-[#FE5F1E] text-[#FE5F1E] hover:text-white font-bold flex items-center  gap-2">
                    + Добавить{"      "}
                    {pizzaCount(pizza.id) > 0 ? (
                        <span className="w-7 h-7 border-[1px]  bg-[#FE5F1E]  border-[#FE5F1E] group-hover:bg-white rounded-full  text-white group-hover:text-[#FE5F1E] group-hover:border-white ">
                            {pizzaCount(pizza.id)}
                        </span>
                    ) : null}
                </button>
            </div>
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
                className="custom-modal">
                <div className="flex flex-col items-center">
                    <img
                        src={pizza.imgUrl}
                        alt={pizza.name}
                        style={{
                            width: `${selectedSize * 10}px`,
                            transition: "width 0.3s ease-in-out",
                        }}
                        className="h-auto mb-4"
                    />
                    <h2 className="text-black text-[24px] font-extrabold">
                        {pizza.name}
                    </h2>
                    <p className="text-center text-[16px] text-gray-700 mt-2 mb-4">
                        {pizza.description || "Описание пиццы"}
                    </p>
                    <div className="w-full bg-[#F3F3F3] rounded-lg mb-4">
                        <Segmented
                            className="w-full"
                            options={pizzaOptions}
                            value={defaultSelectedValue}
                            onChange={value => setSelectedValue(value)}
                        />
                        <Segmented
                            className="w-full mt-2"
                            options={sizeOptions}
                            value={defaultSelectedSize}
                            onChange={value => setSelectedSize(value)}
                        />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className="font-bold text-[22px] text-black">
                            Цена: {pizza.price}₽
                        </p>
                        <button
                            onClick={handleAddToCart}
                            className="px-[20px] py-[12px] rounded-full border-[2px] duration-300 border-[#FE5F1E] bg-white hover:bg-[#FE5F1E] text-[#FE5F1E] hover:text-white font-bold flex space-x-4">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </Modal>
        </motion.div>
    );
};

export default ProductCard;
