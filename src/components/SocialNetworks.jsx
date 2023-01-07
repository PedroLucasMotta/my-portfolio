import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { 
        name: 'linkedin', 
        link: 'https://www.linkedin.com/in/pedro-lucas-alcantara-da-motta-18b37a165/', 
        icon: <FaLinkedinIn /> 
    },
    { 
        name: 'github', 
        link:'https://www.github.com/PedroLucasMotta', 
        icon: <FaGithub /> 
    },
    { 
        name: 'instagram', 
        link: 'https://www.instagram.com/PedroLucasMotta', 
        icon: <FaInstagram/> 
    }
]

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) =>(
            <a 
                href={network.link} 
                className='social-btn' 
                id={network.name} 
                key={network.name} 
                target="_blank">
                    {network.icon}
            </a>
        ))}
    </section>
}

export default SocialNetworks