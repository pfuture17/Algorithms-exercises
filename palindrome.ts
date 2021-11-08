function isPalindrome(string: string) {
    string = string.toLowerCase();
    let charactersArr = string.split('');
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let lettersArr: [] = [];
    charactersArr.forEach((char) => {
        if (validCharacters.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        console.log('Palindrome');
    } else {
        console.log('not a Palindrome');
    }
}

isPalindrome("Madam, I'm Adamfd");
