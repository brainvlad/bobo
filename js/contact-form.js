$(document).ready(function () {
  const contactForm = $("#contactForm");

  if (contactForm) {
    $.validator.addMethod(
      "emailordomain",
      function (value, element) {
        return (
          this.optional(element) ||
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value) ||
          /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(
            value
          )
        );
      },
      ""
    );

    $("#contactForm").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        message: {
          required: true,
          minlength: 10,
        },
        email: {
          required: true,
          email: true,
          emailordomain: true,
        },
      },
      messages: {
        name: "",
        message: "",
        email: "",
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass("error").removeClass("valid");
        $("#name-error").hide(0);
      },

      unhighlight: function (element, errorClass, validClass) {
        $(element).addClass("valid").removeClass("error");
      },
      submitHandler: function (form) {
        $("input").removeClass("error valid");
        $("textarea").removeClass("error valid");
        Swal.fire({
          title: "Большое спасибо",
          text: "Ващ отзыв очень важен для нас",
          position: "center",
          background: "white",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showConfirmButton: true,
          showCancelButton: false,
          timer: 3000,
          confirmButtonColor: "#f2af29",
        });
      },
    });
  }
});
