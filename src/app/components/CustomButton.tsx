import React from "react";
import { CustomButtonProps } from "../../../types";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={`${containerStyles}`}
    >
      <span className={`${textStyles}`}>{title}</span>
      {rightIcon}
    </button>
  );
};

export default CustomButton;
