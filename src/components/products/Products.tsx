import { Context } from "@/context/Context";
import { useAxios } from "@/hooks/useAxios";
import Container from "@/utils";
import { useContext } from "react";
import { useQuery } from "react-query";
import ProductCard from "../card/ProductCard";
import { PizzaI } from "@/types";
import { motion } from "framer-motion";

const Products = () => {
    const { categoryId } = useContext(Context);

    const { data: pizzas = [] } = useQuery({
        queryKey: ["pizzas", categoryId],
        queryFn: () =>
            useAxios()
                .get("pizzas", { params: { categoryId } })
                .then(res => res.data),
    });
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <section className="mt-[30px]">
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                    className="grid grid-cols-4 gap-[45px] justify-between ">
                    {pizzas.map((pizza: PizzaI) => (
                        <ProductCard pizza={pizza} key={pizza.id} />
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default Products;
