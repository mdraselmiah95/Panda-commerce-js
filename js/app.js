//changing all h2 element color

const changeColor = document.getElementsByTagName('h2');
for (const h2 of changeColor) {
    h2.style.color = 'lightblue ';
}

//use id to change background color

const thirdTitle = document.getElementById('third-title');
thirdTitle.style.backgroundColor = 'rgb(255 55 134)';
thirdTitle.style.padding = '10px';
thirdTitle.style.borderRadius = '13px'

//changing style by using class name

const changeBorderRadius = document.getElementsByClassName('content-card');
for (const contentCard of changeBorderRadius) {
    contentCard.style.borderRadius = '1em';
}

//click handler

function handleClick() {
    const clickingMethod = document.getElementById('change-text');
    clickingMethod.innerText = "Go for that extra rep in these men's lightweight shoes. A breathable upper helps keep feet cool throughout your workout. The multipurpose outsole provides a grip for quick cuts and lateral moves.";
    // console.log('This is testing paragraph.')
}

//Remove Button

const sectionThreeBtn = document.getElementsByClassName('section-three-btn');
for (const btn of sectionThreeBtn) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

//button disable to active

document.getElementById('input-helper').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('btn-confirm');
    if (event.target.value == 'email') {
        deleteBtn.removeAttribute('disabled');
    } else {
        deleteBtn.setAttribute('disabled', true);
    }
})

//changing image

function onImg() {
    this.setAttribute('src', '../images/shoes/shoe-1.png');
}

function outImg() {
    this.setAttribute('src', '../images/shoes/shoe-2.png');
}

//double to change background color

function changeBackground(e) {
    e.style.backgroundColor = 'pink';
}