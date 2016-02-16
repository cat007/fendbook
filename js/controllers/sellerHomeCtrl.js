app.controller('sellerHomeCtrl',function($scope,$location,loginService,multiPartForm,bookService){

	locationsList = {};
	locationsList['Bangalore'] = ['Koramangala','Indiranagar','Domlur','Bellandur'];
	locationsList['Delhi'] = ['Gurgaon','Indiranagar','Domlur','Bellandur'];

	$scope.txt = 'Page Home';

	$scope.resBooks = [];

	$scope.book = {};

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
	},

	$scope.sellingBook = function(){
		$scope.sellingType = 'selling';

	},

	$scope.donateBook = function(){
		$scope.sellingType = 'donation';

	},

	$scope.addBook = function(book){

$scope.book['user_id'] = loginService.getSessionId();

//Upload image here

  var uploadUrl = '/Users/luv.saxena/new_image';
  		console.log("lets check the book here");
		console.log(book);
		console.log($scope.book);

  multiPartForm.postForm(uploadUrl,$scope.book);

	}

	$scope.getBook = function(){
		console.log("R we here");
		var user_id = loginService.getSessionId();

		bookService.getAllBooksForUserId(user_id,$scope);



	}



});
