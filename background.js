const iframe = document.getElementsByTagName('iframe')[0],
  textArea = iframe.contentWindow.document.body,
  after = document.getElementsByClassName('style_container__1qOGd')[0];

let NewElement;

function insertAfter (newElement, targetElement) {
  let parent = targetElement.parentNode;

  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

textArea.addEventListener('input', () => {
  let char = textArea.innerText.slice(-1);

  if (char === ':') {
    NewElement = document.createElement('div');

    NewElement.setAttribute(
      'style',
      'position: absolute;' +
      'bottom: 48px;' +
      'height: 61px;' +
      'width: 354px;' +
      'background-color: lightgrey;' +
      'border-radius: 21px;' +
      'text-align: center;' +
      'padding-top: 16px;' +
      'display: flex;'
    );

    const emoji = ['(ง\'̀-\'́)ง', '( ͡° ͜ʖ ͡°)', '⊂(*_*⊂ )∘˚˳°', '╭(◔ ◡ ◔)/ ',];

    for (let i = 0; i <= 3; i++) {
      let child = document.createElement('div');

      child.setAttribute(
        'style',
        'width: 69px;' +
        'background-color: white;' +
        'height: 35px;' +
        'margin-left: 15px;' +
        'border-radius: 21px;' +
        'padding-top: 11px;'
      );

      child.innerText = emoji[i];

      NewElement.appendChild(child);

      child.addEventListener('click', function (e) {
        let char = textArea.innerText.slice(-1);

        if (char === ':') {
          textArea.innerText = textArea.innerText.replace(/:$/, e.currentTarget.innerText).toString();

          if (typeof NewElement !== 'undefined') {
            NewElement.remove();
          }
        }
      });
    }

    insertAfter(NewElement, after);
  } else {
    if (typeof NewElement !== 'undefined') {
      NewElement.remove();
    }
  }
});
