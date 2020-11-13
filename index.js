$("#submit").on("click", function () {
    $.ajax({
        url: "http://localhost:8080/",
        type: "post",
        data: {
            name: $("#name").val(),
            description: $("#description").val(),
            gender: $(".gender:checked").val(),
            birthday: $("#birthday").val(),
            color: $("#color").val()
        },
        success: function (txt) {
            console.log(txt);
        }
    })
})
