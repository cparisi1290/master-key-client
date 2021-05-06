export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData // payload
    }
} 

export const resetLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }
} 