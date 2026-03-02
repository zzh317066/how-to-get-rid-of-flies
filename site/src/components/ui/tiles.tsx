import { cn } from "@/lib/utils"

interface TilesProps {
    className?: string
    rows?: number
    cols?: number
    tileClassName?: string
    tileSize?: "sm" | "md" | "lg"
}

const tileSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9 md:w-12 md:h-12",
    lg: "w-12 h-12 md:w-16 md:h-16",
}

export function Tiles({
    className,
    rows = 100,
    cols = 10,
    tileClassName,
    tileSize = "md",
}: TilesProps) {
    const rowsArray = Array.from({ length: rows })
    const colsArray = Array.from({ length: cols })

    return (
        <div
            className={cn(
                "relative z-0 flex w-full h-full justify-center",
                className
            )}
        >
            {rowsArray.map((_, i) => (
                <div
                    key={`row-${i}`}
                    className={cn(
                        tileSizes[tileSize],
                        "border-l border-primary/20 relative",
                        tileClassName
                    )}
                >
                    {colsArray.map((_, j) => (
                        <div
                            key={`col-${j}`}
                            className={cn(
                                tileSizes[tileSize],
                                "group border-r border-t border-primary/20 relative",
                                tileClassName
                            )}
                        >
                            <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-75 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
