const workList = [
    {
        id: 1,
        active: true,
        img: './thumb-rodev-react.jpg',
        imgAlt: '',
        title: 'React Portfólio',
        description: 'Site em React com busca dinâmica. Exibe os últimos trabalhos que realizei.',
        url: '/',
        tech: [
            'React',
            'JavaScript',
            'HTML',
            'CSS',
            'Git'
        ]
    },
    {
        id: 2,
        active: true,
        img: './thumb-market-place.png',
        imgAlt: '',
        title: 'Store c/ CRUD',
        description: 'Market place para locação de eletrônicos. Projeto com CRUD utilizando MySQL como database. Realizado em grupo como trabalho de conclusão.',
        url: 'https://github.com/rdmoedas/projeto-grupo1/',
        tech: [
            'Node',
            'Express',
            'Sequelize',
            'MySQL',
            'Git',
            'JavaScript',
            'HTML',
            'CSS',
            'Bootstrap',
            'Kanban'
        ]
    },
    {
        id: 3,
        active: true,
        img: './thumb-front-word.jpg',
        imgAlt: '',
        title: 'World DH',
        description: 'É um site em React que consome dados de API com informações dos países, seus idiomas e duas cidades. Projeto desenvolvido durante o curso de Full Stack da Digital House.',
        url: 'https://github.com/rdmoedas/front_world',
        tech: [
            'React',
            'API',
            'JavaScript',
            'HTML',
            'CSS',
            'Git'
        ]
    },    
    {
        id: 4,
        active: true,
        img: './thumb-api_world.jpg',
        imgAlt: '',
        title: 'World API',
        description: 'É um servidor em Node.js que se conecta com um banco de dados MySQL e fornece os dados através de API pública. Projeto desenvolvido durante o curso de Full Stack da Digital House.',
        url: 'https://github.com/rdmoedas/api_world',
        tech: [
            'Node',
            'Express',
            'Sequelize',
            'MySQL',
            'API',
            'Git',
        ]
    },   
    {
        id: 5,
        active: true,
        img: './thumb-clinicaMedica.jpg',
        imgAlt: '',
        title: 'medicalClinic',
        description: 'Sistema de administração de uma pequena clínica médica, construído em Node e Express e possui CRUD com banco de dados MySQL. Projeto desenvolvido durante o curso de Full Stack da Digital House.',
        url: 'https://github.com/rdmoedas/medicalClinic',
        tech: [
            'Node',
            'Express',
            'Sequelize',
            'MySQL',
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
        ]
    }, 
    {
        id: 6,
        active: true,
        img: './thumb-convite.png',
        imgAlt: '',
        title: 'Casamento Lorem e Mussum Impsum',
        description: 'Site de convite de casamento, feito em modelo hackathon como projeto final para o curso Frontend Web Developer da Cel.lep & Facebook Estação Hack.',
        url: 'https://convite-casamento-two.vercel.app/',
        tech: [
            'JavaScript',
            'HTML',
            'CSS',
            'Bootstrap',
            'Frontend'
        ]
    },
    {
        id: 7,
        active: true,
        img: './thumb-cra.png',
        imgAlt: '',
        title: 'CRA - React',
        description: 'Pequeno projeto realizado em React para aplicar o conceito de components.',
        url: 'https://rodev-cra-rdmoedas.vercel.app',
        tech: [
            'React',
            'JavaScript',
            'Git',
            'Frontend'
        ]
    },
    {
        id: 8,
        active: true,
        img: './thumb-switch-snake.jpg',
        imgAlt: '',
        title: 'Switch Snake',
        description: 'Projeto de conclusão de Bootcamp, em que criei o jogo da cobrinha em JS e trabalhei para adaptá-lo dentro da moldura em CSS desenvolvida por Gabriela Pinheiro.',
        url: 'https://snake-snake-snakeeeee.vercel.app',
        tech: [
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
        ]
    },
    {
        id: 9,
        active: true,
        img: './thumb-mind-care2.png',
        imgAlt: '',
        title: 'Mind Care',
        description: 'Mind Care. Projeto de UI/UX. Portal feito para divulgar notícias e facilitar atendimentos com profissionais de saúde mental. Projeto realizado em grupo durante o curso UI/UX da Cel.lep & Facebook Estação Hack.',
        url: '#',
        tech: [
            'UI/UX',
            'Figma',
            'Materialize',
        ],
    },
    {
        id: 10,
        active: true,
        img: './thumb-portfolio.png',
        imgAlt: '',
        title: 'Portfolio MVP',
        description: 'Portfólio em HTML. Foi montado em HTML, CSS e Bootstrap. O versionamento foi feito pelo github, e a hospedagem foi feita pela Vercel. Foi criado utilizando o conceito de MVP.',
        url: 'https://portfolio-rodolfo.vercel.app',
        tech: [
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
            'Bootstrap',
            'Téc. Ágeis'
        ]
    },
    {
        id: 11,
        active: true,
        img: './thumb-punch-flix.jpg',
        imgAlt: '',
        title: 'Punchflix',
        description: 'Projeto desenvolvido no Bootcamp da Digital Innovation One, é um clone do Netflix.',
        url: 'https://portfolio-rodolfo.vercel.app',
        tech: [
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
            'Frontend'
        ]
    },
    {
        id: 12,
        active: true,
        img: './thumb-instaclone.jpg',
        imgAlt: '',
        title: 'Instaclone',
        description: 'Projeto desenvolvido no Bootcamp da Digital Innovation One, é um clone do Instagram',
        url: 'https://instagram-front.vercel.app',
        tech: [
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
            'Frontend'
        ]
    },
]
/*
const tecnoList = [
    'React',
    'JavaScript',
    'Node',
    'Express',
    'API',
    'MySQL',
    'MongoDB',
    'Sequelize',
    'Git',
    'Téc Ágeis',
    'Scrum',
    'Kanban',
    'HTML',
    'CSS',
    'Bootstrap',
];
*/

export default workList;