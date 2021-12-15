$(document).ready( () => {

    let firstName = $("#firstName")[0],
        lastName = $("#lastName")[0],
        email = $("#email")[0],
        password = $("#password")[0],
        errorMsg = $("div.error"),
        failureIcon = $(".failure-icon");

    $('form').on('submit', event => {
        event.preventDefault()
        console.log(event)
        if (validate(firstName, 0, "First Name cannot be empty") &&
            validate(lastName, 1, "Last Name cannot be empty") &&
            validate(email, 2, "Looks like this is not an email") &&
            validate(password, 3, "Password cannot be empty")) {
                location.reload()
        }
    })

    const validate = (id, serial, message) => {
        if (id.id === 'email' && !validateEmail(id.value.trim()) 
            || id.value.trim() === "") {
          errorMsg[serial].innerHTML = message;
          $(id).addClass('error')
          failureIcon[serial].style.opacity = "1";
          return false
        } else {
          errorMsg[serial].innerHTML = "";
          $(id).removeClass('error')
          failureIcon[serial].style.opacity = "0";
          return true
        }
    };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      
})