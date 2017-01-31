const app = angular.module('guess-number', []);
app.controller("guess", function($scope) {
  var tbody =  document.getElementsByTagName('tbody')[0];
  var history = [];
  var numberOfTry = 1;
  $scope.msg;
  $scope.numLeft = 7;
  var random = Math.floor(Math.random()*1000);
  console.log(random);

  $scope.check = function(num){
    if ($scope.num === random) {$scope.msg = "Great ! You found it in "+numberOfTry+" tries !";
     document.getElementById('btnReset').style.display = "block";
     angular.element(document.getElementById('numtxt'))[0].setAttribute("disabled","");
     addHistory();}

    else { $scope.msg = "Your number is more than mine ! decrease yours "; $scope.numLeft--;numberOfTry++;
    addHistory();}

    if ($scope.numLeft === 0) {
    $scope.msg = "You loose ! click on the button bellow to try again !";
    angular.element(document.getElementById('numtxt'))[0].setAttribute("disabled","");
    document.getElementById('btnReset').style.display = "block";
    addHistory();
  }
}

  $scope.reset = function (){
    i =1;
    numberOfTry = 1;
    $scope.msg = "";
    document.getElementById('btnReset').style.display = "none";
    $scope.numLeft = 7;
    $scope.num = "";
    random = Math.floor(Math.random()*1000);
    angular.element(document.getElementById('numtxt'))[0].removeAttribute("disabled","")
    console.log(random);
    tbody.innerHTML = "";
  }
  var addHistory = function() {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(numberOfTry));
    td.appendChild(document.createTextNode($scope.num));
    td2.appendChild(document.createTextNode($scope.msg));

    tr.appendChild(td1);
    tr.appendChild(td);
    tr.appendChild(td2);

    tbody.appendChild(tr);
  }
});
