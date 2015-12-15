// Object literal with personal info
var bio = {
  "name": "Aaron Sawyer",
  "role": "Web Developer",
  "contacts": {
    "mobile": "<a href='tel:952-412-6490'>952-412-6490</a>",
    "email": "<a href='mailto:me@aarondevon.com'>me@aarondevon.com</a>",
    "github": "<a href='https://github.com/aarondevon' target='_blank'>aarondevon</a>",
    "twitter": "<a href='https://twitter.com/AarondSawyer' target='_blank'>@AarondSawyer</a>",
    "location": "Minnetonka, Minnesota"
  },
  "welcomeMessage": "Welcome to my resume",
  "skills": ["HTML", "CSS", "Bootstrap", "JS", "jQuery", "AJAX", "Canvas", "Git"],
  "biopic": "images/me_1.jpg"
};

// Object literal with education info
var education = {
  "schools": [
    {
      "name": "Columbia College",
      "location": "Columbia",
      "degree": "Bachelor of Science",
      "majors": ["Information Systems"],
      "dates": "2013 to Current",
      "url": "http://www.ccis.edu/"
    },
    {
      "name": "Henneping Tech",
      "location": "Eden Prairie",
      "degree": "A.A.S.",
      "majors": ["Accounting"],
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



//Project object
var projects = {
  "projects": [
    {
      "title": "Classic Arcade Game Clone",
      "dates": "December 2015 to Current",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor est non dignissim volutpat. Donec imperdiet risus quis eros venenatis, in bibendum mi dictum. Curabitur mollis, ante id efficitur volutpat, massa arcu ullamcorper leo, a maximus neque nulla eu velit. Vivamus vitae odio urna. Curabitur sed massa dolor. Aliquam erat volutpat. In risus nulla, hendrerit a diam sit amet, dignissim semper tellus. Aliquam rhoncus, augue eget interdum egestas, mauris elit tincidunt lacus, vel dictum erat mauris vel urna. Quisque vulputate aliquam maximus.",
      "images": ["images/comingsoonorange.png"]
    },
     {
      "title": "Neighborhood Map",
      "dates": "January 2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor est non dignissim volutpat. Donec imperdiet risus quis eros venenatis, in bibendum mi dictum. Curabitur mollis, ante id efficitur volutpat, massa arcu ullamcorper leo, a maximus neque nulla eu velit. Vivamus vitae odio urna. Curabitur sed massa dolor. Aliquam erat volutpat. In risus nulla, hendrerit a diam sit amet, dignissim semper tellus. Aliquam rhoncus, augue eget interdum egestas, mauris elit tincidunt lacus, vel dictum erat mauris vel urna. Quisque vulputate aliquam maximus.",
      "images": ["images/comingsoonorange.png"]
    },
     {
      "title": "Health Tracker",
      "dates": "January 2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor est non dignissim volutpat. Donec imperdiet risus quis eros venenatis, in bibendum mi dictum. Curabitur mollis, ante id efficitur volutpat, massa arcu ullamcorper leo, a maximus neque nulla eu velit. Vivamus vitae odio urna. Curabitur sed massa dolor. Aliquam erat volutpat. In risus nulla, hendrerit a diam sit amet, dignissim semper tellus. Aliquam rhoncus, augue eget interdum egestas, mauris elit tincidunt lacus, vel dictum erat mauris vel urna. Quisque vulputate aliquam maximus.",
      "images": ["images/comingsoonorange.png"]
    },
     {
      "title": "YOXO Create and Share",
      "dates": "July 2015",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor est non dignissim volutpat. Donec imperdiet risus quis eros venenatis, in bibendum mi dictum. Curabitur mollis, ante id efficitur volutpat, massa arcu ullamcorper leo, a maximus neque nulla eu velit. Vivamus vitae odio urna. Curabitur sed massa dolor. Aliquam erat volutpat. In risus nulla, hendrerit a diam sit amet, dignissim semper tellus. Aliquam rhoncus, augue eget interdum egestas, mauris elit tincidunt lacus, vel dictum erat mauris vel urna. Quisque vulputate aliquam maximus.",
      "images": ["images/comingsoonorange.png"]
    },
  ]
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
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  // Function to loop through skill array in bio object
  bio.formattedSkills = function() {
    for(var i = 0; i < bio.skills.length; i++) {
      var tempSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(tempSkill);
    }
  };

  $("#header").append(formattedName);

  // bio.internationalName();

  $("#header").append(formattedRole);
  $("#header").append(formattedWelcome);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLocation);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);
  $("#header").prepend(formattedPicture);

  // Calls skill function
  bio.formattedSkills();
};

education.display = function() {
  for(var i = 0; i < education.schools.length; i++) {
    //Education with dot notation
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);

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
};

projects.display = function() {
  for(var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);

    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
  }
};

//Calls bio display function
bio.display();
// calls education display function
education.display();
// calls work display function
work.display();
//Calls function poject.display
projects.display();

// Internationalize button function.
  function inName(name) {
      var firstInitial = name.charAt(0).toUpperCase();
      console.log(firstInitial);
      var intLast = name.slice(6).toUpperCase();
      console.log(intLast);
      var partName = name.slice(1, 6);
      console.log(partName);
      var internationalName = firstInitial + partName + " " + intLast;
      console.log(internationalName);
      internationalName = HTMLheaderName.replace("%data%", internationalName);
      return internationalName;
  }


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

// Tracks user clicks
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});





