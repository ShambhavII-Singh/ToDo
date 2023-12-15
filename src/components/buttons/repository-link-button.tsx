import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RepositoryLinkButton = () => {

    return (
        <Button type="submit" variant="outline" size="icon" onClick={() => {window.location.href = 'https://github.com/ShambhavII-Singh/ToDo';}}>
            <Github />
        </Button>
    )
}