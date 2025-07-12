const block_git = document.querySelectorAll('.git');

block_git.forEach(block => {
    block.addEventListener('mouseenter', function(){
        block.style.backgroundColor = '#000';
        const img = block.querySelector('.icon_git');
        const text = block.querySelector('.name_git');
        img.src = 'images/skills-section/white-icons/icon-git-white.svg';
        text.style.color = '#fff';  
    });
    block.addEventListener('mouseleave', function(){
        block.style.backgroundColor = '#fff';
        const img = block.querySelector('.icon_git');
        const text = block.querySelector('.name_git');
        img.src = 'images/skills-section/black-icons/icon-git.svg';
        text.style.color = '';  
    });
});

const block_js = document.querySelector('.js');
const img_js = block_js.querySelector('.icon_js');
const text_js = block_js.querySelector('.name_js');

block_js.addEventListener('mouseenter', function(){
    block_js.style.backgroundColor = '#000';
    img_js.src = 'images/skills-section/white-icons/icon-js-white.svg';
    text_js.style.color = '#fff'; 
});

block_js.addEventListener('mouseleave', function(){
    block_js.style.backgroundColor = '#fff';
    img_js.src = 'images/skills-section/black-icons/icon-js.svg';
    text_js.style.color = ''; 
});

const block_socket = document.querySelector('.socket');
const img_socket = block_socket.querySelector('.icon_socket');
const text_socket = block_socket.querySelector('.name_socket');

block_socket.addEventListener('mouseenter', function(){
    block_socket.style.backgroundColor = '#000';
    img_socket.src = 'images/skills-section/white-icons/icon-socket-white.svg';
    text_socket.style.color = '#fff'; 
});

block_socket.addEventListener('mouseleave', function(){
    block_socket.style.backgroundColor = '#fff';
    img_socket.src = 'images/skills-section/black-icons/icon-socket.svg';
    text_socket.style.color = ''; 
});

const block_sass = document.querySelectorAll('.sass');

block_sass.forEach(block => {
    block.addEventListener('mouseenter', function(){
        block.style.backgroundColor = '#000';
        const img = block.querySelector('.icon_sass');
        const text = block.querySelector('.name_sass');
        img.src = 'images/skills-section/white-icons/icon-sass-white.svg';
        text.style.color = '#fff';  
    });
    block.addEventListener('mouseleave', function(){
        block.style.backgroundColor = '#fff';
        const img = block.querySelector('.icon_sass');
        const text = block.querySelector('.name_sass');
        img.src = 'images/skills-section/black-icons/icon-sass.svg';
        text.style.color = '';  
    });
});

const block_storybook = document.querySelectorAll('.storybook');

block_storybook.forEach(block => {
    block.addEventListener('mouseenter', function(){
        block.style.backgroundColor = '#000';
        const img = block.querySelector('.icon_storybook');
        const text = block.querySelector('.name_storybook');
        img.src = 'images/skills-section/white-icons/icon-storybook-white.svg';
        text.style.color = '#fff';  
    });
    block.addEventListener('mouseleave', function(){
        block.style.backgroundColor = '#fff';
        const img = block.querySelector('.icon_storybook');
        const text = block.querySelector('.name_storybook');
        img.src = 'images/skills-section/black-icons/icon-storybook.svg';
        text.style.color = '';  
    });
});

const block_nest = document.querySelectorAll('.nest');

block_nest.forEach(block => {
    block.addEventListener('mouseenter', function(){
        block.style.backgroundColor = '#000';
        const img = block.querySelector('.icon_nest');
        const text = block.querySelector('.name_nest');
        img.src = 'images/skills-section/white-icons/icon-nest-white.svg';
        text.style.color = '#fff';  
    });
    block.addEventListener('mouseleave', function(){
        block.style.backgroundColor = '#fff';
        const img = block.querySelector('.icon_nest');
        const text = block.querySelector('.name_nest');
        img.src = 'images/skills-section/black-icons/icon-nest.svg';
        text.style.color = '';  
    });
});

const link = document.querySelectorAll(".read-more_link");

link.forEach(element => {
    element.addEventListener('mouseenter', function() {
        const img = element.querySelector('.read-more');
        img.src = 'images/projects-section/export.svg';
    });
    element.addEventListener('mouseleave', function() {
        const img = element.querySelector('.read-more');
        img.src = 'images/projects-section/Read-More.svg';
    });
});

const man_block = document.querySelectorAll('.man');
const woman_block = document.querySelector('.woman');

man_block.forEach(block => {
    block.addEventListener('mouseenter', function(){
        block.style.backgroundColor = '#000';
        const img = block.querySelector('img');
        const text = block.querySelector('p');
        const line = block.querySelector('.line');
        const name = block.querySelector('h5');
        const work = block.querySelector('h6');
        img.src = 'images/testimonial/white-icons/white-icon-man.svg';
        text.style.color = '#fff';  
        line.style.backgroundColor = '#fff';
        name.style.color = '#fff';
        work.style.color = '#fff';
    });
    block.addEventListener('mouseleave', function(){
        block.style.backgroundColor = '#fff';
        const img = block.querySelector('img');
        const text = block.querySelector('p');
        const line = block.querySelector('.line');
        const name = block.querySelector('h5');
        const work = block.querySelector('h6');
        img.src = 'images/testimonial/black-icons/man.svg';
        text.style.color = '#404040';  
        line.style.backgroundColor = '#000';
        name.style.color = '#404040';
        work.style.color = '#71717A';
    });
})

woman_block.addEventListener('mouseenter', function(){
    woman_block.style.backgroundColor = '#000';
    const img = woman_block.querySelector('img');
    const text = woman_block.querySelector('p');
    const line = woman_block.querySelector('.line');
    const name = woman_block.querySelector('h5');
    const work = woman_block.querySelector('h6');
    img.src = 'images/testimonial/white-icons/woman.svg';
    text.style.color = '#fff';  
    line.style.backgroundColor = '#fff';
    name.style.color = '#fff';
    work.style.color = '#fff';
});

woman_block.addEventListener('mouseleave', function(){
    woman_block.style.backgroundColor = '#fff';
    const img = woman_block.querySelector('img');
    const text = woman_block.querySelector('p');
    const line = woman_block.querySelector('.line');
    const name = woman_block.querySelector('h5');
    const work = woman_block.querySelector('h6');
    img.src = 'images/testimonial/black-icons/black-icon-woman.svg';
    text.style.color = '#404040';  
    line.style.backgroundColor = '#000';
    name.style.color = '#404040';
    work.style.color = '#71717A';
});