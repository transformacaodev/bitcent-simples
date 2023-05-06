import Area from "../comum/Area";
import Logo from "../comum/Logo";
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <Area className="bg-black ">
            <div className="flex justify-between items-center h-20">
                <Logo />
                <Menu />
            </div>
        </Area>
    )
}