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
// var work = {};
// work.employer = "Pizza Luce'";
// work.title = "Delivery Driver/Server";
// work.dates = "October 2010 to March 2015";
// work.location = "Richfield, MN";
// work.description = "Responsible for delivery of food, accurate order taking, and friendly customer service. Member of the leadership and training team";
var work = {
    "jobs": [
        "tintic": {
            "employer": "TiNTiC",
            "title": "Technology Intern",
            "location": "St. George, UT",
            "dates": "2014 to Current",
            "description": "Assist in the administration and development of the technology infrastructure. Monitor existing technology and deploy new technology in an effort to reduce costs, improve efficiencies, and generate revenue"
        },
        "luce": {
            "employer": "Pizza Luce'",
            "title": "Delivery Driver/Server",
            "location": "Richfield, MN",
            "dates": "October 2010 to March 2015",
            "description": "Responsible for delivery of food, accurate order taking, and friendly customer service. Member of the leadership and training team"
        },
        "hbsa": {
            "employer": "HBSA",
            "title": "Sales and Training Specialist",
            "location": "Eden Prairie, MN",
            "dates": "2010 to 2012",
            "description": "Marketed and sold online marketing training packages. Worked with clients one-on-one and trained them in online marketing. Handled customer complaints in a timely and effective manner via phone, chat, and email"
        },
        "papa": {
            "employer": "Papa Johns",
            "title": "Shift Lead",
            "location": "MTKA, MN",
            "dates": "2005 to 2010"
            "description": "Performed managerial duties: Trained team members, Created work schedules, Marketed and created business relationships with local businesses in the delivery area, Handled customer complaints in a timely and effective manner, and Created win-win solutions"
        }
    ]
}
//Work with bracket notation
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work["employer"]).replace("#", "https://pizzaluce.com/");
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work["title"]);
var formattedWorkDates = HTMLworkDates.replace("%data%", work["dates"]);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work["location"]);
var formattedWorkDescription = HTMLworkLocation.replace("%data%", work["description"]);

//Append Work information
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkEmployer);
$(".work-entry").append(formattedWorkTitle);
$(".work-entry").append(formattedWorkDates);
$(".work-entry").append(formattedWorkLocation);
$(".work-entry").append(formattedWorkDescription);



//Education object using bracket notation
var education = {};
education["schoolName"] = "Columbia College";
education["degree"] = "B.S.";
education["dates"] = "2013 to Current";
education["location"] = "Columbia, MO";
education["major"] = "Information Systems";

//Education with dot notation
var formattedSchoolName = HTMLschoolStart.replace("%data%", education.schoolName).replace("#", "http://www.ccis.edu/degrees/?program=BSCIS");
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.major);

//Append Education information
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);

var education = {
    "schools": [
        {
            "name": "Columbia College",
            "city": "Columbia",
            "degree": "Information Systems",
            "dates": "2013 to Current"
        },
        {
            "name": "Henneping Tech",
            "city": "Eden Prairie",
            "degree": "Accounting",
            "dates": "2011 to 2012"

        },
        {
            "name": "Udacity",
            "city": "Don't know",
            "degree": "Front End Nanodegree",
            // "dates": "November 2015 to Current"
        }
    ]
}






















