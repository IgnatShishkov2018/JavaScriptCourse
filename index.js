
//                                Задание 1
{
  function TrueOrFalse(one, two) {
    if (one>two) {
      return true;

    } else {
      return false;
    }
  }
}
//                                Задание 2
{
  function ReturnString(str) {

    var YourString = "Вы ввели " + str;
    return YourString;
  }
}
//                                Задание 3
{
  function Checking(call){
    if (call === null || call === undefined) {
      return call;
    }
    else {console.log("Choose another option");
    }
  }
}
//                                Задание 4
{
  function AddFieldChecked(object){
    object.checked = true;
  }
}
//                                Задание 5
{
  function WriteNumber(number) {
    for (var i = 0; i < number; i++) {
      console.log(i);
        }
    for(var j = number; j>=0; j--){
            console.log(j);
        }
    }
}
