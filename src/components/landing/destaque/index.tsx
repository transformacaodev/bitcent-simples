import Area from "../comum/Area";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg"

export default function Destaque() {
    return (
        <Area className="flex-1">
            <div className={`
                flex items-center justify-around
                h-[500px]
            `}>
                <Slogan />
                <ImagemResponsiva
                    imagem={principal}
                    className="rotate-3 hidden md:inline"
                />
            </div>
        </Area>
    )
}