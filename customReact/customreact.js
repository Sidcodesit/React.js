
function Customrender(elementName,containerName){
    // const createElement = document.createElement(elementName.type)
    // createElement.innerHTML = elementName.Children
    // createElement.setAttribute("href", elementName.props.href)
    // createElement.setAttribute("target", elementName.props.target)
    // containerName.appendChild(createElement)

    const domElement = document.createElement(elementName.type)
    domElement.innerHTML = elementName.Children
    for (const properties in elementName.props) {
        // if (properties === "Children") continue;
    domElement.setAttribute(properties,elementName.props[properties])
    containerName.appendChild(domElement)           
        
    }
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: "click here "
}




const mainContainer = document.querySelector("#root")

Customrender(reactElement,mainContainer)