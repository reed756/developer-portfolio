const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const newContent = document.createElement('p');
newContent.classList.add('newContent');
newContent.textContent = 'Hey I’m red!';
newContent.style.color = 'red';

container.appendChild(newContent);

const newNewContent = document.createElement('h3');
newNewContent.classList.add('newNewContent');
newNewContent.textContent = 'I’m a blue h3!';
newNewContent.style.color = 'blue';

container.appendChild(newNewContent);

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.style.cssText = 'border: black; background: pink';

const newDivH = document.createElement('h1');
newDivH.classList.add('newDivH');
newDivH.textContent = 'I’m in a div';

newDiv.appendChild(newDivH);

const newDivP = document.createElement('p');
newDivP.classList.add('newDivP');
newDivP.textContent = 'ME TOO!';

newDiv.appendChild(newDivP);

container.appendChild(newDiv);

btn.addEventListener('click', alertFunction);