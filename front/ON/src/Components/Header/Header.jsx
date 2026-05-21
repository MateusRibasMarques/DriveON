import styles from '../Header/Header.module.css'
import Logo from '../../../Images/Logo.png'
function Header() {
  

  return (
    <>
     <header>
        <img src={Logo} alt="" />
        <ul>
            <li>seçoes</li>
            <li>veiculos</li>
            <li>Contact</li>
            <li>Conta</li>
        </ul>
     </header>
    </>
  )
}

export default Header;
