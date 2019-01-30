var jsLibService = initInterface();
window.webInterface =  {
    scormEnabled: false,
    bridge: function (lib, method, params) {
        return jsLibService[method](params);
    }
};

function initInterface() {

    var returnAsPromise = function(ret) {
        return new Promise(function (resolve, reject) {
            return resolve(ret);
        });
    };


    var getCategories = function() {
        return returnAsPromise([
        ]);
    }

    var getProfile = function() {
        return returnAsPromise(window.learnerProfile);
    }

    var displayScreenFn = function(screen) {
        return function() {
          alert("Navigating to "+screen+" OK");
        }
    }

    var displaySearch = function(params) {
      if (params && params.query) {
        alert("Opening search screen with search query \""+params.query+"\"");
      }
      else {
        alert("Navigating to Search screen OK");
      }
    }

    var shakeAndLearn = function() {
        return function() {
          alert("Launching Shake'n'Learn");
        }
    }

    var isShakeAndLearnPossible = function() {
        return returnAsPromise(true);
    }

    var getFeaturedCommunications = function() {
      return returnAsPromise(window.featuredCommunications);
    }

    var getCommunications = function(params) {
      var pageSize = params.pageSize || 10;
      var page = params.page || 1;
      if (page < 1) {
        page = 1;
      }
      if (pageSize < 1) {
        pageSize = 1;
      }

      var list = _.slice(_.filter(window.communications, function(c) { return !c.featured;}), (page-1)*pageSize, (page*pageSize));
      var ret = {
          "list": list,
          "count": window.communications.length,
          "page": page,
          "pageCount" : Math.ceil(window.communications.length / pageSize),
          "pageSize" : pageSize
      };
      return returnAsPromise(ret);
    }


    var displayCommunication = function(params) {
      var communicationId = params.id;
      var communication = _.head(_.filter(window.communications, {"id": communicationId}));
      if (communication) {
        alert("Navigating to communication \""+communication.title+"\"");
      }
      else {
        alert("Unknown communication \""+communicationId+"\"");
      }
    }


    var getCategories = function() {
      return returnAsPromise(window.categories);
    }

    var getCategory = function(params) {
      var categoryId = params.id;
      return returnAsPromise(_.head(_.filter(window.categories, {"id": categoryId})));
    }

    var displayCategory = function(params) {
      var categoryId = params.id;
      var category = _.head(_.filter(window.categories, {"id": categoryId}));
      if (category) {
        alert("Navigating to category \""+category.title+"\"");
      }
      else {
        alert("Unknown category \""+categoryId+"\"");
      }
    }

    var getTrainingCourse = function(params) {
      var trainingId = params.id;
      return returnAsPromise(_.head(_.filter(window.trainingCourses, {"id": trainingId})));
    }

    var displayTrainingCourse = function(params) {
      var trainingId = params.id;
      var training = _.head(_.filter(window.trainingCourses, {"id": trainingId}));
      if (training) {
        alert("Navigating to training course \""+training.title+"\"");
      }
      else {
        alert("Unknown training course \""+trainingId+"\"");
      }
    }

    var getTrainingCoursesForLearner = function() {
      return returnAsPromise(window.learnerTrainingCourses);
    }

    var getTrainingCoursesForCategory = function(params) {
      var categoryId = params.id;
      var trainings = _.filter(
        window.trainingCourses,
        function(t) {
          return _.indexOf(t.categories, categoryId) > -1;
      });
      return returnAsPromise(trainings);
    }

    var doLogout = function() {
      alert("Did logout successfully!");
    }

    var showTrainingCourseEnrollment = function() {
      alert("Popup for training course enrollment displayed!!");
    }

    return {
      // ToM.appContent
      getCategories: getCategories,
      getCategory: getCategory,
      getTrainingCoursesForLearner: getTrainingCoursesForLearner,
      getTrainingCoursesForCategory: getTrainingCoursesForCategory,
      getTrainingCourse: getTrainingCourse,
      getCommunications: getCommunications,
      getFeaturedCommunications: getFeaturedCommunications,
      // // ToM.display
      displayTrainingCourse: displayTrainingCourse,
      displayCategory: displayCategory,
      displayWall: displayScreenFn("Wall"),
      displayCommunication: displayCommunication,
      displayCatalog: displayScreenFn("Catalog"),
      displaySearch: displaySearch,
      displayProfile: displayScreenFn("Profile"),
      displayApps: displayScreenFn("Apps"),
      // ToM.appUtils
      showTrainingCourseEnrollment: showTrainingCourseEnrollment,
      logout: doLogout,
      // // ToM.learner
      getProfile: getProfile,
      // Shake'n'Learn
      isShakeAndLearnPossible: isShakeAndLearnPossible,
      shakeAndLearn: shakeAndLearn,

      // setFeaturedCommunications: setFeaturedCommunications,
      // setProfile: setProfile
    };
}