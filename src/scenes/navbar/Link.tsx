import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../shared/types';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void    
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    console.log(`AnchorLink href: #${lowerCasePage}`);

    return (        
        <button className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300`}
        onClick={() => {
            document.getElementById(lowerCasePage)?.scrollIntoView({ behavior: 'smooth' });
            setSelectedPage(lowerCasePage)
        }}>
            {page}                
        </button>

    )
}

export default Link 