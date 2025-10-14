import type { LogoProps } from "./Logo.types";
import logo from "../../assets/logo.svg"
import full_logo from "../../assets/full_logo.svg"

export const Logo = ({ orientation, width, height }: LogoProps) =>{
   
    const img = orientation === 'horizontal' ? full_logo : logo; 
    const src = typeof img === "string" ? img : img.src;
    return <img src={src} alt="logo_app" width={width} height={height} />        
    
} 