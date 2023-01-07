import { AiFillPhone, AiTwotoneMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(22)99914-2931</p>
            </div>
        </div>
        <div className="info-card">
            <AiTwotoneMail id="email-icon" />
            <div>
                <h3>E-Mail</h3>
                <p id='mail-text'>pedrolucasamotta0@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Nova Friburgo, RJ</p>
            </div>
        </div>
    </section>
}

export default InformationContainer