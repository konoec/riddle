let number = Math.floor(Math.random() * 100) + 1
let inputNumber = document.getElementById('inputNumber')
let message = document.getElementById('message')

function review(){
    let inputNumber = parseInt(this.inputNumber.value)

    if (inputNumber < 1 || inputNumber >= 100 || isNaN(inputNumber)) {
        this.message.innerHTML = 'Please enter a number between 1 and 100'
        this.message.style.color = '#4f566b'
        this.message.style.backgroundColor = '#f8f9fa'
        return
    }

    if (inputNumber > number) {
        this.message.innerHTML = 'Too high'
        this.message.style.color = 'red'
        this.message.style.backgroundColor = '#ffebee'
    }

    if (inputNumber < number) {
        this.message.innerHTML = 'Too low'
        this.message.style.color = 'blue'
        this.message.style.backgroundColor = '#e3f2fd'
    }

    if (inputNumber === number) {
        this.message.innerHTML = 'Congratulations! You guessed the number'
        this.message.style.color = 'green'
        this.message.style.backgroundColor = '#e8f5e9'
        this.inputNumber.disabled = true
    }
}