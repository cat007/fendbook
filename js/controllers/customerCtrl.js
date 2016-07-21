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
    var mapping='{"rahul":"singh","Luv":"saxena","bookvalue":"book","Magzinevalue":"Magzine","StudyMaterialvalue":"StudyMaterial","Sellvalue":{"key":"post_for","value":"selling"},"Exchangevalue":{"key":"post_for","value":"exchange"},"Donatevalue":{"key":"post_for","value":"donation"},"Rentvalue":{"key":"post_for","value":"rent"}}'; 
    var mapping2='{"post_for":{"Sellvalue":false,"Exchangevalue":false,"Donatevalue":false,"Rentvalue":false}}';
    var mapping3='{"Sellvalue":"post_for","Exchangevalue":"post_for","Donatevalue":"post_for","Rentvalue":"post_for"}';
    var jsonMapping2=JSON.parse(mapping2);
    var jsonMapping3=JSON.parse(mapping3);
    var jsonMapping=JSON.parse(mapping);
    var query_param="";
    var count=0;
    var finalUrl='';
    var posted_for='';
    var post_for={"url":"","count":0};

    $scope.bookCheckBox=function( ){
    	 console.log("Book CheckBox : ")
    	  console.log($scope.bookvalue);
   //       $scope.addQueryParam("bookvalue",$scope.bookvalue);
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
           $scope.addQueryParam("Sellvalue",$scope.Sellvalue,post_for);
    }

         $scope.ExchangeCheckBox=function( ){
    	 console.log("ExchangeCheckBox  : ")
    	  console.log($scope.Exchangevalue);
           $scope.addQueryParam("Exchangevalue",$scope.Exchangevalue,post_for);
    }

         $scope.DonateCheckBox=function( ){
    	 console.log("DonateCheckBox  : ")
    	  console.log($scope.Donatevalue);
           $scope.addQueryParam("Donatevalue",$scope.Donatevalue,post_for);
    }

         $scope.RentCheckBox=function( ){
    	 console.log("RentCheckBox  : ")
    	  console.log($scope.Rentvalue);
           $scope.addQueryParam("Rentvalue",$scope.Rentvalue,post_for);
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
    
    $scope.addQueryParam=function($parentKey,$flag,$filerType){
        var str="rahul"
        // console.log("addQueryParam  : ");
        // console.log(jsonMapping);
        // console.log(jsonMapping[str]);
        // console.log($parentKey);
        // console.log($flag);
        // console.log(jsonMapping[$parentKey]["key"]);
        // console.log($filerType);
        // console.log(jsonMapping2);
        // console.log(jsonMapping3);
        // console.log(jsonMapping3[$parentKey]);
        // console.log(jsonMapping2[jsonMapping3[$parentKey]]);
        // console.log(jsonMapping2[jsonMapping3[$parentKey]][$parentKey]);
        if($flag){
          jsonMapping2[jsonMapping3[$parentKey]][$parentKey]=true
        }
        else{
            jsonMapping2[jsonMapping3[$parentKey]][$parentKey]=false;
        }

            bookService.getBooksFilterWise($scope.prepareFinalUrl(),$scope).then(function(response){
            console.log("customerCtrl in filter");
            console.log(response);
             $scope.resBooks = response.data;
             console.log("customerCtrl in filter");
             console.log($scope.resBooks);
            // $location.path("/viewuploadedBook");


        });

    }

    $scope.bookSelectedNow = function(){
        console.log("Book selcted");
        console.log($scope.selectedBook);
        console.log("Book Selected End")
        bookService.getBookByAuthor($scope).then(function(response){
            $scope.resBooks=response.data;
        });
    }

    $scope.prepareFinalUrl=function(){
        console.log("prepareFinalUrl");
        var finalUrl='';
        var filterCount=0;
        var filterValueFlag=false;
        var filterValueCount=0;
        for(var filter in jsonMapping2){
            filterValueFlag=false;
            filterValueCount=0;
            for(var filterValue in jsonMapping2[filter]){
                if(jsonMapping2[filter][filterValue]==true){
                    filterValueFlag=true;
                    console.log(filterValue +":"+ jsonMapping2[filter][filterValue]);
                    if(filterCount==0){
                        if(filterValueCount==0){
                            finalUrl=finalUrl+filter+"="+jsonMapping[filterValue]["value"];
                            filterValueCount=filterValueCount+1;

                        }
                        else{
                            finalUrl=finalUrl+","+jsonMapping[filterValue]["value"];
                            filterValueCount=filterValueCount+1;
                        }
                         
                    }
                    else{

                        if(filterValueCount==0){
                            finalUrl=finalUrl+"&"+filter+"="+jsonMapping[filterValue]["value"];
                            filterValueCount=filterValueCount+1;

                        }
                        else{
                            finalUrl=finalUrl+","+jsonMapping[filterValue]["value"];
                            filterValueCount=filterValueCount+1;
                        }


                    }

                }

            }
            if(filterValueFlag==true)
            {
                filterCount=filterCount+1;
            }
        }
        console.log(finalUrl);
        return finalUrl;
    }

});


