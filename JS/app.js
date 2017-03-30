// This file sets up the event listeners and functions for the javascript funtionality
// This file sets up data for the javascript funtionality
//-----------------------
var barArray =[];
var hoursArray =[];
var detailArray =[];
var dayArray =["SU", "M", "TU","W", "TH", "F", "SA"];

// create object constructor
var barObject = function(name, type, hours, position) {
  this.label = name;
  this.foodType = type;
  this.hours = hours;
  this.position = position;
};


// List of barObjects
barArray.push(new barObject("Bang Bang PDX", "Thai, Wings", "5-6pm, 9:30-midnight everyday", 1));
barArray.push(new barObject("The Knock Back", "American", "4-6pm everyday", 2));
barArray.push(new barObject("Aviary", "Japanese", "M-F 5-7pm", 3));
barArray.push(new barObject("Interurban", "American Fusion", "M-Sa 3-6pm, Su 10pm  Close", 4));
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
//-----------------------------M Tu W Th F Sa Su
hoursArray.push(["5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am", 1]);
hoursArray.push(["4-6pm","4-6pm","4-6pm","4-6pm","4-6pm","4-6pm","4-6pm", 2]);
hoursArray.push(["None", "5-7pm","5-7pm","5-7pm","5-7pm","5-7pm","None", 3]);
hoursArray.push(["M-Sa 3-6pm, Su 10pm to Close", 4]);
hoursArray.push(["2-6pm everyday", 5]);
hoursArray.push(["M-Th 5:30-6:30pm, F-Su 5-6:30pm", 6]);
hoursArray.push(["Tu-Sa 4-6:30pm 9:30-close, Su-M all day ", 7]);
hoursArray.push(["M-Sa 9:30pm - Close, Su 4-5:30pm and 9:30-Close ", 8]);
hoursArray.push(["M-F 4-7pm", 9]);
hoursArray.push(["3-6pm everyday", 10]);
hoursArray.push(["2-6pm everyday", 11]);
hoursArray.push(["Tu-F 4:30-6:30pm, Sa 5-6:30pm", 12]);
hoursArray.push(["M-Th 5-6pm, F&Su 4-6pm, Sa 4-5pm", 13]);
hoursArray.push(["4-6pm everyday", 14]);
hoursArray.push(["5-7pm everyday", 15]);
hoursArray.push(["M-F 2-7pm & 11pm-1am", 16]);
hoursArray.push(["M-F 3-7pm", 17]);
// ------------------------------------
detailArray.push(["An underrated but great spot, Bang Bang comes from the same folks who bring you the fantastic Aalto Lounge happy hour, but this time it’s Thai-influenced. The food menu is full of tasty Thai drinking snacks, including curries and skewers, but our favorite is the phenomenal wings, only $5 during happy hour and perfect with a Fernet and High-Life or a Bang Bang Old-Fashioned, both of which are only $6 during HH. ", 1]);
detailArray.push(["The Knock Back encapsulates the idea that bars are primarily supposed to be fun neighborhood spots. There are plenty of great cocktails to choose from, and they’re $2 off during happy hour. Also, wines by the glass, draught beer, and an entire boiler maker menu is $1 cheaper, too, with well-drinks clocking in at $3. HH food includes brussels sprouts ($6), sliders ($4.50), and more, but what’s really great here is the vibe. It’s always a party, and you’re always welcome.", 2]);
detailArray.push(["You have to love a place with food this playful, fun, elegant, and thoughtful that still serves $2 Old German tallboys at happy hour. Of course, you could always got for a daily craft cocktail for $7. Whatever you do, don’t miss the tempura green beans in curry sauce for $8, as they are amazing. ", 3]);
detailArray.push(["Interurban likes to blur the line between bar and restaurant, and serves equally well as both. For happy hour, select cocktails and house wines are just $5, and mugs of beer are available for $4. There’s a nice array of food options on the cheap, but the mini corn-dogs with fries and the much healthier option of grilled broccolini are both standouts at $5.", 4]);
detailArray.push(["There’s no lake anywhere in sight, but there is a great happy hour list that includes, among other things, $1 High-Lifes. If beer isn’t your thing, or if the High-Life isn’t, grab a glass of wine for $3 or a well drink for $4, and if you’re hungry, there are plenty of well-priced quality food items.", 5]);
detailArray.push(["It’s impossible to overstate the influence that Vitaly 'Vito' Paley has had on the Portland, and entire North Western, dining scene. Paley’s Place was the progenitor of our farm-to-table PacNW dining style, and remains a Portland institution. It’s pricey, but that’s why there’s happy hour, where you can sip fine French wine at $5 a glass while snacking on fried duck wings for $8, or get just a simple but exquisite hamburger for only $8.", 6]);
detailArray.push(["You're almost certain get a hangover, but that's what a huge selection of half-off “martinis” will do. Bartini delivers over 100 $4 house martinis, from Basilberry to the Diablo with habanero-infused vodka. Dishes of seared ahi tuna and mini crab cakes cost $4, and chicken satay with peanut sauce and shrimp and grits are $7 apiece.", 7]);
detailArray.push(["The old-school RingSide Steakhouse recently upped its prices, but they were so low already that HH remains solid. The restaurant’s steak bites, quarter-pound cheeseburger, and jo-jos all clock in at under $5 (yes, the $2.99 burger is a thing of the past).", 8]);
detailArray.push(["Teardrop Lounge arguably launched the entire craft cocktail bartending scene in Portland and remains as relevant and superb as always with a constantly developing menu full of classics and original drinks. Still, cocktails are expensive, often rising into the double digits.", 9]);
detailArray.push(["The bar at Clyde Common is often packed at happy hour thanks to its menu of $6 cocktails (including favorites like the Bittersweet Symphonic and Spelling Bee) and $3 to $6 snacks. Light snackers can reach for togarashi popcorn; hungrier folks might fare better with the $8 burger.", 10]);
detailArray.push(["Imperial's bar offers its draft cocktails for just $5 each during happy hour (generally featuring the Vieux Carre as a mainstay and another rotating option), as well as a food menu with a dozen discounted options. The superb flat-top burger can be had for $6, which you can pair with some of the city's best fries for an additional $3. ", 11]);
detailArray.push(["Any happy hour list would be remiss if it didn't include the clubby Saucebox. It's just fun. Hip happy hour snacks range from nigiri to chicken pad thai for $2 to 6, and to drink, you'll find three cocktails, read and white wines, and sake for $5, plus dollar off drafts. ", 12]);
detailArray.push(["With its craft cocktails, delicately cooked steaks, and sexy red leather booths, Trifecta is a great place to take your sweetheart for a night of eating, drinking, and, after, some karaoke. But with malt vinegar fries, $6 craft cocktails, and a pretty immaculate pimento double cheeseburger, it’s also a great place to meet up with friends after work. Just know going in that this will be your dinner for the night. ", 13]);
detailArray.push(["Tapalaya brings an eclectic Creole and Cajun happy hour, with discounted cocktails like $4 Hurricanes and $3 martinis. Food includes Asian-influenced plates like boudin egg rolls filled with Cajun rice and pork sausage for $3 and fish sauce wings for $6.", 14]);
detailArray.push(["This happy hour is long-running for a reason: a small but solid menu of $2 cocktails and food. The Belmont Jewel cocktail is bourbon, lemon, pomegranate juice, and orange blossom water, and on the food front, there's a grilled cheese sandwich and oven-baked pretzel. There are also buckets of four beers for $8 to 12 and featured bottles of red and white wine for $10.", 15]);
detailArray.push(["Dots Cafe is a Portland institution and has remained relatively unchanged: a cross between a dive bar, a lounge, and a diner. The happy hour menu includes food specials, from the famous fries to healthier options such as salads. Also find $1-off wine, and 50 cents-off beer and well drinks. ", 16]);
detailArray.push(["This unassuming spot near Foster Burger in Southeast serves $1 Olympia drafts during happy hour, plus offers a dollar off a large menu of craft brews. Among blown-up, framed pictures of immaculately tattooed Japanese men, dive into surprisingly fine happy hour food, like a $6 burger. Pinball, pool, and a patio round it out.", 17]);
// -------------------------------------------

// This file sets up data for the javascript funtionality
//-----------------------
var barArray =[];
var hoursArray =[];
var detailArray =[];
var dayArray =["SU", "M", "TU","W", "TH", "F", "SA"];

// create object constructor
var barObject = function(name, type, hours, position) {
  this.label = name;
  this.foodType = type;
  this.hours = hours;
  this.position = position;
};


// List of barObjects
barArray.push(new barObject("Bang Bang PDX", "Thai, Wings", "5-6pm, 9:30-midnight everyday", 1));
barArray.push(new barObject("The Knock Back", "American", "4-6pm everyday", 2));
barArray.push(new barObject("Aviary", "Japanese", "M-F 5-7pm", 3));
barArray.push(new barObject("Interurban", "American Fusion", "M-Sa 3-6pm, Su 10pm  Close", 4));
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
//-----------------------------M Tu W Th F Sa Su
hoursArray.push(["5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am","5-6pm,9:30-12am", 1]);
hoursArray.push(["4-6pm","4-6pm","4-6pm","4-6pm","4-6pm","4-6pm","4-6pm", 2]);
hoursArray.push(["None", "5-7pm","5-7pm","5-7pm","5-7pm","5-7pm","None", 3]);
hoursArray.push(["M-Sa 3-6pm, Su 10pm to Close", 4]);
hoursArray.push(["2-6pm everyday", 5]);
hoursArray.push(["M-Th 5:30-6:30pm, F-Su 5-6:30pm", 6]);
hoursArray.push(["Tu-Sa 4-6:30pm 9:30-close, Su-M all day ", 7]);
hoursArray.push(["M-Sa 9:30pm - Close, Su 4-5:30pm and 9:30-Close ", 8]);
hoursArray.push(["M-F 4-7pm", 9]);
hoursArray.push(["3-6pm everyday", 10]);
hoursArray.push(["2-6pm everyday", 11]);
hoursArray.push(["Tu-F 4:30-6:30pm, Sa 5-6:30pm", 12]);
hoursArray.push(["M-Th 5-6pm, F&Su 4-6pm, Sa 4-5pm", 13]);
hoursArray.push(["4-6pm everyday", 14]);
hoursArray.push(["5-7pm everyday", 15]);
hoursArray.push(["M-F 2-7pm & 11pm-1am", 16]);
hoursArray.push(["M-F 3-7pm", 17]);
// ------------------------------------
detailArray.push(["An underrated but great spot, Bang Bang comes from the same folks who bring you the fantastic Aalto Lounge happy hour, but this time it’s Thai-influenced. The food menu is full of tasty Thai drinking snacks, including curries and skewers, but our favorite is the phenomenal wings, only $5 during happy hour and perfect with a Fernet and High-Life or a Bang Bang Old-Fashioned, both of which are only $6 during HH. ", 1]);
detailArray.push(["The Knock Back encapsulates the idea that bars are primarily supposed to be fun neighborhood spots. There are plenty of great cocktails to choose from, and they’re $2 off during happy hour. Also, wines by the glass, draught beer, and an entire boiler maker menu is $1 cheaper, too, with well-drinks clocking in at $3. HH food includes brussels sprouts ($6), sliders ($4.50), and more, but what’s really great here is the vibe. It’s always a party, and you’re always welcome.", 2]);
detailArray.push(["You have to love a place with food this playful, fun, elegant, and thoughtful that still serves $2 Old German tallboys at happy hour. Of course, you could always got for a daily craft cocktail for $7. Whatever you do, don’t miss the tempura green beans in curry sauce for $8, as they are amazing. ", 3]);
detailArray.push(["Interurban likes to blur the line between bar and restaurant, and serves equally well as both. For happy hour, select cocktails and house wines are just $5, and mugs of beer are available for $4. There’s a nice array of food options on the cheap, but the mini corn-dogs with fries and the much healthier option of grilled broccolini are both standouts at $5.", 4]);
detailArray.push(["There’s no lake anywhere in sight, but there is a great happy hour list that includes, among other things, $1 High-Lifes. If beer isn’t your thing, or if the High-Life isn’t, grab a glass of wine for $3 or a well drink for $4, and if you’re hungry, there are plenty of well-priced quality food items.", 5]);
detailArray.push(["It’s impossible to overstate the influence that Vitaly 'Vito' Paley has had on the Portland, and entire North Western, dining scene. Paley’s Place was the progenitor of our farm-to-table PacNW dining style, and remains a Portland institution. It’s pricey, but that’s why there’s happy hour, where you can sip fine French wine at $5 a glass while snacking on fried duck wings for $8, or get just a simple but exquisite hamburger for only $8.", 6]);
detailArray.push(["You're almost certain get a hangover, but that's what a huge selection of half-off “martinis” will do. Bartini delivers over 100 $4 house martinis, from Basilberry to the Diablo with habanero-infused vodka. Dishes of seared ahi tuna and mini crab cakes cost $4, and chicken satay with peanut sauce and shrimp and grits are $7 apiece.", 7]);
detailArray.push(["The old-school RingSide Steakhouse recently upped its prices, but they were so low already that HH remains solid. The restaurant’s steak bites, quarter-pound cheeseburger, and jo-jos all clock in at under $5 (yes, the $2.99 burger is a thing of the past).", 8]);
detailArray.push(["Teardrop Lounge arguably launched the entire craft cocktail bartending scene in Portland and remains as relevant and superb as always with a constantly developing menu full of classics and original drinks. Still, cocktails are expensive, often rising into the double digits.", 9]);
detailArray.push(["The bar at Clyde Common is often packed at happy hour thanks to its menu of $6 cocktails (including favorites like the Bittersweet Symphonic and Spelling Bee) and $3 to $6 snacks. Light snackers can reach for togarashi popcorn; hungrier folks might fare better with the $8 burger.", 10]);
detailArray.push(["Imperial's bar offers its draft cocktails for just $5 each during happy hour (generally featuring the Vieux Carre as a mainstay and another rotating option), as well as a food menu with a dozen discounted options. The superb flat-top burger can be had for $6, which you can pair with some of the city's best fries for an additional $3. ", 11]);
detailArray.push(["Any happy hour list would be remiss if it didn't include the clubby Saucebox. It's just fun. Hip happy hour snacks range from nigiri to chicken pad thai for $2 to 6, and to drink, you'll find three cocktails, read and white wines, and sake for $5, plus dollar off drafts. ", 12]);
detailArray.push(["With its craft cocktails, delicately cooked steaks, and sexy red leather booths, Trifecta is a great place to take your sweetheart for a night of eating, drinking, and, after, some karaoke. But with malt vinegar fries, $6 craft cocktails, and a pretty immaculate pimento double cheeseburger, it’s also a great place to meet up with friends after work. Just know going in that this will be your dinner for the night. ", 13]);
detailArray.push(["Tapalaya brings an eclectic Creole and Cajun happy hour, with discounted cocktails like $4 Hurricanes and $3 martinis. Food includes Asian-influenced plates like boudin egg rolls filled with Cajun rice and pork sausage for $3 and fish sauce wings for $6.", 14]);
detailArray.push(["This happy hour is long-running for a reason: a small but solid menu of $2 cocktails and food. The Belmont Jewel cocktail is bourbon, lemon, pomegranate juice, and orange blossom water, and on the food front, there's a grilled cheese sandwich and oven-baked pretzel. There are also buckets of four beers for $8 to 12 and featured bottles of red and white wine for $10.", 15]);
detailArray.push(["Dots Cafe is a Portland institution and has remained relatively unchanged: a cross between a dive bar, a lounge, and a diner. The happy hour menu includes food specials, from the famous fries to healthier options such as salads. Also find $1-off wine, and 50 cents-off beer and well drinks. ", 16]);
detailArray.push(["This unassuming spot near Foster Burger in Southeast serves $1 Olympia drafts during happy hour, plus offers a dollar off a large menu of craft brews. Among blown-up, framed pictures of immaculately tattooed Japanese men, dive into surprisingly fine happy hour food, like a $6 burger. Pinball, pool, and a patio round it out.", 17]);
// -------------------------------------------



function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function formSubmit() {
  getElementsByTagName("submit");

  function addBar(){
    console.log("add new Bar");
    var barLocation = document.getElementById("barLocationInput").value;
    var barType = document.getElementById("barTypeInput").value;
    var barHours = document.getElementById("barHoursInput").value;
    var barLocation = document.getElementById("barLocationInput").value;
    var positionReference = (barArray.length++);
    var openBar = barArray.push(new barObject(barLocation, barType, barHours, barLocation, positionReference));
    console.log(openBar);
  }


};


function tableBuilder(tableLocation, arrayDataBuilder) {
  var body = document.getElementsByClassName(tableLocation)[0];
  var row = document.createElement("tr");
  for (var index = 0; index < arrayDataBuilder.length; index++) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(arrayDataBuilder[index]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  };
  //row added to end of table body
  body.appendChild(row);
}




// window.addEventListener("click", formSubmit);

