app.controller('sellerHomeCtrl',function($scope,$location,$rootScope,loginService,multiPartForm,bookService){

	locationsList = {};
	locationsList['Bangalore'] = ['Koramangala','Indiranagar','Domlur','Bellandur'];
	locationsList['Delhi'] = ['Gurgaon','Indiranagar','Domlur','Bellandur'];

	$scope.txt = 'Page Home';

	$scope.resBooks = [];

	$scope.book = {};

	$scope.condition = ["Good","Fair","Poor"];

	$scope.availableCities = ["Bangalore","Delhi","Jaipur","Pune"];
	$scope.availableInstitutes = ["Indian Institute of Technology Delhi","NIT Allahabad"];
	$scope.categoryList = ["Science fiction","Satire","Drama","Action and Adventure","Romance","Mystery","Horror","Self help","Health","Guide","Travel","Children's","Religion, Spirituality & New Age","Science","History","Math","Anthology","Poetry","Encyclopedias","Dictionaries","Comics","Art","Cookbooks","Diaries","Journals","Prayer books","Series","Trilogy","Biographies","Autobiographies","Fantasy"];

	$scope.logout = function(){
		loginService.logout();
	},

	$scope.isLogin = function(){
		loginService.isLogin();
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

if($scope.book.file instanceof Array){
	$scope.book.file =  $scope.book.file[0];
}

//Upload image here

  var uploadUrl = '/Users/luv.saxena/new_image';
  		console.log("lets check the book here");
		console.log(book);
		console.log($scope.book);

  multiPartForm.postForm(uploadUrl,$scope.book).then(function(response){

  				console.log("book upload response = ");
  				var data = response.data;
			if(response.status == 201){
				bookService.setUploadedBook(data);
				$location.path('/successUpload');



			}
			console.log(response);


  });

	}

	// $scope.getBook = function(){
	// 	console.log("R we here");
	// 	var user_id = loginService.getSessionId();

	// 	bookService.getAllBooksForUserId(user_id,$scope).then(function(response){
	// 		console.log("COOL the things changed 1");
	// 		console.log(response);
	// 		 $scope.resBooks = response.data;
 //             console.log("COOL the things changed");
 //             console.log($scope.resBooks);
	// 		// $location.path("/viewuploadedBook");


	// 	});
	// }



});
