import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { AddTaskButton } from "./buttons/add-task-button";
import { TooltipCreator } from "./tooltip-creator";

export const ToDo = () => {
    return (
        <Tabs defaultValue="pending" className="min-w-full" >
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="pending">
                <Card>
                    <CardHeader>
                        <div className="flex items-end justify-between">
                            <CardTitle>Pending</CardTitle>
                            <TooltipCreator trigger={<AddTaskButton />} description="New task" />
                        </div>
                        <CardDescription>
                            The following tasks to go! 💪
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        
                    </CardContent>
                    <CardFooter>
                        
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="completed">
                <Card>
                    <CardHeader>
                        <CardTitle>Completed</CardTitle>
                        <CardDescription>
                            Look at you go! 🥳
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        
                    </CardContent>
                    <CardFooter>
                        
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}