import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "@/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/img/logo.svg";
import { useSelector } from "react-redux";
import { StateI } from "@/store/slices/CartSlice";
import { PizzaI } from "@/types";

type Props = {};

const Header = ({}: Props) => {
    const { pathname } = useLocation();

    const navigate = useNavigate();
    const { cart } = useSelector((state: { cart: StateI }) => state.cart);

    const totalPrice = (cart: PizzaI[]): number => {
        return cart.reduce(
            (acc, pizza) => acc + pizza.quantity * pizza.price,
            0
        );
    };

    return (
        <header className=" border-b-2 border-b-[#f0eeee] sticky top-0 w-full bg-white z-[12]">
            <Container>
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex  items-center space-x-2">
                        <img
                            src={logo}
                            alt="React Pizza"
                            width={40}
                            height={40}
                        />
                        <div className="flex flex-col">
                            <h1 className="font-extrabold text-[24px] leading-[29px] text-black ">
                                REACT PIZZA
                            </h1>
                            <p className="text-[16px] font-regular leading-[19px] text-[#7B7B7B]">
                                самая вкусная пицца во вселенной
                            </p>
                        </div>
                    </Link>
                    {pathname !== "/cart" ? (
                        <button
                            onClick={() => navigate("/cart")}
                            className="px-[20px] py-[12px] flex items-center rounded-full bg-[#FE5F1E] text-white font-bold flex space-x-4">
                            <span className="">{totalPrice(cart) + "₽"}</span>
                            {"  "}
                            <span className="line h-[25px] w-[2px] rounded-lg bg-[#FFFFFF] opacity-15"></span>
                            {"   "}
                            <span className="flex items-center ">
                                {" "}
                                <AiOutlineShoppingCart className="font-bold mr-[5px]" />{" "}
                                {cart && cart.length > 0 ? cart.length : null}
                            </span>
                        </button>
                    ) : null}
                </div>
            </Container>
        </header>
    );
};

export default Header;
