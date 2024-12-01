import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className="max-w-[83%] mx-auto py-[25px] ">{children}</div>;
};

export default Container;
