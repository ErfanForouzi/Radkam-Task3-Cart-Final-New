import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  isDisabled = false,
  type = "button",
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button type={type} disabled={isDisabled} {...rest} className={className}>
      {children}
    </button>
  );
};
