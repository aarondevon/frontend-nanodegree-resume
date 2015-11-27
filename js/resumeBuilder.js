// Object literal with personal info
var bio = {
    "name" : "Aaron D. Sawyer",
    "role" : "Web Developer",
    "contact" : {
        "email" : "me@aarondevon.com",
        "mobile" : "952-412-6490"
    },
    "location" : {
        "street" : "5342 Woodland Rd",
        "City" : "Minnetonka",
        "State" : "Minnesota",
        "zip" : "55345"
    },
    "picture" : "images/me_1.jpg",
    "welcome" : "Welcome to my resume",
    "skills" : ["HTML", "CSS", "Bootstrap", "JS", "jQuery", "AJAX", "Canvas", "Git"]
};
// Variables that that fill in empty data in HTML template
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);

// Function to loop through skill array in bio object
bio.skillFunction = function() {
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++) {
        var tempSkill = HTMLskills.replace("%data%", bio.skills[i]);
        // console.log(tempSkill);
        $("#skills").append(tempSkill);
    }
};
// console.log(skills);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
//I don't think I am calling the function correctly
bio.skillFunction();

var work = {

};

var education = {

};
