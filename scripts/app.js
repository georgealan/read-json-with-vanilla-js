let main = document.getElementById('container') // Container principal na estrutura HTML, onde os boxes serão inseridos

/*
ESTRUTURA HTML QUE IRÁ SER GERADA DINAMICAMENTE:

<div class="box-container">
    <img class="img" src="/images/work-1.webp">
    <div class="text-container">
        <p>Working On</p>
        <h2>MockUp Mobile App</h2>
        <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.</p>
        <div class="tags-container">
            <span class="tag">JAM Stack</span>
            <span class="tag">Node JS</span>
        </div>
        <div class="btn-boxe">
            <button class="btn">I</button>
            <button class="btn">X</button>
        </div>
    </div>
</div>
*/

function createEventListener() {
    fetch('content.json').then((response) => { // Lendo o arquivo json
        response.json().then((data) => {
            data.contents.map((content) => { // Tem que fazer o .map() porque o json é um array com vários objetos dentro
                
                // Criando as tags HTML
                let divContainer = document.createElement('div')
                let image = document.createElement('img')
                image.setAttribute('src', content.image)
                let divTextContainer = document.createElement('div')
                let status = document.createElement('p')
                let textStatus = document.createTextNode(content.status)
                let header = document.createElement('h2')
                let textHeader = document.createTextNode(content.title)
                let bodyContent = document.createElement('p')
                let textBodyContent = document.createTextNode(content.text)
                let spanContainer = document.createElement('div')
                let btnsContainer = document.createElement('div')
                let btnOne = document.createElement('button')
                let textBtnOne = document.createTextNode('Y')
                let btnTwo = document.createElement('button')
                let textBtnTwo = document.createTextNode('X')

                /* Adicionando as classes CSS nas tags criadas acima */
                divContainer.classList.add('box-container')
                image.classList.add('img')
                divTextContainer.classList.add('text-container')
                bodyContent.classList.add('text')
                spanContainer.classList.add('tags-container')
                btnsContainer.classList.add('btn-boxe')
                btnOne.classList.add('btn')
                btnTwo.classList.add('btn')

                // Fazendo a organização da estrutura, inserindo as tags dentro uma da outra de acordo como a estrutura foi pensada.
                divContainer.appendChild(image)
                status.appendChild(textStatus)
                divTextContainer.appendChild(status)
                header.appendChild(textHeader)
                divTextContainer.appendChild(header)
                bodyContent.appendChild(textBodyContent)
                divTextContainer.appendChild(bodyContent)
                
                /* Iterando o objeto que está dentro de outro objeto na estrutura do json, tem que fazer loops de 
                iteração quando uma estrutura possui uma coleção. Só olhar no .json que vai ver a estrutura desse
                atributo tags que é um objeto com outros atributos. E para pegar todos os valores fazemos um 
                loop. Como as tags são dados variáveis que você não sabe quantas tags uma box vai ter, esses dados 
                precisam ser capturados dinamicamente em um loop.*/
                for(let x in content.tags) {
                    let span = document.createElement('span')
                    let textSpan = document.createTextNode(content.tags[x])
                    span.classList.add('tag')
                    span.appendChild(textSpan)
                    spanContainer.appendChild(span)
                    divTextContainer.appendChild(spanContainer)
                }

                // Continuando fazendo os appends das tags restantes
                btnOne.appendChild(textBtnOne)
                btnsContainer.appendChild(btnOne)
                btnTwo.appendChild(textBtnTwo)
                btnsContainer.appendChild(btnTwo)
                divTextContainer.appendChild(btnsContainer)
                divContainer.appendChild(divTextContainer)    

                // E por fim realizamos o append final que é inserir a box completa dentro da tag main
                main.appendChild(divContainer)
            })
        })
    })
}

// Escuta o evento toda vez que é feito onload no browser
window.onload = function() { 
    createEventListener();
}
