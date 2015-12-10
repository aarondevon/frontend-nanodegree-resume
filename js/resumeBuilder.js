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
};


// Object literal with personal info
var bio = {
    "name": "Aaron Sawyer",
    "role": "Web Developer",
    "contact": {
        "mobile": "<a href='tel:952-412-6490'>952-412-6490</a>",
        "email": "<a href='mailto:me@aarondevon.com'>me@aarondevon.com</a>",
        "twitter": "<a href='https://twitter.com/AarondSawyer' target='_blank'>@AarondSawyer</a>",
        "github": "<a href='https://github.com/aarondevon' target='_blank'>aarondevon</a>",
        "blog": "<a href='http://www.aarondevon.com/' target='_blank'>aarondevon.com</a>"
    },
    "location": "5342 Woodland Rd Minnetonka, Minnesota 55345",
    "picture": "images/me_1.jpg",
    "welcome": "Welcome to my resume",
    "skills": ["HTML", "CSS", "Bootstrap", "JS", "jQuery", "AJAX", "Canvas", "Git"]
};

if(bio.skills.length > 0) {
    // Function to loop through skill array in bio object
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data", bio.skills[0]);
    $("#skills").append(formattedSkill);
    // bio["formattedSkills"] = function() {
    //     for(var i = 0; i < bio.skills.length; i++) {
    //         var tempSkill = HTMLskills.replace("%data%", bio.skills[i]);
    //         $("#skills").append(tempSkill);
    //     }
    // };
}

// bio["formattedSkills"]();



// Tracks user clicks
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});






