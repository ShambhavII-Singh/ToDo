import React from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type category = {
    name: string,
    key: number
};

type CategoryDropdown ={
    categories: category[]
};

export const CategoryDropdown = ({ categories }: CategoryDropdown) => {
    const [current,setCurrent] = React.useState(0);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-r-none">{categories[current].name}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit p-0 flex flex-col gap-1 items-center justify-center">
                {categories.map((category) => {
                    if (category.key !== current) {
                        return (
                            <DropdownMenuItem onClick={() => {setCurrent(category.key)}}>
                                <span>{category.name}</span>
                            </DropdownMenuItem>
                        );
                    }
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
