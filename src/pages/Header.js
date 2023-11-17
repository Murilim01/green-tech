import React from 'react';
import Headering from './images greentech/MicrosoftTeams-image.png';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <header>
            <form>

                <input type="text" placeholder="Digite sua pesquisa" />



                <button type="submit"><FaSearch className="search-icon" /> Pesquisar</button>

            </form>
            <div className='imagem'>
                <img src={Headering}></img>
            </div>
        </header>
    );
};
    
export default Header;