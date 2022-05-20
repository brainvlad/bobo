$(document).ready(function () {
  $(function () {
    $("#phone").mask("+375(99)-999-99-99", {
      placeholder: "+375(__)-___-__-__",
      completed: function () {
        this.addClass("completed");
        $("#phoneSubmit").removeClass("disabled");
        document
          .querySelector("#phoneSubmit")
          .addEventListener("click", (event) => {
            event.preventDefault();
            Swal.fire({
              title: "Большое спасибо",
              text: "В ближайшие 24 часа мы с вами свяжемся",
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
          });
      },
    });
  });
});
