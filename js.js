const url = "https://my-json-server.typicode.com/Destr0it/englishForKids/cards";

$.ajax({
    url: url,
    success: function (response) {
        console.log(response);
    }
});