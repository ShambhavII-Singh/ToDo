import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ToDo } from "@/components/to-do";

export const MainPage = () => {
    return (
        <>
            <div className="flex h-screen flex-col">
                <Header />
                <div className="flex h-full w-screen">
                    <div className="w-full h-full flex flex-col px-20 pt-20 gap-5 items-center border-y-2 border-y-accent">
                        <p className="text-8xl font-bold">To Do</p>
                        <ToDo />
                    </div>
                    <div className="w-1/2 bg-ring h-full flex flex-col px-20 pt-20 gap-5 items-center">
                        <p className="text-8xl font-bold text-background">Pomodoro</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}