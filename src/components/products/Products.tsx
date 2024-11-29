import { Context } from "@/context/Context";
import { useAxios } from "@/hooks/useAxios";
import Container from "@/utils";
import { useContext } from "react";
import { useQuery } from "react-query";
import ProductCard from "../card/ProductCard";
import { PizzaI } from "@/types";

const Products = () => {
    const { categoryId } = useContext(Context);

    const { data: pizzas = [] } = useQuery({
        queryKey: ["pizzas", categoryId],
        queryFn: () =>
            useAxios()
                .get("pizzas", { params: { categoryId } })
                .then(res => res.data),
    });
    console.log(pizzas);

    return (
        <section className="mt-[30px]">
            <Container>
                <div className="grid grid-cols-4 gap-[45px] justify-between ">
                    {pizzas.map((pizza: PizzaI) => (
                        <ProductCard pizza={pizza} key={pizza.id} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Products;
