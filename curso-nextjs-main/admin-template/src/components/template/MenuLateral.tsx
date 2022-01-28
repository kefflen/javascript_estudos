import { IconAdjustments, IconBell, IconHome, IconLogout } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";


export default function MenuLateral(props) {
    return (
        <aside className={`flex flex-col
            dark:bg-gray-900 dark:text-gray-200
            `}>
            <div className={`
                h-20 w-full
                bg-gradient-to-r from-indigo-500 to-purple-800
                flex justify-center items-center
            `}>
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconHome}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconAdjustments}/>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconBell}/>
            </ul>
            <ul>
                <MenuItem texto="Logout" icone={IconLogout}
                    onClick={() => console.log("Logout")}
                    className={`text-red-600 dark:text-red-600 dark:hover:text-white
                        hover:bg-red-400 dark:hover:bg-red-700 hover:text-white`}/>
            </ul>
        </aside>
    )
}
