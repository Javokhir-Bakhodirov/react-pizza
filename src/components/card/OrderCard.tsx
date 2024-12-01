import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { PizzaI } from "@/types";
import { useDispatch } from "react-redux";
import {
    addToCart,
    delateFromCart,
    removeFromCart,
} from "@/store/slices/CartSlice";

const OrderCard = ({ pizza }: { pizza: PizzaI }) => {
    const dispatch = useDispatch();

    return (
        <li className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center justify-center pt-[32px] border-t-2 border-[#F4F4F4]">
            <div className=" flex items-center space-x-4">
                <img src={pizza.imgUrl} alt="pizza" width={80} height={80} />
                <div className="name flex flex-col  items-start justify-start">
                    <strong className="font-bold text-[22px] leading-[27px]">
                        {pizza.name}
                    </strong>
                    <p className=" font-[400] m-0 text-[16px] leading-[22px] text-[#8D8D8D]">
                        {pizza.type?.[0] || "Неизвестное"} тесто,{" "}
                        {pizza.size?.[0] || "?"} см.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <button onClick={() => dispatch(removeFromCart(pizza.id))}>
                    <AiOutlineMinusCircle className=" w-[32px] h-[32px] text-[#FE5F1E]" />
                </button>
                <strong className="font-bold text-[22px] leading-[27px]">
                    {" "}
                    {pizza.quantity}
                </strong>
                <button className="" onClick={() => dispatch(addToCart(pizza))}>
                    <AiOutlinePlusCircle className=" w-[32px] h-[32px] text-[#FE5F1E]" />
                </button>
            </div>
            <div className=" justify-self-center">
                <strong className="font-bold text-[22px] leading-[27px]">
                    {pizza.price * pizza.quantity} ₽{" "}
                </strong>
            </div>
            <button
                className=" justify-self-end"
                onClick={() => dispatch(delateFromCart(pizza.id))}>
                <AiOutlinePlusCircle className=" w-[32px] h-[32px] text-[#D7D7D7] rotate-[45deg]" />
            </button>
        </li>
    );
};

export default OrderCard;
