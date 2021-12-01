const { stdin, stdout } = process;
module.exports = {
    createInterface: jest.fn().mockReturnValue({
        question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('y')),
        stdin, stdout
    })
}