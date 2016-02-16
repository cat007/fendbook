app.service('multiPartForm',function($http,$location){
	this.postForm = function(uploadUrl,data1){
		var fd = new FormData();
		console.log("Lets see");
		console.log(data1);
		for(var key in data1){
			fd.append(key,data1[key]);
		}

		$http.post("http://localhost:3000/api/books",fd,{
			transformRequest: fd,
			headers: {'Content-type' : undefined }
			// headers: {'Content-type' : false}
		}).then(function(response){
			console.log("response = ");
			if(response.status == 201){
				$location.path('/successUpload');

			}
			console.log(response);

		});


	}
})