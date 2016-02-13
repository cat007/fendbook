app.service('multiPartForm',function($http){
	this.postForm = function(uploadUrl,data1){
		var fd = new FormData();
		console.log("Lets see");
		console.log(data1);
		for(var key in data1){
			fd.append(key,data1[key]);
		}

		console.log("POSTING IMAGE");
		console.log('FD is ' );
        console.log(fd);
		$http.post("http://localhost:3000/api/books",fd,{
			transformRequest: fd,
			headers: {'Content-type' : undefined }
			// headers: {'Content-type' : false}
		});



// $http({
//    method: 'POST',
//    url: 'http://localhost:3000/api/books',
//    data: data1 // your original form data,
//    transformRequest: fd  // this sends your data to the formDataObject provider that we are defining below.
//    headers: {'Content-Type': 'multipart/form-data'}
// })
// success(function(response){
// 	console.log("response");
// 	console.log(response);

// });






	}
})