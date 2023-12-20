import { PlusSquare } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AddTaskForm } from "../forms/add-task-form";

export const AddTaskButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <PlusSquare className="bg-ring text-primary-foreground p-1 rounded" />  
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{`New Task`}</DialogTitle>
                    <DialogDescription>
                        {`Create a new task. Click save when you're done.`}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 pb-4">
                    <AddTaskForm />
                </div>
            </DialogContent>
        </Dialog>
    )
}
