import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';


const Sidebar = () => {
    return ( 
        <aside id="sidebar">
            <img src={Avatar} alt="Bruno Guilherme" />
            <p className="title">Desenvolvedor RPA Python</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    )
};

export default Sidebar;