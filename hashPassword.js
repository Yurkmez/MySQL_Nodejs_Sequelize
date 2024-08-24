const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);
    return hashedPassword;
}

async function checkPassword(password, hashedPassword) {
    const match = await bcrypt.compare(password, hashedPassword);
    console.log(match ? 'Passwords match' : 'Passwords do not match');
    return match;
}

// Usage
const password = 'password@sling.academy';
hashPassword(password).then((hashedPassword) => {
    // Store hashedPassword in your database

    // Should be called during login attempt
    checkPassword('wrongPassword', hashedPassword);
    // checkPassword('password@sling.academy', hashedPassword);
});
