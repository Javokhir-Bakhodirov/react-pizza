import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "@/utils";
import { Link } from "react-router-dom";
import logo from "@/img/logo.svg";

type Props = {};

const Header = ({}: Props) => {
    return (
        <header className=" border-b-2 border-b-[#f0eeee] sticky top-0 w-full bg-white z-[12345]">
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
                    <button className="px-[20px] py-[12px]  rounded-full bg-[#FE5F1E] text-white font-bold flex space-x-4">
                        <span className="">520$</span>
                        {"  "}
                        <span className="line h-[25px] w-[2px] rounded-lg bg-[#FFFFFF] opacity-15"></span>
                        {"   "}
                        <span className="flex items-center ">
                            {" "}
                            <AiOutlineShoppingCart className="font-bold mr-[5px]" />{" "}
                            3
                        </span>
                    </button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
