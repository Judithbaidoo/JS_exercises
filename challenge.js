const notifyByEmail = (email_address) => {
    return `Email sent to: ${email_address}`
}

const notifyByText = (phone_number) => {
    return `Text sent to: ${phone_number}`
}

const notify = (input_str, function_apply) => {
    return function_apply(input_str)
}

console.log(notify('hello@makers.tech.test',notifyByEmail))
console.log(notify('+10000000000',notifyByText))