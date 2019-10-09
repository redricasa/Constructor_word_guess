
function Word(word) {
    // word =  'hello'
    // word.split('') > ['h','e','l','l','o']

    this.letters = word.split('').map(function(letter) {
        return new Letter(letter)
    })

}

