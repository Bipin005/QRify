import { HTMLAttributes } from "react";
import clsx from "clsx";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}