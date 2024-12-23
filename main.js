let chars = []

function check(){
    let counter = 0
    let text = document.getElementById('text').value
    chars = text.split("")
    charsOpposite = text.split("").reverse()
    
    for (let i = 0; i < chars.length; i++){
        if(chars[i] == charsOpposite[i]){
            counter++
        }
    }

    if(counter == chars.length){
        result.innerHTML = `Yes, ${text} is a palindrome`
    }
    else{
        result.innerHTML = `No, ${text} is a not palindrome`
    }

}