export const convertDate = (number) => {
  var myDate = new Date(number);
  console.log(myDate.getDate() + "/" + (myDate.getMonth()+1))
  return myDate.getDate() + "/" + (myDate.getMonth()+1);
};
