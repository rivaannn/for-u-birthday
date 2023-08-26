var musik = "";

AOS.init({
  once: true,
});

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll;";
  setTimeout(function () {
    document.querySelector(".open").style.display = "none";
  }, 1000);
}

function wa(isi) {
  window.open(
    "https://api.whatsapp.com/send?text= thank you for remembering my birthday, i just wanna say,  " +
      isi
  );
}
async function tanya() {
  var { value: kado } = await swal.fire({
    title:
      "Is there a message you want to convey to me and what is the answer to the last question I asked?",
    input: "text",
    showCancelButton: false,
  });
  if (kado) {
    await swal.fire("Send the answer to my whatsapp okay.");
    wa(kado);
  } else {
    await swal.fire("don't leave the answer blank😡 ");
    tanya();
  }
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
