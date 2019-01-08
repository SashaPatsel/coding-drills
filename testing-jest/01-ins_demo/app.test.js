var app = require("./app")

describe("test add", function() {
    test("two different numbers", function() {
        expect(app.add(2, 3)).toBe(5)
    })
    
    test("two identical numbers", function() {
        expect(app.add(8,8)).toBe(16)
    })
})
