/* eslint-disable */
const signupForm = document.querySelector('.signup__form')


const signup = async (name,email,password,passwordConfirm)=>{
 
 try {
     const res = await axios({
     method: 'POST',
     data: {name,email,password,passwordConfirm},
     url: `/api/v1/users/signup`
 })

 if(res.data.status === 'success'){
     SimpleNotification.success({title: '',text: `Welcome ${name.split(' ')[0]}, check your email!`})
     window.setTimeout(()=>{
     location.assign('/recipes')
     }, 4000)
 }
 } catch (err) {
    SimpleNotification.error({title: '',text: `${err.response.data.message}`})
 }
}

if(signupForm)
signupForm.addEventListener('submit', e=>{
e.preventDefault()
const name = signupForm.name.value
const email = signupForm.email.value
const password = signupForm.password.value
const passwordConfirm = signupForm.passwordConfirm.value

signup(name,email, password,passwordConfirm)
})








