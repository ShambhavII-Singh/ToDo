import React from "react";
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

type Trigger = {
    trigger: React.ReactElement
}

export const ContextMenuCreator = ({trigger} : Trigger) => {
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <span>{trigger}</span>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                <ContextMenuItem inset>Delete task</ContextMenuItem>
                <ContextMenuCheckboxItem>Assign priority badge</ContextMenuCheckboxItem>
                <ContextMenuItem inset>Edit task</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}