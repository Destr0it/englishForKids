const url = "https://my-json-server.typicode.com/Destr0it/englishForKids/cards";
const speech = window.speechSynthesis;

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
    speakNow(data.word+"");
}

function speakNow(text){
    if ("speechSynthesis" in window) {
      const msg = new SpeechSynthesisUtterance();
      const voices = speech.getVoices();
      msg.voice = voices[1];
      msg.lang = "en-US";
      msg.text = text;
      window.speechSynthesis.speak(msg);
    } else {
      alert("Sorry, your browser doesn't support text to speech!");
    }
  };