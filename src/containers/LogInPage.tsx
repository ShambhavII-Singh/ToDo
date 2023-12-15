import { HorizontalImageSlider } from "../components/horixontal-image-slider";
import { Button } from "../components/ui/button";
import { SignUpLoginForm } from "../components/signup-login-form";
import { useNavigate } from "react-router-dom";

export const LogInPage = () => {
    const navigationHelper = useNavigate();
    const handleClick = () => {navigationHelper("/signup")}
    return (
        <div className="bg-background h-screen flex">
            <div className="hidden xl:flex w-1/2">
                <HorizontalImageSlider />
            </div>
            <div className="w-full">
                <div className="flex pt-6 pr-6 w-full justify-end">
                    <Button 
                        variant="outline"
                        onClick={handleClick}>Sign Up</Button>
                    </div>
                    <div className="flex py-20 justify-center">
                        <SignUpLoginForm buttonText={"Log in"} array={["Log In","Enter your email below to log in"]} />
                    </div>
                </div>
        </div>
    )
}