// SYNC ACTION CREATORS
export const updateSignupForm = (formData) => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData // payload
    }
} 

export const resetSignupForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
} 
