const url = "https://my-json-server.typicode.com/Destr0it/englishForKids/cards";

$.ajax({
    url: url,
    success: function (response) {
        console.log(response);
        drawCard(response[0]);
    }
});

function drawCard(data){
    $(".card").html(`
        <img src="${data.img}">
        <hr>
        <h1>${data.translate}</h1>
    `);
}