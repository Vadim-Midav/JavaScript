const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

function generatePassword(length) {
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);

        password += charset[randomIndex];
    }

    return password;
}

console.log(generatePassword(4));
console.log(generatePassword(8));