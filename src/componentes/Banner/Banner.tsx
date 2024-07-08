import './Banner.css'


interface BannerProps{
    enderecoImagem: string
    textoAlt?: string

}
// JSX
export const Banner = ({enderecoImagem, textoAlt}:BannerProps) => {
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlt}/>
        </header>
    )
}

export default Banner