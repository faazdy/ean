const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    const input = document.querySelector('#input')
    const btn = document.querySelector('#btn')

    if(input.value !== '2258'){
        e.preventDefault()
        input.style.borderColor = 'red'
    } 
})