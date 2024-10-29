const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    const user = document.querySelector('#user-input')
    const pass = document.querySelector('#pass')

    if(user.value !== 'aleonmo67650' || pass.value !== 'saxhe3-sijCuv-wuhmeh'){
        e.preventDefault();
        const err = document.querySelector('#error')
        user.style.borderColor = 'red'
        pass.style.borderColor = 'red'
        error.style.display = 'block'
    } else{
        console.log('exito')
    }
})
