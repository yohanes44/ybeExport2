
var app = angular.module("app", []);
app.controller("ctrl", ['$scope', function($scope){

    $scope.selectedCoffee;
   $scope.coffees = [
    {name: "YirgaCheffe", imgUrl: "/assets/img/coffeeTypes/YirgaCheffe.jpg", detail: "Yirgacheffe is home to the most elusive and complex profiles Ethiopia has to offer. This is the reason why this small zone has carved a profile for itself so well within the global coffee market. Yirgacheffe coffee is much sought after for its bright point citric acidity. It’s well-bodied, balanced cup of mocha combined with flowery, spicy elements and an array of fruity flavours gives it a layered and complex wheel of taste. Yirgacheffe is renowned for its washed coffees but is gaining reputation with fruity balanced naturals, as well."},
    {name: "Sidama", imgUrl: "/assets/img/coffeeTypes/Sidama.webp", detail: "Sidama coffee is a finely processed, flavored organic Arabica coffee that is almost 95% washed and is harvested in the Sidama region of Ethiopia."},
    {name: "Nekemeti", imgUrl: "/assets/img/coffeeTypes/Nekemeti.jpg", detail: "Nekemte is a market town in western Ethiopia, lying just over 300k west of Addis Ababa in a region of high rainfall and many hills. Coffee grows in rust-red volcanic soils at altitudes between 1,700�2,200 m.a.s.l. and a typical cup will have a medium body with good acidity, and a fruity finish."},
    {name:"Limmu", imgUrl: "/assets/img/coffeeTypes/Limmu.jpg", detail: "Limmu is a rugged, mountainous region stretching from south-central to south-western Ethiopia, part of the Oromiya Zone, that produces primarily washed coffees. The coffee beans sourced here have a distinct roundish shape and green colour, and are medium sized."}
]
   $scope.showDetail = function(cofName){
    $scope.selectedCoffee =  $scope.coffees.filter( (cof) => cof.name == cofName )
   }


}]);

