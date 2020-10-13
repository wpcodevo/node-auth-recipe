/* eslint-disable */
const loginForm = document.querySelector('.login__form')
const logoutBtn = document.querySelector('.logout')

const login =async (email,password)=>{
 
 try {
     const res = await axios({
         method: 'POST',
         url: '/api/v1/users/login',
     data: {email,password} 
 })

 if(res.data.status === 'success'){
     SimpleNotification.success({title: '',text: 'Logged in successfully!'})
     window.setTimeout(()=>{
     location.assign('/recipes')
     }, 4000)
 }
 } catch (err) {
    SimpleNotification.error({title: '',text: `${err.response.data.message}`})
 }
}




const logout = async ()=>{
 try {
        const res = await axios({
            method: 'GET',
            url: '/api/v1/users/logout',
            })
            if(res.data.status === 'success'){
                SimpleNotification.success({title: '',text: `You have successfully loggout!`})
                SimpleNotification.options({duration: 2000})
                 window.setTimeout(()=>{
                 location.assign('/')
                 }, 2000)
            } 
                
    } catch (err) {
        SimpleNotification.error({title: 'error',text: `Error logging out! Try again`})
    }
}

if(loginForm)
loginForm.addEventListener('submit', e=>{
e.preventDefault()
const email = loginForm.email.value
const password = loginForm.password.value

login(email, password)
})

if(logoutBtn)
logoutBtn.addEventListener('click', logout)






