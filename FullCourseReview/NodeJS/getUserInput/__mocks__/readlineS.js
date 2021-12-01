const myMock = jest.fn();

myMock.mockReturnValueOnce(10)
module.exports = {
    createInterface: jest.fn().mockReturnValue({
        question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb(myMock())),
        close: jest.fn().mockImplementationOnce(() => undefined)
    })
}