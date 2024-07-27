import { cn } from "@/lib/utils";

export default function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}) {
    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 size-full"
                >
                    <circle
                        className="stroke-black/10 stroke-1 dark:stroke-white/10"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                    />
                </svg>
            )}

            <div
                style={{
                    "--duration": `${duration}s`,
                    "--radius": `${radius}px`,
                    "--delay": `${-delay}s`,
                }}
                className={cn(
                    "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 dark:bg-white/10",
                    reverse && "animation-direction-reverse",
                    className
                )}
            >
                {children}
            </div>
        </>
    );
}
