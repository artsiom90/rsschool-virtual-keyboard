/* eslint-disable no-plusplus */
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

const title = document.createElement('h1');
title.innerHTML = 'Virtual Keyboard';
title.classList.add('keyboard-title');
wrapper.append(title);

const textArea = document.createElement('textarea');
textArea.classList.add('keyboard-textarea');
textArea.autofocus = true;
textArea.cols = 50;
textArea.rows = 5;
wrapper.append(textArea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

const keyboardRow = document.createElement('div');
keyboardRow.classList.add('keyboard-row');

for (let i = 0; i < 5; i++) {
  keyboard.append(keyboardRow.cloneNode());
}

const initKeyboardKeyLine = (
  lineIndex,
  keyClasses,
  keyUpClasses,
  keyDownClasses,
) => {
  for (let i = 0; i < keyClasses.length; i++) {
    const button = document.createElement('button');
    button.classList.add(keyClasses[i]);
    button.classList.add('keyboard-key');
    if (keyUpClasses[i] === 'Backspace') button.classList.add('keyboard-key-lg');
    if (keyUpClasses[i] === 'Tab' || keyUpClasses[i] === 'Del') button.classList.add('keyboard-key-md');
    if (keyUpClasses[i] === 'CapsLock' || keyUpClasses[i] === 'Enter') button.classList.add('keyboard-key-lg');
    if (keyUpClasses[i] === 'Shift') button.classList.add('keyboard-key-lg');
    if (keyUpClasses[i] === 'Ctrl' || keyUpClasses[i] === 'Win' || keyUpClasses[i] === 'Alt') button.classList.add('keyboard-key-sm');

    const spanCaseUp = document.createElement('span');
    spanCaseUp.classList.add('key-case-up');
    spanCaseUp.innerHTML = keyUpClasses[i];
    button.append(spanCaseUp);

    if (keyDownClasses) {
      const spanCaseDown = document.createElement('span');
      spanCaseDown.classList.add('key-case-down');
      spanCaseDown.innerHTML = keyDownClasses[i];
      spanCaseDown.classList.add('keyboard-hidden');
      button.append(spanCaseDown);
    } else {
      spanCaseUp.classList.remove('key-case-up');
    }

    keyboard.children[lineIndex].append(button);
  }
};

// keyLine 1
const keysClassesR1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const keyCaseUpR1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keyCaseDownR1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
initKeyboardKeyLine(0, keysClassesR1, keyCaseUpR1, keyCaseDownR1);

// keyLine 2
const keysClassesR2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
const keyCaseUpR2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const keyCaseDownR2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'];
initKeyboardKeyLine(1, keysClassesR2, keyCaseUpR2, keyCaseDownR2);

// keyLine 3
const keysClassesR3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'Keyf', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const keyCaseUpR3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const keyCaseDownR3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
initKeyboardKeyLine(2, keysClassesR3, keyCaseUpR3, keyCaseDownR3);

// keyLine 4
const keysClassesR4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const keyCaseUpR4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'Shift'];
const keyCaseDownR4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8593', 'Shift'];
initKeyboardKeyLine(3, keysClassesR4, keyCaseUpR4, keyCaseDownR4);

// keyLine 5
const keysClassesR5 = ['CotrolLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'CotrolRight'];
const keyCaseUpR5 = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];
initKeyboardKeyLine(4, keysClassesR5, keyCaseUpR5);

const keys = document.querySelectorAll('button');

keys.forEach((key) => key.addEventListener('mousedown', (e) => {
  if (e.currentTarget.classList.contains('ShiftLeft')
    || e.currentTarget.classList.contains('ShiftRight')) {
    document.querySelectorAll('.key-case-up').forEach((item) => item.classList.toggle('keyboard-hidden'));
    document.querySelectorAll('.key-case-down').forEach((item) => item.classList.toggle('keyboard-hidden'));
    e.currentTarget.classList.toggle('keyboard-key-active');
    if (e.currentTarget.classList.contains('ShiftLeft') && e.currentTarget.classList.contains('keyboard-key-active')) {
      document.querySelector('.ShiftRight').disabled = true;
      document.querySelector('.ShiftRight').classList.add('keyboard-key-disabled');
    } else {
      document.querySelector('.ShiftRight').disabled = false;
      document.querySelector('.ShiftRight').classList.remove('keyboard-key-disabled');
    }
    if (e.currentTarget.classList.contains('ShiftRight') && e.currentTarget.classList.contains('keyboard-key-active')) {
      document.querySelector('.ShiftLeft').disabled = true;
      document.querySelector('.ShiftLeft').classList.add('keyboard-key-disabled');
    } else {
      document.querySelector('.ShiftLeft').disabled = false;
      document.querySelector('.ShiftLeft').classList.remove('keyboard-key-disabled');
    }
    if (e.currentTarget.classList.contains('keyboard-key-active')) {
      document.querySelector('.CapsLock').disabled = true;
      document.querySelector('.CapsLock').classList.add('keyboard-key-disabled');
    } else {
      document.querySelector('.CapsLock').disabled = false;
      document.querySelector('.CapsLock').classList.remove('keyboard-key-disabled');
    }
  }

  if (e.currentTarget.classList.contains('CapsLock')) {
    document.querySelectorAll('.key-case-up').forEach((item) => (
      item.parentElement.classList[0].startsWith('Key') && item.classList.toggle('keyboard-hidden')
    ));
    document.querySelectorAll('.key-case-down').forEach((item) => (
      item.parentElement.classList[0].startsWith('Key') && item.classList.toggle('keyboard-hidden')
    ));
    e.currentTarget.classList.toggle('keyboard-key-active');
    if (e.currentTarget.classList.contains('keyboard-key-active')) {
      document.querySelector('.ShiftLeft').disabled = true;
      document.querySelector('.ShiftRight').disabled = true;
      document.querySelector('.ShiftLeft').classList.add('keyboard-key-disabled');
      document.querySelector('.ShiftRight').classList.add('keyboard-key-disabled');
    } else {
      document.querySelector('.ShiftLeft').disabled = false;
      document.querySelector('.ShiftRight').disabled = false;
      document.querySelector('.ShiftLeft').classList.remove('keyboard-key-disabled');
      document.querySelector('.ShiftRight').classList.remove('keyboard-key-disabled');
    }
  }
}));

const keysNotSymbols = ['Backspace', 'Space', 'Tab', 'Del', 'CapsLock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt'];

keys.forEach((item) => item.addEventListener('mousedown', (e) => {
  e.preventDefault();
  textArea.focus();
  const symbol = !keysNotSymbols.includes(e.currentTarget.innerText) && e.currentTarget.innerText;
  switch (e.currentTarget.innerText) {
    case symbol:
      textArea.value += symbol;
      break;
    case 'Tab': {
      const cursorIndex = textArea.selectionEnd;
      let valuePart1 = textArea.value.slice(0, textArea.selectionEnd);
      const valuePart2 = textArea.value.slice(textArea.selectionEnd);
      valuePart1 += '  ';
      textArea.value = `${valuePart1}${valuePart2}`;
      textArea.selectionEnd = cursorIndex + 2;
    }
      break;
    case 'Space': {
      const cursorIndex = textArea.selectionEnd;
      let valuePart1 = textArea.value.slice(0, textArea.selectionEnd);
      const valuePart2 = textArea.value.slice(textArea.selectionEnd);
      valuePart1 += ' ';
      textArea.value = `${valuePart1}${valuePart2}`;
      textArea.selectionEnd = cursorIndex + 1;
    }
      break;
    case 'Backspace': {
      const cursorIndex = textArea.selectionEnd;
      let valuePart1 = textArea.value.slice(0, textArea.selectionEnd);
      const valuePart2 = textArea.value.slice(textArea.selectionEnd);
      valuePart1 = valuePart1.slice(0, valuePart1.length - 1);
      textArea.value = `${valuePart1}${valuePart2}`;
      textArea.selectionEnd = cursorIndex - 1;
      if (cursorIndex === 0) {
        textArea.setSelectionRange(0, 0);
      }
    }
      break;
    case 'Del': {
      const cursorIndex = textArea.selectionEnd;
      const array = textArea.value.split('');
      array.splice(cursorIndex, 1);
      textArea.value = array.join('');
      textArea.selectionEnd = cursorIndex;
    }
      break;
    case 'Enter': {
      const cursorIndex = textArea.selectionEnd;
      const valuePart1 = textArea.value.slice(0, cursorIndex);
      const valuePart2 = textArea.value.slice(cursorIndex);
      textArea.value = `${valuePart1}\n${valuePart2}`;
      textArea.selectionEnd = cursorIndex + 1;
    }
      break;
    default:
      break;
  }
}));
