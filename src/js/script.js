const numbers = document.querySelectorAll('.progress')
const counters = Array(numbers.length);
const intervals = Array(counters.length);
const icon = document.querySelector('.bx-moon')
const icon2 = document.querySelector('.bx-sun')
const body = document.querySelector('body')
counters.fill(0)


numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
        if(counters[index] === parseInt(number.dataset.num)){
            clearInterval(intervals[index])
        }else 
        counters[index] += 1
        number.textContent = counters[index] + "%"
        console.log(counters[index])
    }, 26)
});


icon.addEventListener('click', () => {
    if(body.getAttribute('data-mode') === 'light'){
        body.setAttribute('data-mode', 'dark')
        icon.classList.add('show')
        icon2.classList.remove('show')
    }
})
icon2.addEventListener('click', () => {
    if(body.getAttribute('data-mode') === 'dark'){
        body.setAttribute('data-mode', 'light')
        icon.classList.remove('show')
        icon2.classList.add('show')
    }
})



const person = {
    id: 3,
    name: 'downia',
    age: 47,
}

person.id = 55


const bazyl = person.id


console.log(bazyl)