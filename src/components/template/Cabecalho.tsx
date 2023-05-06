import BoasVindas from "./BoasVindas"
import InfoUsuario from "./InfoUsuario"

export default function Cabecalho() {
    return (
        <div className={`
            flex justify-between items-center
            p-7 border-b border-zinc-900
        `}>
            <BoasVindas />
            <InfoUsuario />
        </div>
    )
}