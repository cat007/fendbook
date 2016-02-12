app.controller('sellerHomeCtrl',function($scope,loginService){

	locationsList = {};
	locationsList['Bangalore'] = ['Koramangala','Indiranagar','Domlur','Bellandur'];
	locationsList['Delhi'] = ['Gurgaon','Indiranagar','Domlur','Bellandur'];

	$scope.txt = 'Page Home';

	$scope.condition = ["Good","Fair","Poor"];

	$scope.availableCities = ["Bangalore","Delhi","Jaipur","Pune"];
	$scope.availableInstitutes = ["Indian Institute of Technology Delhi","NIT Allahabad"];

	$scope.logout = function(){
		loginService.logout();
	},

	$scope.oldBook = function(){
		$scope.type = "old";

	},
	$scope.newBook = function(){
		$scope.type = "new";

	}

	$scope.cityselected = function(city){




		console.log("Whats book here ");
		console.log(city);
		$scope.placechoice = 'city_selected';
		$scope.correspondingLocations = locationsList[city];
	}

	$scope.sellingBook = function(){
		$scope.sellingType = 'selling';

	}

	$scope.donateBook = function(){
		$scope.sellingType = 'donation';

	}

	$scope.addBook = function(book){

		var f = document.getElementById('file').files[0],
      r = new FileReader();
  r.onloadend = function(e){

    var data = e.target.result;
    //send you binary data via $http or $resource or do anything else with it
    console.log("WHats the image");
    console.log(data);

  }
  r.readAsBinaryString(f);


		console.log("lets check the book");
		console.log(book);
		console.log($scope.book);


	}



});
