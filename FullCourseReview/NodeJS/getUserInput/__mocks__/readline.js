module.exports = {
    createInterface: jest.fn().mockReturnValue({
        question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb('5')),
        close: jest.fn().mockImplementationOnce(() => undefined)
    })
}