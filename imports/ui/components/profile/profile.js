/** ***************************************************************************

@name: profile.js
@description: Componente para o perfil do usuário
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 06/12/2016

**************************************************************************** **/

import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './profile.html';

class Profile {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);

//============================= SUBSCRIBES =====================================
    //this.subscribe('users');
//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================
//============================= HELPERS =END====================================

//============================= METHODS ========================================
//============================= METHODS =END====================================
  }
}

const name = 'profile';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Profile
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
function config($stateProvider) {
  'ngInject';

  $stateProvider.state('profile', {
    url: '/profile',
    template: '<profile></profile>'
  });
}
//============================ CONFIG MODULE =END===============================
