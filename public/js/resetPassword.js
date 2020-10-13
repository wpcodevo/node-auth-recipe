/* eslint-disable */
const resetPasswordForm = document.querySelector('.resetPassword__form')


const resetPasswordHandler =async (password,passwordConfirm)=>{
    const token = window.location.pathname.split('/')[2]
    try {
        const res = await axios({
            method: 'PATCH',
            url: `/api/v1/users/resetPassword/${token}`,
            data: {password,passwordConfirm}
        })

        if(res.data.status === 'success'){
            window.setTimeout(()=>{
                location.assign('/recipes')
            },2000)
            SimpleNotification.success({title: '',text: 'You have successfully changed your passwords!'})
            SimpleNotification.options({duration: 2000})
        }
    } catch (error) {
    SimpleNotification.error({title: '',text: `${error.response.data.message}`})
    }   
    }

     if(resetPasswordForm)
    resetPasswordForm.addEventListener('submit', e=>{
        e.preventDefault()
        const password = resetPasswordForm.password.value
        const passwordConfirm = resetPasswordForm.passwordConfirm.value
        resetPasswordHandler(password,passwordConfirm)
    })