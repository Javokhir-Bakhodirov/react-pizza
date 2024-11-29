import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className="container mx-auto py-[25px] ">{children}</div>;
};

export default Container;
