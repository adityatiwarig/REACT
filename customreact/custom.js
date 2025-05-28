
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)  // KIS TYPE KA HAI CREATE HOGA

    domElement.innerHTML = reactElement.children   // ANDR WO JAYEGA CHILD WALA

    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}



  //CUSTOM TARIKA HAI REACT ELEMENT BANANE KA

const reactElement = {
    type :'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google...'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)