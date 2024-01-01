import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { StarsIcon } from "lucide-react";

type TaskDetails = {
    task: string,
    description?: string,
}

export const  TaskLine = ({task,description} : TaskDetails) => {
    const [checked,setChecked] = React.useState(false);
    return (
        <div className="items-top flex space-x-2 w-full border-b-2 border-b-ring p-2 group relative ">
            <Checkbox checked={checked} onCheckedChange={() => {setChecked(!checked)}}/>
            <div className="grid leading-none w-full flex-col items-center">
                <div className="flex justify-between items-start w-full">
                    <div className="flex justify-start gap-x-3">
                        <label className={`text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${checked?' text-muted-foreground line-through':''}`}>
                            {task}
                        </label>
                        <StarsIcon className="x-1 text-ring" />
                    </div>
                    <p className="invisible group-hover:visible text-sm text-muted-foreground">Right click for more</p>
                </div>
                <p className="text-sm text-muted-foreground break-all">
                    {description}
                </p>
            </div>
        </div>
    )
}