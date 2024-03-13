import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    btnType?: "button" | "submit" | "reset" | undefined;
}

export interface ProjectItemProps{
    title: string;
    backgroundImg: string;
    projectUrl: string;
    description: string
}