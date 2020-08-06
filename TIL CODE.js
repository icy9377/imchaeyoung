//Card 읽는 함수
if(prefix[0]==='6'){
    if(cardNumber.length >= 16 || cardNumber.length <= 19){
      if(prefix.slice(0,2) === '65' || prefix === '6011'){
        return "Discover"
    }
      else if(prefix[1] === '4'){
        if(prefix[2] === '4' || prefix[2] === '5' || prefix[2] === '6' || prefix[2] === '7' || prefix[2] === '8' || prefix[2] === '9' ){
          return "Discover"
      }
    } 
