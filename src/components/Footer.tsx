import { Link } from 'react-router-dom';
import  styles  from './footer.module.css';

//Assets
import PokemonPic from '../assets/assets/pikachu.png';
import LocationPic from '../assets/assets/pointer.png';
import ItemPic from '../assets/assets/pokeball.png';


const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <Link to="/pokemons" className={styles.footerLink}>
                <img src={PokemonPic} alt="Imagen pikachu" className={styles.footerIcon}/>
            </Link>
            <Link to="/pokemons" className={styles.footerLink}>
                <img src={LocationPic} alt="Imagen location" className={styles.footerIcon}/>
            </Link>
            <Link to="/pokemons" className={styles.footerLink}>
                <img src={ItemPic} alt="Imagen Pokebal" className={styles.footerIcon}/>
            </Link>
        </footer>
    );
};

export default Footer;
