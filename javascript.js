const generateBtn = document.getElementById('generate');
const passwordText = document.getElementById('password');
const copyBtn = document.getElementById('copy');

function generatePassword() {
  const length = document.getElementById('length').value;
  const lowercase = document.getElementById('lowercase').checked;
  const uppercase = document.getElementById('uppercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;

  let characters = '';
  if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers) characters += '0123456789';
  if (symbols) characters += '!@#$%^&*()_-+=';

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordText.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordText.value);
  alert('Password copied to clipboard!');
});


    