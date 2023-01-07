import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/foto.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Pedro Lucas" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks />
        <InformationContainer />
        <a 
            href="https://drive.google.com/file/d/1iRFYF2eOHZ1f3x068IK-kPFyw1zLOr_c/view?usp=sharingf" 
            target="_blank"
            className="btn">
            Visualizar currículo!
        </a>
    </aside>
}

export default Sidebar