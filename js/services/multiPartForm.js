app.service('multiPartForm',function($http,$location){
	return{
	postForm:function(uploadUrl,data1){
		var fd = new FormData();
		console.log("Lets see");
		console.log(data1);
		for(var key in data1){
			fd.append(key,data1[key]);
		}

		return $http.post("http://localhost:3000/api/books",fd,{
			transformRequest: fd,
			headers: {'Content-type' : undefined }
			// headers: {'Content-type' : false}
		});


	}

}})