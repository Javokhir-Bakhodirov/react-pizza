import Categories from "@/components/catgpries/Categories";
import Products from "@/components/products/Products";
import { useAxios } from "@/hooks/useAxios";
import Container from "@/utils";
import { useQuery } from "react-query";

type Props = {};

function Home({}: Props) {
    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: () =>
            useAxios()
                .get("/categories")
                .then(res => res.data),
    });

    return (
        <section>
            <Container>
                <Categories categories={categories} />
                <Products />
            </Container>
        </section>
    );
}

export default Home;
