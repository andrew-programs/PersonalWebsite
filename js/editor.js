document.addEventListener("DOMContentLoaded", () => {
  const htmlEditor = document.querySelector('#html-editor');
  const styleEditor = document.querySelector('#css-editor');
  const scriptEditor = document.querySelector('#js-editor');
  const output = document.querySelector('#html-output');
  const style = document.querySelector('#css-output');
  const script = document.querySelector('#js-output');

  htmlEditor.addEventListener('keydown', (e) => {
    output.innerHTML = htmlEditor.value;

    if (e.key === 'Tab') {
      e.preventDefault();
    };
  });

  htmlEditor.addEventListener('keyup', () => {
    output.innerHTML = htmlEditor.value;
  });

  styleEditor.addEventListener('keydown', (e) => {
    style.innerHTML = styleEditor.value;

    if (e.key === 'Tab') {
      e.preventDefault();

    };
  });

  styleEditor.addEventListener('keyup', () => {
    style.innerHTML = styleEditor.value;
  });

  scriptEditor.addEventListener('keydown', (e) => {
    script.innerHTML = scriptEditor.value.replace(/\n/g, "");

    if (e.key === 'Tab') {
      e.preventDefault();

    };
  });

  scriptEditor.addEventListener('keyup', () => {
    script.innerHTML = scriptEditor.value.replace(/\n/g, "");
  });
});