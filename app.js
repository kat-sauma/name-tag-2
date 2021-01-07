const myButton = document.getElementById('send');
const inputName = document.getElementById('your-name');
const myName = document.getElementById('name');
const background = document.getElementById('sticker');
const myPronouns = document.getElementById('pronouns');
const inputPronouns = document.getElementById('your-pronouns');
const myGreeting = document.getElementById('greeting');
const font1 = document.getElementById('diva');
const font2 = document.getElementById('vintage');
const font3 = document.getElementById('minimal');


myButton.addEventListener ('click', () => {
    myName.textContent = inputName.value;
    inputName.value = '';
    myPronouns.textContent = inputPronouns.value;
    inputPronouns.value = '';
    background.style.background = '#ffadad';
    myName.style.background = '#ffd6a5';
    myPronouns.style.background = '#ffd6a5';
    myName.style.color = '#fdffb6';
    myPronouns.style.color = '#fdffb6';
    myGreeting.style.color = '#fdffb6';
});

// let cnt = 0;
// myButton.addEventListener ('click', function(){
//     let myButton = document.getElementById('');
//     myButton.innerHTML = 'Number of Entries: ("+cnt +")';
// })

font1.addEventListener ('click', () => {
    myName.style.fontFamily = 'didot, serif';
    myPronouns.style.fontFamily = 'didot, serif';
});

font2.addEventListener ('click', () => {
    myName.style.fontFamily = 'fantasy, monospace';
    myPronouns.style.fontFamily = 'fantasy, monospace';
});

font3.addEventListener ('click', () => {
    myName.style.fontFamily = 'helvetica, sans-serif';
    myPronouns.style.fontFamily = 'helvetica, sans-serif';
});

