var expect = require("chai").expect;
var AsTimeStamp = require("../timestamp").AsTimeStamp,
        UTCTime         = require("../timestamp").UTCTime;

describe("tests", function () {
    it("must return timestamp ie., milliseconds", function () {
        expect(asTimeStamp(new Date())).to.be.a("number");
    });

    it("must return UTC string", function () {
        var timeInMilliseconds = new Date().getTime();
        var utctime = new Date(timeInMilliseconds);
        expect(utcTime(timeInMilliseconds)).to.deep.equal(utctime);
    });
});