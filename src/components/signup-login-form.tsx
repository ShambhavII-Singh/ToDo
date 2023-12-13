import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SiGmail } from "react-icons/si";

interface Text {
    buttonText: string;
    array: string[];
}

export const SignUpLoginForm = ({ buttonText,array }:Text) => {
    return (
        <div className="rounded-md border flex flex-col justify-center space-y-6 sm:w-[550px] px-12 py-12 bg-background h-fit">
            <div className="flex flex-col space-y-2 text-center">
                <div className="flex flex-row justify-center items-center gap-2">
                    <img src="/src/assets/logo.svg" className="w-20"/>   
                    <h1 className=" text-6xl font-semibold tracking-tight">ToDo</h1>
                </div>
                <h1 className="text-3xl font-semibold tracking-tight">{array[0]}</h1>
                <p className="text-sm text-muted-foreground">{array[1]}</p>
            </div>
            <div className="grid gap-2">
                <div className="grid gap-1">
                    <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                    />
                    <Input
                        id="password"
                        placeholder="password"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="off"
                        autoCorrect="off"
                    />
                </div>
                <Button variant="outline">{buttonText} with Email</Button>
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                </span>
                </div>
            </div>
            <Button variant="outline" type="button" className="flex gap-2"><SiGmail/>Gmail</Button>
        </div>
    )
}