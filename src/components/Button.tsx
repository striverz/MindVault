import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  icon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-blue-200 p-2 rounded-lg mx-2 hover:bg-blue-100 ",
  secondary: "bg-blue-500 p-2 rounded-lg mx-2 hover:bg-blue-400  ",
};

const defaultStyles = "flex items-center gap-2 ";

const Button = (props: ButtonProps) => {
  return (
    <button className={`${variantStyles[props.variant]} ${defaultStyles}`}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
