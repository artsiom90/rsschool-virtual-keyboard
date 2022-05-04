const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

const title = document.createElement('h1');
title.innerHTML = 'Virtual Keyboard';
title.classList.add('title');
wrapper.append(title);

const textArea = document.createElement('textarea');
textArea.classList.add('text-input-area');
textArea.id = 'text-area';
textArea.cols = 50;
textArea.rows = 5;
wrapper.append(textArea);
