const encrypt = require('./encrypt.js');
const decrypt = require('./decrypt.js')

const plaintext = 'Noah Stallinger arbeitet mit Paul Schützeneder auf Markus Stadler\'s Laptop!';
const secret = 'NoahPaulMarkus';

console.log("Der verschlüsselte Text lautet:");
const ciphertext = encrypt(secret, plaintext);

console.log("\nDer wieder entschlüsselte Text lautet:");
decrypt(ciphertext, secret);