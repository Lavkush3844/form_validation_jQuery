$("#myform").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 10
        },
        email: {
            required: true,
            email: true,
        },
        number: {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        bod: {
            required: true,
        },
        gender: {
            required: true
        },
        grad: {
            required: true
        },
        add: {
            required: true
        },
        city: {
            required: true
        },
        state: {
            required: true
        },
        zip: {
            required: true
        },
        country: {
            required: true
        },
        pname: {
            required: true
        },
        hnumber: {
            required: true
        },
        relation: {
            required: true
        },
    },
    messages: {
        name: {
            required: "Please Enter Your Name",
            minlength: "At least {0} characters required!",
            maxlength: "10 Character Limit"
        },
        email: {
            required: "Please Enter Your Email",
            email: "Your email address must be in the format of name@domain.com"
        },
        number: {
            required: "Please Enter Your Phone Number",
            minlength: "Enter a Valid Number",
            maxlength: "Enter a Valid Number"
        },
        bod: "Please Select Your Birth Date",
        gender: "Please Select Your Gender",
        grad: "Please Enter Your Graduation",
        add: "Please Enter Your Address",
        zip: "Please Enter Your Zip Code",
        pname: "Please Enter Your Parent Name",
        hnumber: "Please Enter Your Home Number"
    }
});
