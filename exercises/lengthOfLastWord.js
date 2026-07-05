/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()

    let wordsArr = s.split(" ")
    
    let lastWord = wordsArr[wordsArr.length-1]
    return lastWord.length
};

console.log(lengthOfLastWord("Hello World"))