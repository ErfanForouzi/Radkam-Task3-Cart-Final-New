import { ThreeDots } from "react-loader-spinner";
import { LoadingDotsProps } from "./loading-types";

export const LoadingDots: React.FC<LoadingDotsProps> = (
  { width = 30, height = 30, radius = 9, color = "", ...props }: LoadingDotsProps) => {
  return (
    <ThreeDots
      width={width}
      height={height}
      radius={radius}
      color={color}
      visible={true}
      {...props}
    />
  );
};