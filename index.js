/* TODO: add timezone support*/
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let timezone;




function Today = function(options){
	if(options.timeZone){
	timezone =  options.timezone;
	}

}

Today.prototype.isToday = (day) => {
  if(!day){
  return false
  }
  if (typeof day === "string"){
    return DAYS[Date.getDay()].toUpperCase() === day.toUpperCase();
   } else {
      return DAYS[Date.getDay()] === day;
   }	
}


Today.prototype.currentDay = () =>{
  return DAYS[Date.getDay()];
}


module.exports = Today;
