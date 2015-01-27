//Problem 9, Jan27th, JS, Codewars, Shaheen Ghazazani
'''Given a list of the following major Houses of Westeros and their respective mottos:

var houses = [
  {name: "Targaryen", motto: "Fire and Blood"},
  {name: "Stark",     motto: "Winter is Coming"},
  {name: "Bolton",    motto: "Our Blades Are Sharp"},
  {name: "Greyjoy",   motto: "We Do Not Sow"},
  {name: "Tully",     motto: "Family, Duty, Honor"},
  {name: "Arryn",     motto: "As High as Honor"},
  {name: "Lannister", motto: "Hear Me Roar!"},
  {name: "Tyrell",    motto: "Growing Strong"},
  {name: "Baratheon", motto: "Ours is the Fury"},
  {name: "Martell",   motto: "Unbowed, Unbent, Unbroken"}
];
Write a function that, when passed the name of a House, returns its motto. For instance:

motto("Tyrell")
should return

"growing strong"
If passed an invalid House name, the script should return an empty string. '''

//Solution to Problem 9

var houses = [
  {name: "Targaryen", motto: "Fire and Blood"},
  {name: "Stark",     motto: "Winter is Coming"},
  {name: "Bolton",    motto: "Our Blades Are Sharp"},
  {name: "Greyjoy",   motto: "We Do Not Sow"},
  {name: "Tully",     motto: "Family, Duty, Honor"},
  {name: "Arryn",     motto: "As High as Honor"},
  {name: "Lannister", motto: "Hear Me Roar!"},
  {name: "Tyrell",    motto: "Growing Strong"},
  {name: "Baratheon", motto: "Ours is the Fury"},
  {name: "Martell",   motto: "Unbowed, Unbent, Unbroken"}
];

function motto(name) {
  for(var i = 0; i < houses.length; i++)
  {
    if(houses[i].name == name)
    {
      return houses[i].motto;
    }
  }
  
  return '';
}