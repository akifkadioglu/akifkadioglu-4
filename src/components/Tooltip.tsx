interface TooltipProps {
    tooltip: string;
    children: any;
}

export const Tooltip: React.FC<TooltipProps> = ({ tooltip, children }) => {
    return (
        <div className="group relative flex w-24 justify-center">
            {children}
            <span className="absolute top-12 scale-0 transition-all rounded bg-gray-800 p-1.5 text-xs text-white group-hover:scale-100">
                {tooltip}
            </span>
        </div>
    )
}