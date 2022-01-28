
export default function Logo() {
    return (
        <div className={`
            flex flex-col items-center justify-center
            bg-white h-14 w-14 rounded-full
        `}>
            <div className="rounded-full bg-red-600 h-3 w-3"></div>
            <div className="flex space-x-1">
                <div className="rounded-full bg-yellow-600 h-3 w-3"></div>
                <div className="rounded-full bg-green-600 h-3 w-3"></div>
            </div>
        </div>
    )
}
