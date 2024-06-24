import { ComponentProps, ReactNode } from "react";

export interface BubbleButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  isActive?: boolean;
}

export function BubbleButton({ isActive, ...props }: BubbleButtonProps) {
  return (
    <button
      className={`p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 ${
        isActive ? "text-violet-400" : ""
      }`}
      {...props}
    />
  );
}
