import { Button } from "../components/ui/button";
import { HorizontalImageSlider } from "../components/horixontal-image-slider";
import { SignUpLoginForm } from "../components/signup-login-form";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
    const navigationHelper = useNavigate();
    const handleClick = () => {navigationHelper("/login")}
    return (
        <div className="bg-background h-screen flex">
            <div className="hidden xl:flex w-1/2">
                <HorizontalImageSlider />
            </div>
            <div className="w-full">
                <div className="flex pt-6 pr-6 w-full justify-end">
                    <Button 
                        variant="outline"
                        onClick={handleClick}>Log In</Button>
                    </div>
                    <div className="flex py-20 justify-center">
                        <SignUpLoginForm buttonText={"Sign up"} array={["Create account","Enter your e-mail to create your account"]} />
                    </div>
                </div>
        </div>
    )
}