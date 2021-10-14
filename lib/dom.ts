export function copyTextToClipboard(text: string) {
  // create input text and append to body
  const input = document.createElement('input');

  input.value = text;

  document.body.appendChild(input);

  // select the text field
  input.select();
  input.setSelectionRange(0, 99999); // for mobile devices

  // copy
  let copied;

  try {
    navigator.clipboard.writeText(text);
    copied = true;
  } catch (err) {
    console.error('Error on copy text to clipboard:', err);
    copied = false;
  }

  // remove from body
  document.body.removeChild(input);

  return copied;
}

export function checkIsTouchScreen() {
  return 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;
}
