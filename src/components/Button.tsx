import { ReactElement } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text?: string;
  icon?: ReactElement;
  onClick?: () => void;
}

const varintStyles = {
  primary: "bg-blue-400",
  secondary: "bg-green-400",
};

const defaultStyles = "rounded p-2 m-1";
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${varintStyles[props.variant || "primary"]} ${defaultStyles}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
