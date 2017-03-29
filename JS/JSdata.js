// create object constructor
var barObject = function(name, type, hours, position) {
  this.label = name;
  this.foodType = type;
  this.hours = hours;
  this.position = position;
};

new barObject("Clyde Common", "Domestic and Foreign", "3-6pm everyday", 10);
new barObject("Imperial", "Seafood, Grill", "2-6pm everyday", 11);
new barObject("Saucebox", "Thai", "Tu-F 4:30-6:30pm, Sa 5-6:30pm", 12);
new barObject("Trifecta Tavern", "American, Karaoke", "M-Th 5-6pm, F&Su 4-6pm, Sa 4-5pm", 13);
new barObject("Tapalaya", "Southern", "4-6pm everyday", 14);
new barObject("Aalto Lounge", "Snacks, Bar", "5-7pm everyday", 15);
new barObject("Dots Cafe", "Dinner food", "M-F 2-7pm & 11pm-1am", 16);
new barObject("Slingshot", "Bar, Pub food", "M-F 3-7pm", 17);
