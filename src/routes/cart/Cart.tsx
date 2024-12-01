import { BiTrashAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, StateI } from "@/store/slices/CartSlice";
import { PizzaI } from "@/types";
import OrderCard from "@/components/card/OrderCard";
import empty from "@/img/emptyCart.svg";
import { useMemo } from "react";

const Cart = () => {
    const { cart } = useSelector((state: { cart: StateI }) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = useMemo(() => {
        return cart.reduce(
            (acc, pizza) => acc + pizza.quantity * pizza.price,
            0
        );
    }, [cart]);

    return (
        <section>
            <Container>
                <div className="flex flex-col w-3/4 mx-auto">
                    {cart.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between py-[40px]">
                                <div className="font-[500] text-[32px] leading-[39px] flex items-center space-x-2">
                                    <AiOutlineShoppingCart />
                                    <strong>Корзина</strong>
                                </div>
                                <button
                                    onClick={() => dispatch(clearCart())}
                                    className="text-[#B6B6B6] text-[16px] leading-5 font-400 flex space-x-2 items-center">
                                    <BiTrashAlt />
                                    <span>Очистить корзину</span>
                                </button>
                            </div>

                            <ul className="grid gap-[22px]">
                                {cart.map((pizza: PizzaI) => (
                                    <OrderCard pizza={pizza} key={pizza.id} />
                                ))}
                            </ul>

                            <div className="flex items-center justify-between mt-[40px]">
                                <p className="text-[22px] leading-[27px] font-[300]">
                                    Всего пицц:{" "}
                                    <strong className="font-bold">
                                        {cart.length} шт.
                                    </strong>
                                </p>
                                <p className="text-[22px] leading-[27px] font-[300]">
                                    Сумма заказа:{" "}
                                    <strong className="font-bold text-[#FE5F1E]">
                                        {totalPrice} ₽
                                    </strong>
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img
                                src={empty}
                                alt="Empty cart illustration"
                                className="w-2/4 h-auto"
                            />
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Cart;
