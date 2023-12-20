import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { AddCategoryForm } from "../forms/add-category-form";

export const AddCategoryButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="flex justify-center items-center py-0 px-2 h-full rounded-l-none border-l-0">
                <Plus /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{`New Category`}</DialogTitle>
                    <DialogDescription>
                        {`Create a new task Category. Click save when you're done.`}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 pb-4">
                    <AddCategoryForm />
                </div>
            </DialogContent>
        </Dialog>
    )
}
