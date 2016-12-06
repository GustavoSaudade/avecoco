/** ***************************************************************************

@name: home.js
@description: Modulo controller da pagina home
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 06/12/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './home.html';
import { name as Profile } from '../profile/profile';

class Home {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);

//============================= SUBSCRIBES =====================================
    //this.subscribe('users');
//============================= SUBSCRIBES =END=================================

//============================= HELPERS ========================================
//============================= HELPERS =END====================================

//============================= METHODS ========================================
    this.clicaProfile = function() {
      $state.go('profile');
    }
//============================= METHODS =END====================================
  }
}

const name = 'home';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Profile
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Home
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
function config($stateProvider) {
  'ngInject';

  $stateProvider.state('home', {
    url: '/home',
    template: '<home></home>'
  });


}
//============================ CONFIG MODULE =END===============================
