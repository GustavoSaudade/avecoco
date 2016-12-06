/** ***************************************************************************

@name: shop.js
@description: Modulo controller da pagina shop
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 06/12/2016

**************************************************************************** **/

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './shop.html';

class Shop {
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

const name = 'shop';

//============================ MODULE ==========================================
export default angular.module(name, [
  angularMeteor,
  uiRouter
])
.component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Shop
})
  .config(config);
//============================ MODULE =END======================================
//============================ CONFIG MODULE ===================================
function config($stateProvider) {
  'ngInject';

  $stateProvider.state('shop', {
    url: '/shop',
    template: '<shop></shop>'
  });


}
//============================ CONFIG MODULE =END===============================
