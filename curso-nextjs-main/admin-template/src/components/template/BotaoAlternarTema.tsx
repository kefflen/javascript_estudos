import { IconMoon, IconSun } from "../icons";

interface BotaoAlternarTemaProps {
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return props.tema === "" ? (
        <div onClick={props.alternarTema} className={`
            hidden
            select-none sm:flex items-center rounded-full cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-700
            w-17 h-8 lg:w-26 p-1
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-yellow-600 w-6 h-6 rounded-full
            `}>
                {IconSun(5)}
            </div>
            <div className={`hidden lg:flex items-center ml-1 text-white`}>
                Light
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`
                hidden
                select-none sm:flex items-center rounded-full cursor-pointer
                justify-end
                bg-gradient-to-r from-blue-800 to-gray-900
                w-17 h-8 lg:w-26 p-1
        `}>
            <div className={`hidden lg:flex items-center mr-1`}>
                Dark
            </div>
            <div className={`
                flex items-center justify-center
                bg-white text-yellow-500 w-6 h-6 rounded-full
        `}>
                {IconMoon(5)}
            </div>
        </div>
    )
}