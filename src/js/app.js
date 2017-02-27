var przedmioty = [
  "mat",
  "inf",
  "fiz",
  "pol",
  "esp",
  "wf",
  "wych",
  "rel",
  "his",
  "ang",
  "rob",
  "prinf"
];
var godziny = ["07:15","08:00","8:50","9:40","10:35","11:30","12:35","13:35","14:25","15:15","16:05","16:50"];
var lekcje = [
  [[3, 4, 0], [4, 4, 0], [5, 40, 1], [6, 45, 2], [7, 19, 3]],
  [[3, 46, 6], [4, 32, 7], [5, 4, 0], [6, 29, 8], [7, 5, 9], [8, 5, 9], [9, 0, 5], [10, 40, 10], [11, 40, 10]],
  [[2, 45, 2], [3, 40, 1], [4, 4, 0], [5, 4, 0], [6, 29, 8], [7, 47, 4], [8, 47, 4], [9, 40, 11], [10, 40, 11], [11, 40, 11]],
  [[2, 4, 0], [3, 4, 0], [4, 49, 9], [5, 40, 1], [6, 19, 3], [7, 19, 3], [8, 45, 2]],
  [[3, 0, 5], [4, 0, 5], [5, 19, 3], [6, 45, 2], [7, 32, 7]]
];
var UI = require('ui');
var Vector2 = require('vector2');
var weekday = new Date().getDay();
if (new Date().getHours() > 15)
  weekday++;
if (weekday === 5 || weekday === 0)
  weekday = 1;

weekday--;
weekday %= 5;

var menu = new UI.Menu({
  sections: [{
    items: [
      {title: 'Poniedziałek'},
      {title: 'Wtorek'},
      {title: 'Środa'},
      {title: 'Czwartek'},
      {title: 'Piątek'},
    ]
  }]
});

var main;

function rebuild() {
  main = new UI.Window({
  scrollable: true,
});
  for (var i = 0; i < lekcje[weekday].length; i++) {
    var element = new UI.Text({position: new Vector2(0, 20*i), size: new Vector2(144, 18), font: 'gothic-18-bold', text: godziny[lekcje[weekday][i][0]] + ": " + przedmioty[lekcje[weekday][i][2]] + " s" + lekcje[weekday][i][1]});
    main.add(element);
  }
  main.show();
}

menu.on('select', function(e) {
  weekday = e.itemIndex;
  rebuild();
});
menu.selection(0, weekday);

menu.show();