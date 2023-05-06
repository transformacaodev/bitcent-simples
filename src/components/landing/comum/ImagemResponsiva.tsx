import Image from "next/image"

interface ImagemResponsivaProps {
    imagem: any
    className?: string
}

export default function ImagemResponsiva(props: ImagemResponsivaProps) {
    return (
        <Image
            src={props.imagem}
            alt="Imagem"
            className={`
                w-[350px] h-[365px]
                lg:w-[550px] lg:h-[365px]
                rounded-xl object-cover
                ${props.className ?? ''}
            `}
        />
    )
}