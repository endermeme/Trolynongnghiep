
export default function IconBox(props: {
    children: React.ReactNode
}) {
    return <div className="flex flex-row gap-4 justify-center items-center">
        {
            props.children
        }
    </div>
}