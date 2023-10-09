$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("border", "1px solid #009579");
    })
    $("input").blur(function () {
        if ($(this).val().trim() == "") {
            $(this).css("border", "1px solid red");
        }
        else {
            $(this).css("border", "1px solid lightgray");
        }
    })

    $("#pass").on("input", function () {
        var password = $(this).val().trim();
        var operators = ['!', '@', '$', '%', '&', '*', '.'];
        var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        var hasNumber = false;

        $("#red").css("background-color", "rgb(240, 240, 240)");
        $("#orange").css("background-color", "rgb(240, 240, 240)");
        $("#yellow").css("background-color", "rgb(240, 240, 240)");
        $("#green").css("background-color", "rgb(240, 240, 240)");

        if (password.length < 8 && password.length >= 1) {
            $("#red").css("background-color", "red");
        }

        if (password.length >= 8) {
            $("#red").css("background-color", "red");
            $("#orange").css("background-color", "orange");
        }

        if (password.length > 8) {
            for (let i = 0; i < operators.length; i++) {
                if (password.includes(operators[i])) {
                    $("#yellow").css("background-color", "yellow");
                    hasNumber = true;
                    break;
                }
                hasNumber = false;
            }
        }
        if (password.length > 8 && hasNumber == true) {
            for (let i = 0; i < numbers.length; i++) {
                if (password.includes(numbers[i])) {
                    $("#green").css("background-color", "green");
                    break;
                }
            }
        }
    })
    $("#myButton").click(function () {
        let name = $("#name").val();
        var orangeBack = $("#orange").css("background-color");
        if ($("#name").val().trim() == "" || $("#email").val().trim() == "" || $("#pass").val().trim() == "") {
            alert("Fill required sections");
        }
        else {
            if (orangeBack == "rgb(255, 165, 0)") {
                if ($("#email").val().includes("@gmail.com")) {
                    alert(`Welcome ${name}`);
                    location.reload();
                }
                else {
                    alert("Email is incorrect");
                }
            }
            else {
                alert("Enter stronger password");
            }
        }
    });
})