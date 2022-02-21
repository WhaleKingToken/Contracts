const WhaleKing = artifacts.require("WhaleKing");

module.exports = function (deployer) {
  deployer.deploy(WhaleKing, "DogeKing", "DogeKing", "0xCAEDa0Ab7f9aCFe0824c65ebA089f0a6d393724f", "0x8e268141DaF54aA1fcdB5574A72feB0eC2fC3970");
};
