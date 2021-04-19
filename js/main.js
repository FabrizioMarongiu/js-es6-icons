
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

/*
Partendo dalla seguente struttura dati (allegata sotto) , mostriamo in pagina tutte le icone disponibili
*/

// const place = document.querySelector('.icons');
// printIcons(icons, place);


/*Coloriamo le icone per tipo*/

const colors = ['#00b7ff', '#b572e2', '#af831a'];

let typeIcons = typeFunction(icons); 



console.log(typeIcons);




// {
//     name: 'cat',
//     prefix: 'fa-',
//     type: 'animal',
//     family: 'fas',
// },



/* --------------------------------
FUNZIONI
---------------------------------*/

//FUNZIONE PER POPOLARE IL DOM CON LE ICONE
function printIcons(array, posizione){

    let html = '';

    icons.forEach((icon) => {

        const{name, prefix, type, family} = icon;

        html += `
        <div class="icon">
            <i class="${family} ${prefix}${name}"></i>
            <div class="title">${name}</div>
        </div>`;
    });

console.log(html);
place.innerHTML = html;


};


// FUNZIONE PER CREARE UN ARRAY CONTENENTE I TIPI DI ICONA

function typeFunction(array){

    const typeIcons = [];

    icons.forEach((icon) =>{

        if(!typeIcons.includes(icon.type)){
            typeIcons.push(icon.type);
        }
    
    });

    return typeIcons;

};