/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */
var mathjs = require("mathjs");

function ConvertHandler() {
  this.getNum = function(input) {
    let pos = 0;
    while (!input[pos].match(/[a-z]/i)) {
      ++pos;
    }
    let result = input.substring(0, pos);
    let patt = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    if (result ==="") {
      return 1 
    } else if (result.split("/").length > 2) {
      return "invalid number"
    } else {
      return mathjs.evaluate(result)
    }
  };

  this.getUnit = function(input) {
    let pos = 0;
    while (!input[pos].match(/[a-z]/i)) {
      ++pos;
    }
    let result = input.substring(pos);
     if (result === "gal" || result === "l" || result === "kg" || result === "lbs" || result === "mi" || result === "km"
        || result === "GAL" || result === "L" || result === "KG" || result === "LBS" || result === "MI" || result === "KM")
      {return result;} else {
        return "invalid unit"
      }
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit.toLowerCase()){
        case "gal": 
          result = "L"
          break;
        case "l":
          result="gal"
          break;
        case "lbs":
          result = "kg"
          break;
        case "kg":
          result = "lbs"
          break;
        case "mi":
          result = "km"
          break;
        case "km":
          result = "mi"
          break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit.toLowerCase()){
        case "gal": 
          result = "gallons"
          break;
        case "l": 
          result = "liters"
          break;
        case "lbs":
          result = "pounds"
          break;
        case "kg":
          result = "kilograms"
          break;
        case "mi":
          result = "miles"
          break;
        case "km":
          result = "kilometers"
          break;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit.toLowerCase()){
        case "gal": 
          result = initNum * galToL;
          break;
        case "l": 
          result = initNum / galToL;
          break;
        case "lbs":
          result = initNum * lbsToKg;
          break;
        case "kg":
          result = initNum / lbsToKg;
          break;
        case "mi":
          result = initNum * miToKm;
          break;
        case "km":
          result = initNum / miToKm;
          break;
    }
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum.toString() + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum.toFixed(5).toString() + " " + this.spellOutUnit(returnUnit);
    return result;
  };
}

module.exports = ConvertHandler;
