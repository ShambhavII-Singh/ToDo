import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <div className="h-14 w-full py-2 px-3">
            <p className="text-lg font-semibold text-foreground bg-background text-center flex justify-center items-center gap-1">
                Made with <Heart className="text-ring" /> by 
                <a className="underline text-ring" href="https://github.com/ShambhavII-Singh">Shambhavi</a>
            </p>
        </div>
    )
}