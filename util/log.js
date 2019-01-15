function log(msg){
    let container = document.createElement('p');
    container.appendChild(document.createTextNode(msg))
    document.body.appendChild(container);
    container = null;
}

export default log