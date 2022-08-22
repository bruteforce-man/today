/* TODO: add timezone support*/
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Check current day as user provided day
const isToday = (day) => {
  if(!day){
  return false
  }
  if (typeof day === "string"){
    return DAYS[new Date().getDay()].toUpperCase() === day.toUpperCase();
   } else {
      return new Date().getDay() === day;
   }	
}

// return current day
const currentDay = () =>{
  return DAYS[new Date().getDay()];
}

module.exports = {currentDay, isToday};
