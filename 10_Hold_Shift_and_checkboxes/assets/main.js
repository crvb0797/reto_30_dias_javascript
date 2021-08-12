const checkboxes = document.querySelectorAll('.input input[type="checkbox"]')

let lastChecked;

function handleCheck(event){
    let inBetween = false;
    if(event.shiftKey && this.checked){
checkboxes.forEach(checkbox => {
    console.log(checkbox);
    if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('¡Comenzando a comprobarlos en el medio!');
    }
    if(inBetween){
        checkbox.checked = true;
    }
});
    }
    lastChecked = true;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))