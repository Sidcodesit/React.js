
function myRender(elementName,containerName){
    const newElement = document.createElement(elementName.type)
    newElement.innerHTML = elementName.Children
    for (const properties in elementName.props) {
      newElement.setAttribute(properties,elementName.props[properties])
    }
    containerName.appendChild(newElement)

}

const Elements = {
    type: "div",
    props:{
        className:"main-box",
        id:"box"
    },
    Children: "hello my name is sid",
}

const myContainer = document.querySelector("#root")

myRender(Elements,myContainer)
