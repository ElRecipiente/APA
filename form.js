$("#validatorForm").validate({
  rules: {
    lastName: {
      required: true,
      minlength: 3,
    },
    name: {
      required: true,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    subject: {
      required: true,
    },
    comment: {
      required: true,
      minlength: 30,
    },
  },
  messages: {
    lastName: {
      required: "Entrez votre nom",
      minlength: "Au moins 3 caractères",
    },
    name: {
      required: "Entrez votre prénom",
      minlength: "Au moins 3 caractères",
    },
    email: {
      required: "Entrez votre adresse mail",
      email: "Entrez une adresse valide",
    },
    subject: {
      required: "Choisissez une option",
    },
    comment: {
      required: "Ajoutez un message",
      minlength: "Au moins 30 caractères",
    },
  },
  submitHandler: function (form) {
    //form.submit();
    alert("Merci pour votre message");
    $("input")[0].value = "";
    $("input")[1].value = "";
    $("input")[2].value = "";
    $("textarea")[0].value = "";
    $("select")[0].value = "";
  },
});
