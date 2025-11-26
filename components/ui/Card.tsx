import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-[2rem] border-2 border-kraft/20 shadow-sm p-6 relative overflow-hidden",
                "hover:rotate-1 transition-transform duration-300 ease-out",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
