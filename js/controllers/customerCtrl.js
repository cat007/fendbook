app.controller('customerCtrl',function($scope,$location,$rootScope,bookService,loginService){

	console.log("Are we here before ");
	console.log("Finally !!!");
	var user_id = 1;
    console.log("User id = ");
    console.log(user_id);

    		bookService.getAllBooksForUserId(user_id,$scope).then(function(response){
			console.log("customerCtrl change  1");
			console.log(response);
			 $scope.resBooks = response.data;
             console.log("customerCtrl changed");
             console.log($scope.resBooks);
			// $location.path("/viewuploadedBook");


		});

    $scope.bookCheckBox=function( ){
    	 console.log("Book CheckBox : ")
    	  console.log($scope.bookvalue);
    }

     $scope.MagzineCheckBox=function( ){
    	 console.log("Magzine CheckBox : ")
    	  console.log($scope.Magzinevalue);
    }

       $scope.StudyMaterialCheckBox=function( ){
    	 console.log("StudyMaterialCheckBox  : ")
    	  console.log($scope.StudyMaterialvalue);
    }


      $scope.SellCheckBox=function( ){
    	 console.log("SellCheckBox  : ")
    	  console.log($scope.Sellvalue);
    }

         $scope.ExchangeCheckBox=function( ){
    	 console.log("ExchangeCheckBox  : ")
    	  console.log($scope.Exchangevalue);
    }

         $scope.DonateCheckBox=function( ){
    	 console.log("DonateCheckBox  : ")
    	  console.log($scope.Donatevalue);
    }

         $scope.RentCheckBox=function( ){
    	 console.log("RentCheckBox  : ")
    	  console.log($scope.Rentvalue);
    }

          $scope.C1CheckBox=function( ){
    	 console.log("C1CheckBox  : ")
    	  console.log($scope.C1value);
    }
            $scope.C2CheckBox=function( ){
    	 console.log("C2CheckBox  : ")
    	  console.log($scope.C2value);
    }
            $scope.C3CheckBox=function( ){
    	 console.log("C3CheckBox  : ")
    	  console.log($scope.C3value);
    }
            $scope.C4CheckBox=function( ){
    	 console.log("C4CheckBox  : ")
    	  console.log($scope.C4value);
    }
            $scope.C5CheckBox=function( ){
    	 console.log("C5CheckBox  : ")
    	  console.log($scope.C5value);
    }
            $scope.C6CheckBox=function( ){
    	 console.log("C6CheckBox  : ")
    	  console.log($scope.C6value);
    }
            $scope.C7CheckBox=function( ){
    	 console.log("C7CheckBox  : ")
    	  console.log($scope.C7value);
    }
            $scope.C8CheckBox=function( ){
    	 console.log("C8CheckBox  : ")
    	  console.log($scope.C8value);
    }
            $scope.C9CheckBox=function( ){
    	 console.log("C9CheckBox  : ")
    	  console.log($scope.C9value);
    }
            $scope.C10CheckBox=function( ){
    	 console.log("C10CheckBox  : ")
    	  console.log($scope.C10value);
    }
            $scope.C11CheckBox=function( ){
    	 console.log("C11CheckBox  : ")
    	  console.log($scope.C11value);
    }
            $scope.C12CheckBox=function( ){
    	 console.log("C12CheckBox  : ")
    	  console.log($scope.C12value);
    }
            $scope.C13CheckBox=function( ){
    	 console.log("C13CheckBox  : ")
    	  console.log($scope.C13value);
    }
            $scope.C14CheckBox=function( ){
    	 console.log("C14CheckBox  : ")
    	  console.log($scope.C14value);
    }
            $scope.C15CheckBox=function( ){
    	 console.log("C15CheckBox  : ")
    	  console.log($scope.C15value);
    }
            $scope.C16CheckBox=function( ){
    	 console.log("C16CheckBox  : ")
    	  console.log($scope.C16value);
    }

    

});