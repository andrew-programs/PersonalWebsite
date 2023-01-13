document.addEventListener("DOMContentLoaded", () => {
  const htmlEditor = document.getElementById('html-editor');
  const styleEditor = document.getElementById('css-editor');
  const scriptEditor = document.getElementById('js-editor');
  const output = document.getElementById('code-output');
  const style = document.getElementById('style-output');
  const script = document.getElementById('script-output');

  htmlEditor.addEventListener('keydown', (e) => {
    output.innerHTML = htmlEditor.value;

    if (e.key == "Tab") {
      e.preventDefault();

    };
  });

  htmlEditor.addEventListener('keyup', () => {
    output.innerHTML = htmlEditor.value;
  });

  styleEditor.addEventListener('keydown', (e) => {
    style.innerHTML = styleEditor.value;

    if (e.key == "Tab") {
      e.preventDefault();

    };
  });

  styleEditor.addEventListener('keyup', () => {
    style.innerHTML = styleEditor.value;
  });

  scriptEditor.addEventListener('keydown', (e) => {
    script.innerHTML = scriptEditor.value.replace(/\n/g, "");

    if (e.key == "Tab") {
      e.preventDefault();

    };
  });

  scriptEditor.addEventListener('keyup', () => {
    script.innerHTML = scriptEditor.value.replace(/\n/g, "");
  });
});