module.exports = function toReadable (num) {
  let simpleNum = {
  	  0 : '',
    1 : 'one', 
    2 : 'two', 
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six', 
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
  }; 
    
  let teenNum = {
      10 : 'ten',
      11 : 'eleven',
      12 : 'twelve',
      13 : 'therteen',
      14 : 'fourteen',
      15 : 'fifteen',
      16 : 'sixteen',
      17 : 'seventeen',
      18 : 'eighteen',
      19 : 'nineteen',
  }
  
  let decadeNum = {
    2 : 'twenty',
    3 : 'therty',
    4 : 'fourty',
    5 : 'fifty',
    6 : 'sixty',
    7 : 'seventy',
    8 : 'eighty',
    9 : 'ninety',
  }
  
  let result = 'zero'
  
  if (num === 0) return result;
  
  if (num < 100)    result = less99(num)
    
  function less99(num) {
      if (num < 10) return [simpleNum[num]];
      if (num < 20) return [teenNum[num]];
      return [decadeNum[Math.floor(num / 10)], simpleNum[num % 10]];
    }
  if (num > 99){
  result = [[simpleNum[Math.floor(num / 100)], 'hundred'], [less99(num % 100)]];}
  
  return result.flat(Infinity).join(' ').trim()
}
