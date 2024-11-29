import React, { useContext, useState } from "react";
import { CategoryI } from "@/types";
import { Context } from "@/context/Context";

interface CategoriesProps {
    categories: CategoryI[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
    const [isActive, setIsActive] = useState<string>("Все");
    const { setCategoryId } = useContext(Context);

    const handleChangeCategory = (name: string, id: number): void => {
        setCategoryId(id);
        setIsActive(name);
    };

    return (
        <div className="">
            <div className="flex space-x-5">
                {categories &&
                    categories.length > 0 &&
                    categories.map((category: CategoryI) => (
                        <button
                            onClick={() =>
                                handleChangeCategory(category.name, category.id)
                            }
                            key={category.id}
                            className={`${
                                isActive === category.name
                                    ? "bg-black text-[#F9F9F9]"
                                    : "bg-[#F9F9F9] text-black"
                            }  px-[33px] py-[12px] text-[16px] font-bold rounded-3xl`}>
                            {category.name}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default Categories;
