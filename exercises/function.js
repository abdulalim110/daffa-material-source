// 1. Metric function

// Area of Rectangle

function AreaofRectangle(length, width){
    return length * width 
};

console.log(AreaofRectangle(12, 4));

// Perimeter of Rectangle
function PerimeterofRectangle(length, width){
    return 2 * (length + width) 
};

console.log(PerimeterofRectangle(12, 4));

// Volume of Cuboid

function VolumeofCuboid(length, width, height){
    return length * width * height
};

console.log(VolumeofCuboid(12, 4, 8));

// 2. Introduce
console.log("=====number 2======")

// John

function John(name, gender, occupation, age){
    const words = ["Mr.", name, "is a", gender, occupation, "who is", age, "years old"]
    return words.join(" ")
};

console.log(John("John","male","writer","30"));

// Sarah

function Sarah(name, gender, occupation, age){
    const words = ["Ms.", name, "is a", gender, occupation, "who is", age, "years old"]
    return words.join(" ")
};

console.log(Sarah("Sarah","female","model","28"));

// 3. Palindrome
console.log("=====number 3======")

function palindrome(word){
    for (let i = 0; i < word.length / 2; i++){
        if (word[i] !== word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("katak"));
console.log(palindrome("blanket"));
console.log(palindrome("nababan"));
console.log(palindrome("haji ijah"));
console.log(palindrome("mister"));

// 4. Largest Number Pair
console.log("=====number 4======")

function LNP(number){
    let str = number.toString();
    let num = 0;

    for (let i = 0; i < str.length - 1; i++){
        let pair = Number(str.slice(i, i + 2));
        if (pair > num){
            num = pair
        }
    }

    return num;
}

console.log(LNP(641573));
console.log(LNP(12783456));
console.log(LNP(910233));
console.log(LNP(71856421));
console.log(LNP(79918293));

// 5. Check Permutation
console.log("=====number 5======")
function permutation(word1, word2){
    if (word1.length !== word2.length){
        return false;
    }
    const array1 = word1.split('').sort().join('')
    const array2 = word2.split('').sort().join('')

    return array1 === array2;
}

console.log(permutation("abah", "baha"));
console.log(permutation("ondel", "delon"));
console.log(permutation("paul sernine", "arsene lupin"));
console.log(permutation("taco", "taca"));