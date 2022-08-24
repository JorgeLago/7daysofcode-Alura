let devName
let choice
let branchTechnologic
let flag = true
let newFlag = true
let finalFlag = true
let flagLanguage = true
let languageBackChoice
let languageFrontChoice
let language
let nextStep
let learnTech

devName = prompt("Olá, DEV! Por qual nome podemos te chamar?")
alert(`É uma satisfação tê-lo(a) conosco, ${devName}.`)

while (flag) {
    choice = parseInt(prompt(`Como na Matrix, temos uma pílula vermelha, que representa o caminho BackEnd, neste caminho você irá focar na implementação das regras de negócio, autenticação, segurança, etc. E temos, a pílula azul, que representa o caminho FrontEnd, neste caminho você irá focar na parte visual da aplicação, ter boas práticas em relação à usuabilidade, tratar a responsividade da aplicação, etc. E então, ${devName}, por qual caminho você irá seguir? Digite 1 para BackEnd ou 2 para FrontEnd.`))

    switch (choice) {
        case 1:
            alert(`${devName}, você escolheu o caminho BackEnd. Para este caminho, indicamos duas linguagens de programação fantásticas: Java e C#.`)
            branchTechnologic = 'BackEnd'
            flag = false

            while (newFlag) {
                languageBackChoice = parseInt(prompt("Qual linguagem você gostaria de aprender? Digite 1 para Java ou 2 para C#."))

                switch (languageBackChoice) {
                    case 1:
                        backEndLanguage(languageBackChoice)
                        newFlag = false
                        break;
                    case 2:
                        backEndLanguage(languageBackChoice)
                        newFlag = false
                        break;
                    default:
                        alert(`${devName}, esta opção é inválida. Vamos tentar novamente!`)
                        break;
                }
            }
            break;
        case 2:
            alert(`${devName}, você escolheu o caminho FrontEnd. Para este caminho, indicamos duas tecnologias fantásticas: a biblioteca React e o framework VueJs.`)
            branchTechnologic = 'FrontEnd'
            flag = false

            while (newFlag) {
                languageFrontChoice = parseInt(prompt("Qual tecnologia você gostaria de aprender? Digite 1 para React ou 2 para VueJs."))

                switch (languageFrontChoice) {
                    case 1:
                        frontEndLanguage(languageFrontChoice)
                        newFlag = false
                        break;
                    case 2:
                        frontEndLanguage(languageFrontChoice)
                        newFlag = false
                        break;
                    default:
                        alert(`${devName}, esta opção é inválida. Vamos tentar novamente!`)
                        break;
                }
            }
            break;
        default:
            alert(`${devName}, esta opção é inválida. Vamos tentar novamente!`)
            break;
    }
}

while (finalFlag) {
    nextStep = parseInt(prompt(`${devName}, você escolheu o seu caminho, mas, precisamos refletir agora sobre nossos próximos passos. O que você irá fazer agora? Digite 1, se você vai seguir se especializando na área escolhida, ou digite 2, se você vai seguir se desenvolvendo para se tornar Fullstack.`))

    switch (nextStep) {
        case 1:
            alert(`Parabéns, ${devName}, pela escolha dos seus próximos passos. Você vai seguir se especializando na área escolhida. Torne-se um excelente profissional ${branchTechnologic} e aprofunde cada vez mais seus conhecimentos em ${language}.`)
            finalFlag = false
            break;
        case 2:
            alert(`Parabéns, ${devName}, pela escolha dos seus próximos passos. Você vai seguir se desenvolvendo para se tornar Fullstack. Domine o caminho ${branchTechnologic} por onde você começou e siga em expansão do seu horizonte de conhecimento.`)
            finalFlag = false
            break;
        default:
            alert(`${devName}, esta opção é inválida. Vamos tentar novamente!`)
            break;
    }
}

while (flagLanguage) {
    learnTech = prompt(`${devName}, tem mais alguma tecnologia que você gostaria de aprender? Se não tiver nenhuma opção, digite 'SAIR' para finalizarmos.`).toUpperCase()

    switch (learnTech) {
        case 'PYTHON':
            alert('Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.')
            break;
        case 'RUBY':
            alert('Ruby é uma linguagem de programação interpretada multiparadigma, de tipagem dinâmica e forte, com gerenciamento de memória automático, originalmente planejada e desenvolvida no Japão em 1995, por Yukihiro "Matz" Matsumoto, para ser usada como linguagem de script.')
            break;
        case 'PHP':
            alert('PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.')
            break;
        case 'ANGULAR':
            alert('Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.')
            break;
        case 'DJANGO':
            alert('Django é um framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view. Foi criado originalmente como sistema para gerenciar um site jornalístico na cidade de Lawrence, no Kansas. Tornou-se um projeto de código aberto e foi publicado sob a licença BSD em 2005')
            break;
        case 'LARAVEL':
            alert('Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC.')
            break;
        case 'SQL':
            alert('Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional')
            break;
        case 'MONGODB':
            alert('MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.')
            break;
        case 'JSON':
            alert('Em computação, JSON, um acrônimo de JavaScript Object Notation, é um formato compacto, de padrão aberto independente, de troca de dados simples e rápida entre sistemas, especificado por Douglas Crockford em 2000, que utiliza texto legível a humanos, no formato atributo-valor.')
            break;
        case 'CYPRESS':
            alert('Ele é um framework de testes, de código aberto e de fácil configuração. Totalmente baseado em uma nova arquitetura, isenta de outros frameworks de testes, o Cypress apresenta um painel próprio que exibe exatamente o que está acontecendo durante a execução dos testes.')
            break;
        case 'ROBOTFRAMEWORK':
            alert('O Robot Framework é uma estrutura genérica de automação de teste para testes de aceitação e desenvolvimento orientado a testes de aceitação. É uma estrutura de teste orientada por palavras-chave que usa a sintaxe tabular dos dados de teste.')
            break;
        case 'SELENIUM WEBDRIVER':
            alert('O Selenium WebDriver usa o próprio driver do navegador para a automação. É a forma mais moderna de interação atualmente, pois cada browser possui o seu respectivo driver, permitindo a interação entre o script de teste e o respectivo browser.')
            break;
        case 'PLAYRIGHT':
            alert('A Microsoft lançou uma nova ferramenta para testes end-to-end, o PlayWright. O Playwright permite testes confiáveis de ponta a ponta para apps baseados na web. Com uma única API é possível automatizar testes no Chromium, Firefox e WebKit. A ferramenta funciona com JavaScript e TypeScript, Python, C# e Java.')
            break;
        case 'GO LANG':
            alert('Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno.')
            break;
        case 'GO':
            alert('Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno.')
            break;
        case 'RUST':
            alert('Rust é uma linguagem de programação multiparadigma compilada desenvolvida pela Mozilla Research. É projetada para ser "segura, concorrente e prática", mas diferente de outras linguagens seguras, Rust não usa coletor de lixo. Possui suporte nativo ao WebAssembly.')
            break;
        case 'SAIR':
            flagLanguage = false
            break;
        default:
            alert(`Desculpe, não conseguimos localizar a tecnologia ${learnTech}. Você digitou corretamente?`)
            alert(`Caso tenha digitado corretamente, pesquise em https://www.google.com/search?q=${learnTech}`)
            if (window.confirm(`Você gostaria de ir para o link https://www.google.com/search?q=${learnTech}?`)) {
                window.location.href = `https://www.google.com/search?q=${learnTech}`
                flagLanguage = false
            }
            break;
    }
}


function backEndLanguage(languageBackChoice) {
    if (languageBackChoice == 1) {
        language = 'Java'
        alert(`Boa escolha, ${devName}! A linguagem Java é uma linguagem de programação bastante robusta, com uma forte tipagem, orientada a objetos e há uma diversidade de fóruns de discussão para as mais variadas dúvidas envolvendo esta linguagem.`)
    } else {
        language = 'C#'
        alert(`Boa escolha, ${devName}! A linguagem C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.`)
    }
}

function frontEndLanguage(languageFrontChoice) {
    if (languageFrontChoice == 1) {
        language = 'Biblioteca React'
        alert(`Boa escolha, ${devName}! O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.`)
    } else {
        language = 'Framework Vue.js'
        alert(`Boa escolha, ${devName}! Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.`)
    }
}
