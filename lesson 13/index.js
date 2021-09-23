const submitBtn = document.querySelector('#check-btn');
const userWord = document.querySelector('#user-word-input');

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

submitBtn.addEventListener('click', () => {
    const word = userWord.value.trim();
    if (word) {
        alert(`${word} ${isPalindrome(word) ? 'is a palindrome' : 'isn\'t a palindrome'}`);
    } else {
        alert('Input is empty!');
    }
})
