import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: ElementType;
  size?: "display" | "xl" | "lg" | "md" | "sm";
  align?: "left" | "center" | "right";
  color?: "default" | "white" | "primary";
  children: ReactNode;
  className?: string;
};

const sizeClasses = {
  display: "text-5xl font-bold tracking-tight sm:text-6xl",
  xl: "text-4xl font-semibold tracking-tight",
  lg: "text-3xl font-semibold",
  md: "text-2xl font-medium",
  sm: "text-xl font-medium",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const colorClasses = {
  default: "text-gray-900",
  white: "text-white",
  primary: "text-blue-600",
};

export function Heading({
  as: Tag = "h2",
  size = "md",
  align = "left",
  color = "default",
  children,
  className,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        sizeClasses[size],
        alignClasses[align],
        colorClasses[color],
        className
      )}
    >
      {children}
    </Tag>
  );
}


