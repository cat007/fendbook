$(function() {
	$("#login-form").validate({
		rules: {
            login_email: {
                required: true,
                email: true
            },
            password: {
                required: true,
            }
        },
        
        // Specify the validation error messages
        messages: {
            password: {
                required: "Please provide a password"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            form.submit();
        }
	});
});