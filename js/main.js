const characterAmountNumber = document.getElementById('characterAmountNumber');
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountElement = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const passwordDisplay = document.getElementById("passwordDisplay");
const form = document.getElementById("passwordGeneratorForm");

const LOWERCASE_CHAR_CODES = arrayFromLowToHight(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHight(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHight(48, 57);
const SYMBOL_CHAR_CODES =
  arrayFromLowToHight(33, 47)
    .concat(arrayFromLowToHight(58, 64))
    .concat(arrayFromLowToHight(91, 96))
    .concat(arrayFromLowToHight(123, 126));

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

form.addEventListener('submit', e => {
  e.preventDefault();

  const charactersAmount = characterAmountElement.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(charactersAmount, includeUppercase, includeNumbers, includeSymbols);

  passwordDisplay.innerText = password;
});

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
};

function generatePassword(charactersAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

  let passwordCharacters = [];
  for (let i = 0; i < charactersAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  };

  return passwordCharacters.join('');
};

function arrayFromLowToHight(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) array.push(i);

  return array;
};