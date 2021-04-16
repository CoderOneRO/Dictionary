let findWord, item, words = [];

function myFunction() {
    item = document.getElementById("b1").value;
    words.push(item);
    document.getElementById("b1").value = "";
}

function existWord() {
    findWord = document.getElementById("b2").value;
    if (words.includes(findWord)) {
        document.getElementById("print").innerHTML = "The searched word can be found in the dictionary";
        document.getElementById("b2").value = "";
    } else {
        document.getElementById("print").innerHTML = "I'm sorry, I didn't find the word in the dictionary";
        document.getElementById("b2").value = "";
    }
}