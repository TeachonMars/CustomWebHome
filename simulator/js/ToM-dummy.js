window.baseEnvUrl = window.location.pathname;

window.learnerProfile = {
    "learnerId": "AAAAA",
    "firstname": "Jenny",
    "lastname": "Smith",
    "avatar": {
        "url": window.baseEnvUrl+"/assets/learner/profile.png"
    },
    "lang": "en",
    "points": 1458
};


window.trainingCourses = [
  {
    "accessible": true,
    "categories": [
      "category-2"
    ],
    "certified": false,
    "completed": false,
    "cover": {
      "url": window.baseEnvUrl+"/assets/courses/training-course-1-750x545.jpg"
    },
    "demo": false,
    "description": "Ut nostrud laboris ex id deserunt duis in veniam do velit excepteur ea esse aliqua ut exercitation consectetur deserunt tempor sunt ullamco labore laborum magna magna ut eiusmod ut ut dolore et deserunt aute dolore.",
    "id": "training-course-1",
    "recommended": false,
    "sandbox": false,
    "thumbnail": {
      "url": null
    },
    "title": "Green banana",
    "updateAvailable": false
  },
  {
    "accessible": true,
    "categories": [
      "category-1"
    ],
    "certified": false,
    "completed": false,
    "cover": {
      "url": window.baseEnvUrl+"/assets/courses/training-course-2-750x545.jpg"
    },
    "demo": false,
    "description": "Ut nostrud laboris ex id deserunt duis in veniam do velit excepteur ea esse aliqua ut exercitation consectetur deserunt tempor sunt ullamco labore laborum magna magna ut eiusmod ut ut dolore et deserunt aute dolore.",
    "id": "training-course-2",
    "recommended": false,
    "sandbox": false,
    "thumbnail": {
      "url": null
    },
    "title": "Plant-based creams",
    "updateAvailable": false
  },
  {
    "accessible": true,
    "categories": [
      "category-1"
    ],
    "certified": false,
    "completed": false,
    "cover": {
      "url": window.baseEnvUrl+"/assets/courses/training-course-3-750x545.jpg"
    },
    "demo": false,
    "description": "Ut nostrud laboris ex id deserunt duis in veniam do velit excepteur ea esse aliqua ut exercitation consectetur deserunt tempor sunt ullamco labore laborum magna magna ut eiusmod ut ut dolore et deserunt aute dolore.",
    "id": "training-course-3",
    "recommended": false,
    "sandbox": false,
    "thumbnail": {
      "url": null
    },
    "title": "Anti-ageing creams",
    "updateAvailable": false
  }
];

window.learnerTrainingCourses = _.map(
    _.slice(window.trainingCourses, 0, Math.min(1, window.trainingCourses.length)),
    function(t) {
        switch(t.id) {

            case "training-course-1":
                t.progress = 30;
                break;
            default:

        }
        return t;
    });


window.communications = [
    {
        "type": "article",
        "id": "communication-1",
        "featured": true,
        "title": "Discover our latest technology",
        "featuredImage": {
            "url": window.baseEnvUrl+"/assets/communications/communication-1-750x545.jpg",
            "imageSize": {
                "height": 720,
                "width": 545
            }
        },
        "description": null,
    },

    {
        "type": "article",
        "id": "communication-2",
        "featured": true,
        "title": "Get ready for the game!",
        "featuredImage": {
            "url": window.baseEnvUrl+"/assets/communications/communication-2-750x545.jpg",
            "imageSize": {
                "height": 720,
                "width": 545
            }
        },
        "description": null,
    },

    {
        "type": "training",
        "id": "communication-3",
        "featured": true,
        "title": "Green banana",
        "featuredImage": {
            "url": window.baseEnvUrl+"/assets/communications/communication-3-750x545.jpg",
            "imageSize": {
                "height": 720,
                "width": 545
            }
        },
        "trainingId": "training-course-1",
        "description": "Officia labore ea ex et veniam nostrud ut ut magna consectetur.",
    },



    {
        "type": "article",
        "id": "communication-4",
        "featured": false,
        "title": "Essence oils",
        "image": {
            "url": window.baseEnvUrl+"/assets/communications/communication-4-750x270.jpg",
            "imageSize": {
                "height": 720,
                "width": 545
            }
        },
        "description": null,
    },

    {
        "type": "article",
        "id": "communication-5",
        "featured": false,
        "title": "Discover the power of plants",
        "image": {
            "url": window.baseEnvUrl+"/assets/communications/communication-5-750x270.jpg",
            "imageSize": {
                "height": 720,
                "width": 545
            }
        },
        "description": null,
    },

    {
        "type": "image",
        "id": "communication-6",
        "featured": false,
        "title": "Scent and colors",
        "image": {
            "url": window.baseEnvUrl+"/assets/communications/communication-6-750x545.jpg",
            "imageSize": {
                "height": 720,
                "width": 545
            }
        },
        "description": "Officia labore ea ex et veniam nostrud ut ut magna consectetur.",
    }
];


window.featuredCommunications = _.filter(window.communications, function(c) { return c.featured; });

window.categories = [
    {
        "id": "category-1",
        "title": "Skin care",
        "children": [
            {
                "id": "category-1-2",
                "title": "The power of plants",
                "children": [],
                "parent": null,
                "image": {
                    "url": window.baseEnvUrl+"/assets/categories/category-1-2-750x270.jpg"
                }
            }
        ],
        "parent": null,
        "image": {
            "url": window.baseEnvUrl+"/assets/categories/category-1-750x270.jpg"
        }
    },
    {
        "id": "category-2",
        "title": "Sun protection",
        "children": [],
        "parent": null,
        "image": {
            "url": window.baseEnvUrl+"/assets/categories/category-2-750x270.jpg"
        }
    }
];
