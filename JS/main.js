//Array di oggetti

const icons = [
    {
        name : 'cat',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : 'blue',
    },
    {
        name : 'crow',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : 'blue',
    },
    {
        name : 'dog',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : 'blue',
    },{
        name : 'dove',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : 'blue',
    },
    {
        name : 'dragon',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : 'blue',
    },
    {
        name : 'horse',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : 'blue',
    },
    {
        name : 'hippo',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : 'blue',
    },
    {
        name : 'fish',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : 'blue',
    },
    {
        name : 'carrot',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : 'orange',
    },
    {
        name : 'apple-alt',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : 'orange',
    },
    {
        name : 'lemon',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : 'orange',
    },
    {
        name : 'pepper-hot',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : 'orange',
    },
    {
        name : 'user-astronaut',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : 'purple',
    },
    {
        name : 'user-graduate',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : 'purple',
    },
    {
        name : 'user-ninja',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : 'purple',
    },
    {
        name : 'user-secret',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : 'purple',
    }
];

const container = document.getElementById('icons-container');

drawIcons(container, icons);

const selector = document.getElementById('type-filter');

selector.addEventListener('change', function() {

    let selection = this.value;

    if (selection == 'all') {
        drawIcons(container, icons);
    } else {

        let filteredIcons = icons.filter( icon => {
            if (icon.type == selection) {
                return true;
            }
            return false;
        });

        drawIcons(container, filteredIcons);
    }
});

function drawIcons(container, icons) {

    let content = '';

    icons.forEach(oggetto => {

        content += `<div class="icon">
        <i style="color: ${oggetto.color}" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
        <div class="icon-text">${oggetto.name}</div>
    </div>`;
    });

    container.innerHTML = content;

}

//genero colori random

let lettere = '0123456789ABCDEF';
let colore = '#';

function coloreRandom() {

    for (let i = 0; i < 6; i++) {
      colore += lettere[Math.floor(Math.random() * 16)];
    }
    return colore;
  }
  
// non riesco ad assegnare il colore 