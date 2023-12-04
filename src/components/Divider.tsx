interface DividerProps {
    text: string;
}


export const Divider: React.FC<DividerProps> = ({ text }) => {

    return <div className="flex mx-2 space-x-5 items-center">
        <hr className="w-full" />
        <span>{text}</span>
        <hr className="w-full" />
    </div>
}