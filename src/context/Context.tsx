import { createContext, ReactNode, SetStateAction, useState } from "react";

interface ContextI {
    categoryId: number | null;
    setCategoryId: React.Dispatch<SetStateAction<number | null>>;
}

export const Context = createContext<ContextI>({
    categoryId: null,
    setCategoryId: () => {},
});

export const ProductContext: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [categoryId, setCategoryId] = useState<number | null>(null);

    return (
        <Context.Provider value={{ categoryId, setCategoryId }}>
            {children}
        </Context.Provider>
    );
};
