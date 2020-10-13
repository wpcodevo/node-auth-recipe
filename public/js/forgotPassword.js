/* eslint-disable */
const forgotPasswordForm = document.querySelector('.forgotPassword__form')

const forgotPasswordHandler =async (email)=>{
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/forgotPassword',
            data: {email}
        })

        if(res.data.status === 'success'){
            SimpleNotification.success({title: '',text: `${res.data.message}`})
        }
    } catch (error) {
    SimpleNotification.error({title: '',text: `${error.response.data.message}`})
    }   
    }

    
if(forgotPasswordForm)
    forgotPasswordForm.addEventListener('submit', e=>{
        e.preventDefault()
        const email = forgotPasswordForm.email.value
        forgotPasswordHandler(email)
    })

    