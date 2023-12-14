import { RepositoryLinkButton } from "@/components/buttons/repository-link-button";
import { LightModeDarkModeToggle } from "@/components/buttons/lightmode-darkmode-button";
import { TooltipCreator } from "@/components/tooltip-creator";
import { DatePicker } from "@/components/ui/date-picker";
import { CategoryDropdown } from "./category-dropdown";
import { AddCategoryButton } from "./buttons/add-category-button";

export const Header = () => {
    const sample = [
        {name: "Today", key: 0, desc: "These are the tasks to be completed by today"},
        {name: "Today", key: 1, desc: "These are the tasks to be completed by today"}];
    return (
        <div className="h-fit w-full flex justify-between py-2 px-3">
            <div className="flex justify-start gap-2">
                <DatePicker />
                <div className="flex">
                    <CategoryDropdown categories={sample} />
                    <TooltipCreator trigger={<AddCategoryButton />} description="New category" />
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <TooltipCreator trigger={<RepositoryLinkButton />} description="Github Link" />
                <TooltipCreator trigger={<LightModeDarkModeToggle />} description="Change Mode" />
            </div>
        </div>
    )
}