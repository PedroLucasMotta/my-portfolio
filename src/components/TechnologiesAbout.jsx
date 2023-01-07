import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiSass,
    DiBootstrap,
    DiGit
} from 'react-icons/di'

import {
    SiTypescript,
    SiStyledcomponents,
    SiTailwindcss
} from 'react-icons/si'

export const technologies = [
    { 
        id: "html", 
        name: "HTML5", 
        icon: <DiHtml5 />,
        about: "Linguagem de marcação utilizada na construção de páginas na Web.",
    },
    { 
        id: "css", 
        name: "CSS3", 
        icon: <DiCss3 />,
        about: "Mecanismo para adicionar folhas de estilos a uma página web.", 
    },
    { 
        id: "js", 
        name: "JavaScript", 
        icon: <DiJsBadge />,
        about: "Linguagem de programação interpretada estruturada.", 
    },
    { 
        id: "ts", 
        name: "TypeScript", 
        icon: <SiTypescript />,
        about: "Linguagem de programação de código aberto sendo um superconjunto sintático estrito de JavaScript.", 
    },
    { 
        id: "git", 
        name: "Git", 
        icon: <DiGit />,
        about: "Sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.", 
    },
    { 
        id: "node", 
        name: "Node.js", 
        icon: <DiNodejsSmall />,
        about: "ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma.", 
    },
    { 
        id: "mysql", 
        name: "MySQL", 
        icon: <DiMysql />,
        about: "Sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.", 
    },
    { 
        id: "react", 
        name: "React", 
        icon: <DiReact />,
        about: "Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.", 
    },
    { 
        id: "sass", 
        name: "Sass", 
        icon: <DiSass />,
        about: "Pré-processador CSS com a adição de mais recursos ao CSS básico.", 
    },
    { 
        id: "bootstrap", 
        name: "Bootstrap", 
        icon: <DiBootstrap />,
        about: "Framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.", 
    },
    { 
        id: "styledcomponents", 
        name: "Styled Components", 
        icon: <SiStyledcomponents />,
        about: "Biblioteca do React que permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript.", 
    },
    { 
        id: "tailwind", 
        name: "Tailwind CSS", 
        icon: <SiTailwindcss />,
        about: "Framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta.", 
    },
]