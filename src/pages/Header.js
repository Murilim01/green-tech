import React from 'react';
import Headering from './images greentech/MicrosoftTeams-image.png';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <header>
            <form>

                <div>
                    <input type="text" placeholder="" className="search-input" />
                    <FaSearch className="search-icon" />
                    <button type="submit">Pesquisar</button>
                </div>
            </form>
            <div className='imagem'>
                <img src={Headering}></img>
            </div>
        </header>
    );
};

export default Header;