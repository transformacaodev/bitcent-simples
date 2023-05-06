interface MenuItemProps {
    children: any
    onClick?: () => void
    className?: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <button className={`
            flex justify-center items-center cursor-pointer
            text-zinc-300 m-2 p-4 rounded-md h-9
            ${props.className ?? ''}
        `} onClick={props.onClick}>
            {props.children}
        </button>
    )
}