if (Meteor.isClient) {
  Template.timeTable.rendered = function() {
    var today = new Date();
    var tooltip = today.getDate() + "." + (today.getMonth() + 1) + ".2" + (today.getYear() - 100);
    document.getElementById(String(today.getDay())).innerHTML = String(tooltip);

    for(var i = 1; i < 8; i++)
    {
      var bal = i - today.getDay();
      if(bal != 0)
      {
        var tempd = new Date();
        tempd.setDate(tempd.getDate() + bal);

        var tool = tempd.getDate() + "." + (tempd.getMonth() + 1) + ".2" + (tempd.getYear() - 100);
        document.getElementById(String(i)).innerHTML = String(tool);
      }
    }

    var days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    var day = today.getDay();
    var hour = today.getHours();
    hour = hour - 7;

    for(var j = 0; j < day; j++)
    {
      var tiles = document.getElementsByClassName(days[j]);
      if(j >= day - 1)
      {

        for(var l = 0; l < hour; l++)
        {
          tiles[l].style.backgroundColor = 'rgb(110, 110, 110)';
        }
      }
      else
      {
        for(var k = 0; k < 9; k++)
        {
          tiles[k].style.backgroundColor = 'rgb(110, 110, 110)';
        }
      }
    }

    var sme = orderList.find().fetch();
    for(var g = 0; g < sme.length; g++)
    {
      if(sme[g].date >= today)
      {
        if(sme[g].date.getDay() + today.getDay() <= 7)
        {
          var tiles = document.getElementsByClassName(days[sme[g].date.getDay() - 1]);
          tiles[sme[g].begin - 1].style.backgroundColor = 'rgb(102, 204, 255)';
          for(var o = 1; o < sme[g].dur; o++)
          {
            tiles[sme[g].begin + o - 1].style.backgroundColor = 'rgb(102, 204, 255)';
          }
        }
      }
    }
  }
}