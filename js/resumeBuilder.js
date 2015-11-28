// Object literal with personal info
var bio = {
    "name" : "Aaron D. Sawyer",
    "role" : "Web Developer",
    "contact" : {
        "mobile" : "<a href='tel:952-412-6490'>952-412-6490</a>",
        "email" : "<a href='mailto:me@aarondevon.com'>me@aarondevon.com</a>",
        "twitter" : "<a href='https://twitter.com/AarondSawyer' target='_blank'>@AarondSawyer</a>",
        "github" : "<a href='https://github.com/aarondevon' target='_blank'>aarondevon</a>",
        "blog" : "<a href='http://www.aarondevon.com/' target='_blank'>aarondevon.com</a>"
    },
    "location" : "5342 Woodland Rd Minnetonka, Minnesota 55345",
    "picture" : "images/me_1.jpg",
    "welcome" : "Welcome to my resume",
    "skills" : ["HTML", "CSS", "Bootstrap", "JS", "jQuery", "AJAX", "Canvas", "Git"]
};
// Variables that that fill in empty data in HTML template
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

// Function to loop through skill array in bio object
bio.formattedSkills = function() {
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
$("#header").append(formattedWelcome);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedBlog);
$("#footerContacts").append(formattedLocation);
$("#header").prepend(formattedPicture);

//I don't think I am calling the function correctly
bio.formattedSkills();

//Work object using dot notation
var work = {


};

//Education object using bracket notation
var education = {

};
