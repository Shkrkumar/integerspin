document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("side-nav-form") != null) {
        document.getElementById("side-nav-form").addEventListener("submit", function (event) {
            event.preventDefault();
            sendmail();
        });
    }

    if (document.getElementById("contact_us_page_form") != null) {
        document.getElementById("contact_us_page_form").addEventListener("submit", function (event) {
            event.preventDefault();
            contactUs();
        });
    }
});


function sendmail() {
    const params = {
        "name": document.getElementById("Naam").value,
        "email": document.getElementById("Email").value,
        "subject": document.getElementById("Onderwerp").value,
        "description": document.getElementById("Description").value
    }

    console.log(params)

    // validate form
    if (params.name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (params.email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (params.subject == "") {
        alert("Subject must be filled out");
        return false;
    }
    if (params.description == "") {
        alert("Description must be filled out");
        return false;
    }

    const serviceID = 'service_9y5ddiv';
    const templateID = 'template_qsjt08t';

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                console.log("success", res.status);
                document.getElementById("Naam").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("Onderwerp").value = "";
                document.getElementById("Description").value = "";
                alert("Email has been sent successfully");
            }
        ).catch((err) => console.log(err));
}

function contactUs(){
    var first =document.getElementById("firstName").value;
    var last =document.getElementById("lastName").value;
    var params = {
        "name": first+" "+last,
        "email": document.getElementById("emailAdd").value,
        "product": document.getElementById("enquiryFor").value,
        "user_is": document.getElementById("youAre").value,
        "contact_num": document.getElementById("contactNum").value,
        "description": document.getElementById("enquiryText").value
    };
    // validate form
    if (first == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (last == "") {
        alert("Last Name must be filled out");
        return false;
    }
    if (params.email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (params.product == "") {
        alert("Product must be filled out");
        return false;
    }
    if (params.user_is == "") {
        alert("User must be filled out");
        return false;
    }
    if (params.contact_num == "") {
        alert("Contact Number must be filled out");
        return false;
    }
    if (params.description == "") {
        alert("Description must be filled out");
        return false;
    }

    const serviceID = 'service_rbpv1ab';
    const templateID = 'template_vljhfs7';
    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                console.log("success", res.status);
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("emailAdd").value = "";
                document.getElementById("contactNum").value = "";
                document.getElementById("enquiryFor").value = "";
                document.getElementById("youAre").value = "";
                document.getElementById("enquiryText").value = "";
                alert("Email has been sent successfully");
                window.reload()
            }
        ).catch((err) => console.log(err));
}