export function hasClass(elem, elemClass) {
    return elem.className.split(/\s+/).includes(elemClass);
}

export function addClass(elem, elemClass) {
    if (!hasClass(elem, elemClass)) {
        elem.className = (elem.className + ' ' + elemClass).trim();
    }
}

export function removeClass(elem, elemClass) {
    elem.className = elem.className
        .split(/\s+/)
        .filter((c) => c && c !== elemClass)
        .join(' ');
}

export function toggleClass(elem, elemClass) {
    if (hasClass(elem, elemClass)) {
        removeClass(elem, elemClass);
    } else {
        addClass(elem, elemClass);
    }
}
