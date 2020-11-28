/**********************************************************/
/* form--1 jQuery-Validation-plugin
/**********************************************************/
$(function () {
  $("#form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      reEmail: {
        required: true,
        equalTo: "#email",
      },
      content: {
        required: true,
        maxlength: 1000,
      },
    },

    messages: {
      name: {
        required: "お名前を入力してください。",
      },
      email: {
        required: "Eメールアドレスを入力してください。",
      },
      reEmail: {
        required: "Eメールアドレスを入力してください。",
        equalTo: "同じメールアドレスを入力してください。",
      },
      content: {
        required: "内容を入力してください。",
        maxlength: "内容は1000文字以内で入力してください。",
      },
    },

    errorElement: "span",
  });
});

/**********************************************************/
/* form--2 Vanila.js での実装
/* 参考記事: https://liginc.co.jp/348438
/**********************************************************/
$(function () {
  const form = document.getElementById("form-2");
  const error = document.getElementById("error");

  form.addEventListener("change", (e) => update(e));
  form.addEventListener("input", (e) => update(e));

  function update(e) {
    const name = form.elements["name"];
    const email = form.elements["email"];

    name.setCustomValidity("");
    if (name.value !== email.value) {
      name.setCustomValidity("違います。");
    }

    error.innerHTML = name.validationMessage;
  }
});
