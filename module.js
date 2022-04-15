export function getElement(selection){
    const element = document.querySelector(selection);
    if(element){
        return element
    } else {
        throw console.error('No valid selection or does not exist');
    }
}