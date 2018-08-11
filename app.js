angular.module('luisApp', [])
.controller('simplecrud', ['$scope',
	function($scope) {
	  $scope.users = [
	      {
            numero: "1",  
	        nombre : "luis",
	        pais : "Espanya",
	        editable : false
	      },
	      {
            numero: "2",
	        nombre : "Pepe",
	        pais : "Argentina",
	        editable : false
          },
          {
              numero: "3",
              nombre: "Juan",
              pais: "Colombia",
              editable: false
          }
	    ];
	 
	 $scope.entity = {}
	    
	 $scope.edit = function(index){
	   $scope.entity = $scope.users[index];
	   $scope.entity.index = index;
	   $scope.entity.editable = true;
	 }
	    
	 $scope.delete = function(index){
	   $scope.users.splice(index,1);
	 }
	    
	 $scope.save = function(index){
	   $scope.users[index].editable = false;
	   
	 }
	    
	 $scope.add = function(){
	   $scope.users.push({
        numero: "",
        nombre : "",
        pais : "",
        editable : true
	   })
	 }
	}
]);