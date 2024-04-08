const checkValidData = (email, password, name) => {
    console.log(typeof name)
    const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (typeof name != 'undefined') {
        const nameCheck = /(?=.*[a-z])/.test(name);
        if (!nameCheck) return "Name is Not Valid";
    }
    if (!emailCheck) return "Email ID is not valid";
    if (!passCheck) return "Password is Not Valid";
    return null
}

export default checkValidData