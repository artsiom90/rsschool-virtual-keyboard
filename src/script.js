// // import './style.css';

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
for (let i = 0; i < 5; i++) keyboard.append(keyboardRow.cloneNode());

const descDiv = document.createElement('div');
descDiv.classList.add('keyboard-additional-info');
wrapper.append(descDiv);

const descSpan1 = document.createElement('span');
descSpan1.innerText = 'Operating system: Windows';
const descSpan2 = document.createElement('Span');
descSpan2.innerText = 'Language switching: Ctrl + Alt';
descDiv.append(descSpan1, descSpan2);

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
    if (keyUpClasses[i] === 'Ctrl' || keyUpClasses[i] === 'en' || keyUpClasses[i] === 'Alt') button.classList.add('keyboard-key-sm');

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
const keysClassesR3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const keyCaseUpR3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const keyCaseDownR3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
initKeyboardKeyLine(2, keysClassesR3, keyCaseUpR3, keyCaseDownR3);

// keyLine 4
const keysClassesR4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const keyCaseUpR4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'Shift'];
const keyCaseDownR4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8593', 'Shift'];
initKeyboardKeyLine(3, keysClassesR4, keyCaseUpR4, keyCaseDownR4);

// keyLine 5
const keysClassesR5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const keyCaseUpR5 = ['Ctrl', 'en', 'Alt', 'English', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];
initKeyboardKeyLine(4, keysClassesR5, keyCaseUpR5);

// change language
const keysSpan = document.querySelectorAll('span');

const byCaseDown = ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Ў', 'З', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Я', 'Ч', 'С', 'М', 'І', 'Т', 'Ь', 'Б', 'Ю'];
const byCaseUp = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'ў', 'з', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'я', 'ч', 'с', 'м', 'і', 'т', 'ь', 'б', 'ю'];
const engCaseDown = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];
const engCaseUp = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?'];

const lang = 'en';
let programmClick = false;

const changeLanguage = () => {
  switch (localStorage.getItem('lang')) {
    case 'en': {
      document.querySelector('.Space').innerHTML = 'English';
      document.querySelector('.MetaLeft').innerHTML = 'en';
      let keyIndex = 0;
      keysSpan.forEach((key) => {
        if ((key.parentElement.classList[0].startsWith('Key')
          || key.parentElement.classList.contains('Comma')
          || key.parentElement.classList.contains('Period'))
          && key.classList.contains('key-case-up')
          && !key.classList.contains('keyboard-hidden')) {
          key.innerHTML = engCaseUp[keyIndex];
          keyIndex++;
        }
        if ((key.parentElement.classList[0].startsWith('Key')
          || key.parentElement.classList.contains('Comma')
          || key.parentElement.classList.contains('Period'))
          && key.classList.contains('key-case-down')
          && !key.classList.contains('keyboard-hidden')) {
          key.innerHTML = engCaseDown[keyIndex];
          keyIndex++;
        }
      });
    }
      break;
    case 'by': {
      document.querySelector('.Space').innerHTML = 'Беларуская';
      document.querySelector('.MetaLeft').innerHTML = 'by';
      let keyIndex = 0;
      keysSpan.forEach((key) => {
        if ((key.parentElement.classList[0].startsWith('Key')
          || key.parentElement.classList.contains('Comma')
          || key.parentElement.classList.contains('Period'))
          && key.classList.contains('key-case-up')
          && !key.classList.contains('keyboard-hidden')) {
          key.innerHTML = byCaseUp[keyIndex];
          keyIndex++;
        }
        if ((key.parentElement.classList[0].startsWith('Key')
          || key.parentElement.classList.contains('Comma')
          || key.parentElement.classList.contains('Period'))
          && key.classList.contains('key-case-down')
          && !key.classList.contains('keyboard-hidden')) {
          key.innerHTML = byCaseDown[keyIndex];
          keyIndex++;
        }
      });
    }
      break;
    default:
      break;
  }
};

const switchLanguage = () => {
  const array = ['en', 'by'];
  const itemLang = array.filter((item) => item !== localStorage.getItem('lang'));
  localStorage.setItem('lang', ...itemLang);
};

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey) {
    switchLanguage();
    changeLanguage();
  }
});

document.querySelector('.MetaLeft').addEventListener('click', () => {
  switchLanguage();
  changeLanguage();
});

const initSavedLanguage = () => {
  if (programmClick) changeLanguage();
  programmClick = false;
};

document.querySelector('.Space').addEventListener('click', initSavedLanguage);

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', lang);
} else {
  programmClick = true;
  document.querySelector('.Space').click();
  document.querySelector('.Space').removeEventListener('click', initSavedLanguage);
}

const keys = document.querySelectorAll('button');
const shiftHandler = (e) => {
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
  }
};
const capsLockHandler = (e) => {
  if (e.currentTarget.classList.contains('CapsLock')) {
    document.querySelectorAll('.key-case-up').forEach((item) => (
      item.parentElement.classList[0].startsWith('Key') && item.classList.toggle('keyboard-hidden')
    ));
    document.querySelectorAll('.key-case-down').forEach((item) => (
      item.parentElement.classList[0].startsWith('Key') && item.classList.toggle('keyboard-hidden')
    ));
    e.currentTarget.classList.toggle('keyboard-key-active');
  }
};
keys.forEach((key) => key.addEventListener('mousedown', (e) => {
  shiftHandler(e);
  capsLockHandler(e);
}));

const functionalKeys = ['Backspace', 'English', 'Беларуская', 'en', 'by', 'Tab', 'Del', 'CapsLock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt'];
const typingTextHandler = () => {
  keys.forEach((item) => item.addEventListener('mousedown', (e) => {
    e.preventDefault();
    textArea.focus();
    const symbol = !functionalKeys.includes(e.currentTarget.innerText) && e.currentTarget.innerText;
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
      case 'English': {
        const cursorIndex = textArea.selectionEnd;
        let valuePart1 = textArea.value.slice(0, textArea.selectionEnd);
        const valuePart2 = textArea.value.slice(textArea.selectionEnd);
        valuePart1 += ' ';
        textArea.value = `${valuePart1}${valuePart2}`;
        textArea.selectionEnd = cursorIndex + 1;
      }
        break;
      case 'Беларуская': {
        const cursorIndex = textArea.selectionEnd;
        let valuePart1 = textArea.value.slice(0, textArea.selectionEnd);
        const valuePart2 = textArea.value.slice(textArea.selectionEnd);
        valuePart1 += ' ';
        textArea.value = `${valuePart1}${valuePart2}`;
        textArea.selectionEnd = cursorIndex + 1;
      }
        break;
      case 'en' || 'by':
        textArea.value += '';
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
    changeLanguage();
  }));
};
typingTextHandler();

const keydownHandler = () => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const cursorIndex = textArea.selectionEnd;
      let valuePart1 = textArea.value.slice(0, textArea.selectionEnd);
      const valuePart2 = textArea.value.slice(textArea.selectionEnd);
      valuePart1 += '  ';
      textArea.value = `${valuePart1}${valuePart2}`;
      textArea.selectionEnd = cursorIndex + 2;
    }

    if (e.getModifierState('CapsLock') && e.code === 'CapsLock') {
      document.querySelectorAll('.key-case-up').forEach((item) => (
        item.parentElement.classList[0].startsWith('Key') && item.classList.add('keyboard-hidden')
      ));
      document.querySelectorAll('.key-case-down').forEach((item) => (
        item.parentElement.classList[0].startsWith('Key') && item.classList.remove('keyboard-hidden')
      ));
      if (e.code === 'CapsLock') document.querySelector('.CapsLock').classList.add('keyboard-key-active');
    }

    keys.forEach((key) => {
      if (key.classList.contains(e.code)) key.classList.add('keyboard-key-active-typing');
      if (e.code === 'Space') document.querySelector('.Space').style.color = 'white';

      switch (e.code) {
        case 'ShiftLeft':
          document.querySelectorAll('.key-case-up').forEach((item) => item.classList.add('keyboard-hidden'));
          document.querySelectorAll('.key-case-down').forEach((item) => item.classList.remove('keyboard-hidden'));
          break;
        case 'ShiftRight':
          document.querySelectorAll('.key-case-up').forEach((item) => item.classList.add('keyboard-hidden'));
          document.querySelectorAll('.key-case-down').forEach((item) => item.classList.remove('keyboard-hidden'));
          break;
        default:
          break;
      }
    });
  });
};

const keyupnHandler = () => {
  document.addEventListener('keyup', (e) => {
    if (!e.getModifierState('CapsLock')) {
      document.querySelectorAll('.key-case-up').forEach((item) => (
        item.parentElement.classList[0].startsWith('Key') && item.classList.remove('keyboard-hidden')
      ));
      document.querySelectorAll('.key-case-down').forEach((item) => (
        item.parentElement.classList[0].startsWith('Key') && item.classList.add('keyboard-hidden')
      ));
      if (e.code === 'CapsLock') document.querySelector('.CapsLock').classList.remove('keyboard-key-active');
    }

    keys.forEach((key) => {
      if (key.classList.contains(e.code)) key.classList.remove('keyboard-key-active-typing');
      if (e.code === 'Space') document.querySelector('.Space').style.color = 'white';

      switch (e.code) {
        case 'ShiftLeft':
          if (document.querySelector('.CapsLock').classList.contains('keyboard-key-active')) {
            document.querySelectorAll('.key-case-up').forEach((item) => (
              item.parentElement.classList[0].startsWith('Key') && item.classList.add('keyboard-hidden')
            ));
            document.querySelectorAll('.key-case-down').forEach((item) => (
              item.parentElement.classList[0].startsWith('Key') && item.classList.remove('keyboard-hidden')
            ));
            document.querySelectorAll('.key-case-up').forEach((item) => (
              !item.parentElement.classList[0].startsWith('Key') && item.classList.remove('keyboard-hidden')
            ));
            document.querySelectorAll('.key-case-down').forEach((item) => (
              !item.parentElement.classList[0].startsWith('Key') && item.classList.add('keyboard-hidden')
            ));
          } else {
            document.querySelectorAll('.key-case-up').forEach((item) => item.classList.remove('keyboard-hidden'));
            document.querySelectorAll('.key-case-down').forEach((item) => item.classList.add('keyboard-hidden'));
          }
          break;
        case 'ShiftRight':
          if (document.querySelector('.CapsLock').classList.contains('keyboard-key-active')) {
            document.querySelectorAll('.key-case-up').forEach((item) => (
              item.parentElement.classList[0].startsWith('Key') && item.classList.add('keyboard-hidden')
            ));
            document.querySelectorAll('.key-case-down').forEach((item) => (
              item.parentElement.classList[0].startsWith('Key') && item.classList.remove('keyboard-hidden')
            ));
            document.querySelectorAll('.key-case-up').forEach((item) => (
              !item.parentElement.classList[0].startsWith('Key') && item.classList.remove('keyboard-hidden')
            ));
            document.querySelectorAll('.key-case-down').forEach((item) => (
              !item.parentElement.classList[0].startsWith('Key') && item.classList.add('keyboard-hidden')
            ));
          } else {
            document.querySelectorAll('.key-case-up').forEach((item) => item.classList.remove('keyboard-hidden'));
            document.querySelectorAll('.key-case-down').forEach((item) => item.classList.add('keyboard-hidden'));
          }
          break;
        default:
          break;
      }
    });
  });
};
const keypressHandler = () => {
  document.addEventListener('keypress', (e) => {
    e.preventDefault();
    if (e.code === 'Space') {
      const cursorIndex = textArea.selectionEnd;
      let valuePart1 = textArea.value.slice(0, textArea.selectionEnd);
      const valuePart2 = textArea.value.slice(textArea.selectionEnd);
      valuePart1 += ' ';
      textArea.value = `${valuePart1}${valuePart2}`;
      textArea.selectionEnd = cursorIndex + 1;
    }
    if (e.code === 'Enter') {
      const cursorIndex = textArea.selectionEnd;
      const valuePart1 = textArea.value.slice(0, cursorIndex);
      const valuePart2 = textArea.value.slice(cursorIndex);
      textArea.value = `${valuePart1}\n${valuePart2}`;
      textArea.selectionEnd = cursorIndex + 1;
    }
    keys.forEach((key) => {
      if (e.code !== 'Space' && e.code !== 'Enter' && key.classList.contains(e.code)) textArea.value += key.innerText;
    });
  });
};

keydownHandler();
keyupnHandler();
keypressHandler();
