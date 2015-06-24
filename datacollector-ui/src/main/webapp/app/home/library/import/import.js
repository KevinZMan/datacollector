/**
 * Controller for Import Modal Dialog.
 */

angular
  .module('dataCollectorApp.home')
  .controller('ImportModalInstanceController', function ($scope, $modalInstance, api, pipelineInfo, $translate) {
    var errorMsg = 'Not a valid Pipeline Configuration file.';

    angular.extend($scope, {
      common: {
        errors: []
      },
      showLoading: true,
      uploadFile: {},
      createNewPipeline: (pipelineInfo ? false : true),
      pipelineInfo: pipelineInfo,
      newConfig : {
        name: '',
        description: ''
      },

      /**
       * Import button callback function.
       */
      import: function () {
        var reader = new FileReader();

        if($scope.createNewPipeline && !$scope.newConfig.name) {
          $translate('home.library.nameRequiredValidation').then(function(translation) {
            $scope.common.errors = [translation];
          });

          return;
        }

        reader.onload = function (loadEvent) {
          try {
            var parsedObj = JSON.parse(loadEvent.target.result),
              jsonConfigObj,
              jsonRulesObj;

            if(parsedObj.pipelineConfig) {
              //It is an config and rules envelope
              jsonConfigObj = parsedObj.pipelineConfig;
              jsonRulesObj = parsedObj.pipelineRules;
            } else {
              jsonConfigObj = parsedObj;
            }

            if(jsonConfigObj.uuid) {
              if(pipelineInfo && !$scope.createNewPipeline) { //If pipeline config already exists
                jsonConfigObj.uuid = pipelineInfo.uuid;
                api.pipelineAgent.savePipelineConfig(pipelineInfo.name, jsonConfigObj).
                  then(function(res) {
                    if(jsonRulesObj && jsonRulesObj.uuid) {
                      api.pipelineAgent.getPipelineRules(pipelineInfo.name).
                        then(function(res) {
                          var rulesObj = res.data;
                          rulesObj.metricsRuleDefinitions = jsonRulesObj.metricsRuleDefinitions;
                          rulesObj.dataRuleDefinitions = jsonRulesObj.dataRuleDefinitions;
                          rulesObj.emailIds = jsonRulesObj.emailIds;

                          api.pipelineAgent.savePipelineRules(pipelineInfo.name, rulesObj).
                            then(function() {
                              $modalInstance.close();
                            });

                        });

                    } else {
                      $modalInstance.close();
                    }
                  },function(data) {
                    $scope.common.errors = [data];
                  });
              } else { //If no pipeline exist or create pipeline option selected
                var newPipelineObject,
                  name,
                  description;

                if($scope.createNewPipeline) {
                  name = $scope.newConfig.name;
                  description = $scope.newConfig.description;
                } else {
                  name = jsonConfigObj.info.name;
                  description = jsonConfigObj.info.description;
                }

                api.pipelineAgent.createNewPipelineConfig(name, description)
                  .then(function(res) {
                    newPipelineObject = res.data;
                    newPipelineObject.configuration = jsonConfigObj.configuration;
                    newPipelineObject.errorStage = jsonConfigObj.errorStage;
                    newPipelineObject.uiInfo = jsonConfigObj.uiInfo;
                    newPipelineObject.stages = jsonConfigObj.stages;
                    return api.pipelineAgent.savePipelineConfig(name, newPipelineObject);
                  })
                  .then(function(res) {
                    if(jsonRulesObj && jsonRulesObj.uuid) {
                      api.pipelineAgent.getPipelineRules(name).
                        then(function(res) {
                          var rulesObj = res.data;
                          rulesObj.metricsRuleDefinitions = jsonRulesObj.metricsRuleDefinitions;
                          rulesObj.dataRuleDefinitions = jsonRulesObj.dataRuleDefinitions;
                          rulesObj.emailIds = jsonRulesObj.emailIds;

                          api.pipelineAgent.savePipelineRules(name, rulesObj).
                            then(function() {
                              $modalInstance.close(newPipelineObject);
                            });

                        });

                    } else {
                      $modalInstance.close(newPipelineObject);
                    }
                  },function(res) {
                    $scope.common.errors = [res.data];
                  });
              }

            } else {
              $scope.$apply(function() {
                $scope.common.errors = [errorMsg];
              });
            }
          } catch(e) {
            $scope.$apply(function() {
              $scope.common.errors = [errorMsg];
            });
          }
        };
        reader.readAsText($scope.uploadFile);
      },

      /**
       * Cancel button callback.
       */
      cancel: function () {
        $modalInstance.dismiss('cancel');
      }
    });






  });