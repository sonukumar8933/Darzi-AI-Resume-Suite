import { cn } from "@/lib/utils";

export const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 120 120"
      className={cn("animate-rotate", className)}
    >
      <path
        fill="currentColor"
        className="animate-morph"
        d="M60,10 C87.6,10 110,32.4 110,60 C110,87.6 87.6,110 60,110 C32.4,110 10,87.6 10,60 C10,32.4 32.4,10 60,10 Z"
      />
    </svg>
  );
};
