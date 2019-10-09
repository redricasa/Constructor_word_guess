function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.correct = function(){
        if (this.letter = letter){
            return this.letter;
        }else{
            return "-"
        }
    } 
    this.char = function(l){
        if(l = this.letter){
            return this.guessed = true;
        }else{
            return this.guessed = false;
        }
    }
}