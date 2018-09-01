
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function DateTime(){

let date = new Date();
let Actual_day;
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

if(day == 1 || day == 21 || day == 31){
  Actual_day = `${day}st`;
}else if(day == 2 || day == 22){
  Actual_day = `${day}nd`;
}else if(day == 3 || day == 23){
  Actual_day = `${day}rd`;
}else{
  Actual_day = `${day}th`;
}

return `${Actual_day} ${MONTHS[dat.getMonth()]} ${dat.getFullYear()}`;

}

module.exports = DateTime;
