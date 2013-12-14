module.exports.throwIf = function (message, conditional) {
  if (!!conditional) {
    throw new Error(message);
  }
};

module.exports.throwUnless = function (message, conditional) {
  if (!conditional) {
    throw new Error(message); 
  };
};
