// Object literal with personal info
var bio = {
  "name": "Aaron Sawyer",
  "role": "Web Developer",
  "contacts": {
    "mobile": "<a href='tel:952-412-6490'>952-412-6490</a>",
    "email": "<a href='mailto:me@aarondevon.com'>me@aarondevon.com</a>",
    "twitter": "<a href='https://twitter.com/AarondSawyer' target='_blank'>@AarondSawyer</a>",
    "github": "<a href='https://github.com/aarondevon' target='_blank'>aarondevon</a>",
    "blog": "<a href='http://www.aarondevon.com/' target='_blank'>aarondevon.com</a>",
    "location": "Minnetonka, Minnesota"
  },
  "welcome": "Welcome to my resume",
  "skills": ["HTML", "CSS", "Bootstrap", "JS", "jQuery", "AJAX", "Canvas", "Git"],
  "location": "Minnetonka, Minnesota",
  "biopic": "images/me_1.jpg"
};

// Display function for bio object
bio.display = function() {
  $("#header").append(HTMLskillsStart);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.location);
  var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.contacts.welcome);
  // Function to loop through skill array in bio object
  bio["formattedSkills"] = function() {
    for(var i = 0; i < bio.skills.length; i++) {
      var tempSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(tempSkill);
    }
  };

  $("#header").append(formattedName);
  bio.internationalName = function inName() {
    $("#main").append(internationalizeButton);
    $("button").click(function(){
      $("#name").remove();
      var firstInitial = bio.name.charAt(0).toUpperCase();
      console.log(firstInitial);
      var intLast = bio.name.slice(6).toUpperCase();
      console.log(intLast);
      var partName = bio.name.slice(1, 6);
      console.log(partName);
      var internationalName = firstInitial + partName + " " + intLast;
      console.log(internationalName);
      internationalName = HTMLheaderName.replace("%data%", internationalName);
      $("#header").append(internationalName);
      return internationalName;
    });
  };
  bio.internationalName();
$("#header").append(formattedRole);
$("#header").append(formattedWelcome);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedBlog);
$("#footerContacts").append(formattedLocation);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);
$("#header").prepend(formattedPicture);

// Calls skill function
bio["formattedSkills"]();
}
//Calls bio display function
bio.display();

// Object literal with education info
var education = {
  "schools": [
    {
      "name": "Columbia College",
      "location": "Columbia",
      "degree": "Information Systems",
      "major": "Bachelor of Science",
      "dates": "2013 to Current",
      "url": "http://www.ccis.edu/"
    },
    {
      "name": "Henneping Tech",
      "location": "Eden Prairie",
      "degree": "Accounting",
      "major": "A.A.S.",
      "date": "2011 to 2012",
      "url": "https://www.hennepintech.edu/"

    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "date": "November 2015 to Current",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

education.display = function() {

  for(var i = 0; i < education.schools.length; i++) {
    //Education with dot notation
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

    //Append Education information

    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
  }
  $("#education").append(HTMLschoolStart);

  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school).replace("#", education.onlineCourses[0].url);
  var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[0].date);
  $(".education-entry:last").append(HTMLonlineClasses);
  $(".education-entry:last").append(formattedOnlineTitle);
  $(".education-entry:last").append(formattedOnlineSchool);
  $(".education-entry:last").append(formattedOnlineDate);
};
education.display();

//Work object
var work = {
  "jobs": [
    {
      "employer": "TiNTiC",
      "title": "Technology Intern",
      "location": "St. George, UT",
      "dates": "2014 to Current",
      "description": "Assist in the administration and development of the technology infrastructure. Monitor existing technology and deploy new technology in an effort to reduce costs, improve efficiencies, and generate revenue"
    },
    {
      "employer": "Pizza Luce'",
      "title": "Delivery Driver/Server",
      "location": "Richfield, MN",
      "dates": "October 2010 to March 2015",
      "description": "Responsible for delivery of food, accurate order taking, and friendly customer service. Member of the leadership and training team"
    },
    {
      "employer": "HBSA",
      "title": "Sales and Training Specialist",
      "location": "Eden Prairie, MN",
      "dates": "2010 to 2012",
      "description": "Marketed and sold online marketing training packages. Worked with clients one-on-one and trained them in online marketing. Handled customer complaints in a timely and effective manner via phone, chat, and email"
    },
    {
      "employer": "Papa Johns",
      "title": "Shift Lead",
      "location": "Minnetonka, MN",
      "dates": "2005 to 2010",
      "description": "Performed managerial duties: Trained team members, Created work schedules, Marketed and created business relationships with local businesses in the delivery area, Handled customer complaints in a timely and effective manner, and Created win-win solutions"
    }
  ]
};

work.display = function displayWork() {
  work.jobs.forEach(function(jobinfo) {
    console.log(jobinfo.employer);
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", jobinfo.employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", jobinfo.title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", jobinfo.dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobinfo.location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", jobinfo.description);

    $(".work-entry:last").append(formattedWorkEmployer);
    $(".work-entry:last").append(formattedWorkTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);

  });
}
// calls work display function
work.display();


var project = {
  "projects": [
    {
      "title": "",
      "dates": "",
      "description": "",
      "images": ""
    },
     {
      "title": "",
      "dates": "",
      "description": "",
      "images": ""
    },
     {
      "title": "",
      "dates": "",
      "description": "",
      "images": ""
    },
     {
      "title": "",
      "dates": "",
      "description": "",
      "images": ""
    },
  ]
};







// Tracks user clicks
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});






