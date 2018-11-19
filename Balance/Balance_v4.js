var slider = document.getElementById("myRange");
var entryArray = new Array();

//define function when hitting the Submit button
function enter()
{
  var entry = slider.value;
  var dateNow = new Date();
  entryArray[entryArray.length] = [entry, dateNow];
}

//define descriptive statistic functions
var sum = function(array)
{
  var total = 0;
  for (var i = 0; i < array.length; i++)
  {
    total += parseInt(array[i]);
  }
  return total;
};

var mean = function(array)
{
  var arraySum = sum(array);
  return arraySum / array.length;
}

//define function when hitting the Finish button
//***THIS ISN'T WORKING!!!!
function finish()
{
  var resultsTableHTML = "<table border=1>";
  for(i=0; i < entryArray.length; i++)
  {
    //change color of numbers based on input value
    var entryVal = entryArray[i][0];
    var numVal = parseInt(entryVal);
    if(numVal < 0)
    {
      entryVal = entryVal.fontcolor("purple");
    }
    else if (numVal > 0)
    {
      entryVal = entryVal.fontcolor("orange");
    }
    else
    {
      entryVal = entryVal.fontcolor("black");
    }
    //Adds a row of values
    resultsTableHTML += ("<tr><td>" + entryVal + "</td><td>" + entryArray[i][1] + "</td></tr>");
  }
  resultsTableHTML += "</table>";
  document.getElementById("results").innerHTML += resultsTableHTML
  //Make Math Array (of just inputs) to calculate mean
  var mathArray = new Array();
  for(var i = 0; i < entryArray.length; i++)
  {
    mathArray[i] = entryArray[i][0];
  }
  //Make mean color vary based on value > 0, < 0, = 0.
  var avg = mean(mathArray).toString();
  if(mean(mathArray) < 0)
  {
    avg = avg.fontcolor("purple");
  }
  else if (mean(mathArray) > 0)
  {
    avg = avg.fontcolor("orange");
  }
  else
  {
    avg = avg.fontcolor("black");
  }

  document.getElementById("results").innerHTML += ("<p><b class='highlight'> <font color='navy'>Mean: </font>" + avg + "</b></p>");
};
