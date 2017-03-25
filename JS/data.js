// This file sets up data for the javascript funtionality

var barArray =[];


// create object constructor
var barObject = function(name, type, hours, position) {
  this.label = name;
  this.foodType = type;
  this.hours = hours;
  this.position = position;
};


// List of barObjects
barArray.push(new barObject("Bang Bang PDX", "Thai, Wings", "5-6pm, and 9:30-midnight everyday", 1));
barArray.push(new barObject("The Knock Back", "American", "4-6pm everyday", 2));
barArray.push(new barObject("Aviary", "Japanese", "M-F 5-7pm", 3));
barArray.push(new barObject("Interurban", "American Fusion", "M-Sa 3-6pm, Su 10pm to Close", 4));
barArray.push(new barObject("Rae's Lakeveiw Lounge", "American", "2-6pm everyday", 5));
barArray.push(new barObject("Paley's Place", "Fine Dining", "M-Th 5:30-6:30pm, F-Su 5-6:30pm", 6));
barArray.push(new barObject("Bartini", "Martini Bar", "Tu-Sa 4-6:30pm 9:30-close, Su-M all day ", 7));
barArray.push(new barObject("Ringside", "Steakhouse", "M-Sa 9:30pm - Close, Su 4-5:30pm and 9:30-Close ", 8));
barArray.push(new barObject("Teardrop Lounge", "Martini Bar", "M-F 4-7pm", 9));
barArray.push(new barObject("Clyde Common", "Domestic and Foreign", "3-6pm everyday", 10));
barArray.push(new barObject("Imperial", "Seafood, Grill", "2-6pm everyday", 11));
barArray.push(new barObject("Saucebox", "Thai", "Tu-F 4:30-6:30pm, Sa 5-6:30pm", 12));
barArray.push(new barObject("Trifecta Tavern", "American, Karaoke", "M-Th 5-6pm, F&Su 4-6pm, Sa 4-5pm", 13));
barArray.push(new barObject("Tapalaya", "Southern", "4-6pm everyday", 14));
barArray.push(new barObject("Aalto Lounge", "Snacks, Bar", "5-7pm everyday", 15));
barArray.push(new barObject("Dots Cafe", "Dinner food", "M-F 2-7pm & 11pm-1am", 16));
barArray.push(new barObject("Slingshot", "Bar, Pub food", "M-F 3-7pm", 17));
