fetch("../assets/data/people.json");

document.getElementsByClassName("cards").innerHTML = 
obj.executiveCouncil[0].name + " " + obj.people[0].position + "<br>" + obj.people[0].email + "<br>" + 
obj.people[0].photo;