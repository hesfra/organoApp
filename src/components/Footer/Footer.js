import './Footer.css';
export const Footer = () => {
    return(
        <footer>
            <div className='icons'>
            <img src='../image/fb.png' />
            <img src="../image/tw.png" alt='tw logo'/>
            <img src="../image/ig.png" alt='ig logo'/>
            </div>
            <img className='organo' src='../image/logo.png' alt='organo logo'/>
            <p>Desenvolvido por Alura.</p>
        </footer>

    )
}