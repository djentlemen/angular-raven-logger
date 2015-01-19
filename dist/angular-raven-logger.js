(function () {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularRavenLogger.config', [])
      .value('angularRavenLogger.config', {
          debug: true
      });

  // Modules
  angular.module('angularRavenLogger.services', []);
  angular.module('angularRavenLogger',
      [
          'angularRavenLogger.config',
          'angularRavenLogger.services',
          'ngResource',
          'ngSanitize'
      ]);

})();
