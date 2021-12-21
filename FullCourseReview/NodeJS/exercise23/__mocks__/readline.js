/* Example of code that needs jest mocks
const readline = require("readline");

function getFirstPrimes() {
    const { stdin, stdout } = process;
    const rl = readline.createInterface({ input: stdin, output: stdout });
    let primeNumbers;
    rl.question('How many prime numbers do you want? ', (N) => {
        primeNumbers = computePrimes(N);
        rl.close()
    });
    return primeNumbers;
}
*/

module.exports = {
    createInterface: jest.fn().mockReturnValue({
        question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('5')),
        close: jest.fn().mockImplementationOnce(() => undefined)
    })
}