function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400){
    return 'This one is on me!';
  } else if(ride > 400 && ride <= 2000){
    return 'That will be twenty bucks.';
  }else if (ride >= 2001 && ride <= 2500){
    return 'I will gladly take your thirty bucks.';
  }else if (ride >= 2501){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let result;
  result = (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
        default:
          return 'Bye.';
      
  }
}