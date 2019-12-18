export function newText(string) {
    return document.createTextNode(string);
}

export function newNode({node = 'div', childEl = null, cssClasses = []}): HTMLElement {
    const elem = document.createElement(node);
    if (childEl)
        elem.appendChild(childEl);
    cssClasses.forEach(clazz => elem.classList.add(clazz));
    return elem;
}
