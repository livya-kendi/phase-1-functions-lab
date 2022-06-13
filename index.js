function distanceFromHqInBlocks(someValue) {
    if (someValue > 42){
    return someValue - 42;
    }
    else 
    {return 42 - someValue;}
  }
function distanceFromHqInFeet(someValue){
   return distanceFromHqInBlocks(someValue) * 264
}
function distanceTravelledInFeet(start, destination) {
  if (start < destination){
    return (destination - start) * 264
  }
  else (start > destination) 
    {
      return (start - destination) * 264
  }
}
function calculatesFarePrice(start, destination) {
  const someValue =  distanceTravelledInFeet(start, destination)
  if (someValue < 400){
    return 0;
  }
  else if (someValue > 400 &&  someValue < 2000){
    return 0.02 * (someValue-400);
  }
  else if (someValue > 2000 && someValue < 2500){
    return 25;
  }
  else if (someValue > 2501){
    return 'cannot travel that far';
  }
}
