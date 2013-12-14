var test = require('tape')
  , pt = require('./power-throw');

test("pt.throwIf should throw if the conditional provided is true",
function (t) {
  t.plan(4);

  t.throws(function () {
    pt.throwIf("whoops!", true); 
  }, "throws because conditional is true");
  t.throws(function () {
    pt.throwIf("whoops!", 1 < 5); 
  }, "throw because 1 is less than 5");
  t.doesNotThrow(function () {
    pt.throwIf("whoops!", false); 
  }, "does not throw because conditional is false");
  t.doesNotThrow(function () {
    pt.throwIf("whoops!", 1 > 5); 
  }, "does not throw because 1 is not greater than 5");
});

test("pt.throwUnless should throw if the conditional provided is false",
function (t) {
  t.plan(4);

  t.throws(function () {
    pt.throwUnless("whoops!", false); 
  }, "throws because conditional is false");
  t.throws(function () {
    pt.throwUnless("whoops!", 1 > 5); 
  }, "throw because 1 is less than 5");
  t.doesNotThrow(function () {
    pt.throwUnless("whoops!", true); 
  }, "does not throw because conditional is true");
  t.doesNotThrow(function () {
    pt.throwUnless("whoops!", 1 < 5); 
  }, "does not throw because 1 is not greater than 5");
});
