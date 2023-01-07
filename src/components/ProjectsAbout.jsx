import BMI from '../img/bmicalculator1.png'
import BMI2 from '../img/bmicalculator2.png'
import CC from '../img/currencyconverter1.png'
import CC2 from '../img/currencyconverter2.png'
import ET from '../img/expensetracker1.png'
import ET2 from '../img/expensetracker2.png'
import WI from '../img/weatherinfo1.png'
import WI2 from '../img/weatherinfo2.png'

export const projects = [
    { 
        link: "https://bmi-calculator-pl.netlify.app/", 
        name: "Calculadora de IMC", 
        imgone: BMI, 
        imgtwo: BMI2, 
        about: "Aplicação desenvolvida em inglês, utilizando React + Typescript. IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa. O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado." 
    },
    { 
        link: "https://expense-tracker-pl.netlify.app/", 
        name: "Controlador de despesas", 
        imgone: ET, 
        imgtwo: ET2, 
        about: "Aplicação desenvolvida utilizando JavaScript, HTML e CSS. Foi desenvolvido principalmente para 'capital pessoal' para gerenciar despesas, receitas, orçamento mensal, contas, empréstimos e economias." 
    },
    { 
        link: "https://weather-information-pl.netlify.app/", 
        name: "Weather Information App", 
        imgone: WI, 
        imgtwo: WI2, 
        about: "Aplicação desenvolvida utilizando JavaScript, HTML e CSS em conjunto à AccuWeather API. Desenvolvido para a informação sobre clima e tempo de qualquer região do mundo em tempo real." 
    },
    { 
        link: "https://currency-converter-pl.netlify.app/", 
        name: "Conversor de moedas", 
        imgone: CC, 
        imgtwo: CC2, 
        about: "Aplicação desenvolvida utilizando JavaScript, HTML e CSS em conjunto ao ExchangeRate API. Fornece informações de taxa de câmbio para todas as moedas do mundo em tempo real." 
    },
]