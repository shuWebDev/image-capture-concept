

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);



document.querySelector("#start-camera").addEventListener("click", () => {
  webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
  });
});

document.querySelector("#stop-camera").addEventListener("click", () => {
  webcam.stop();
});

document.querySelector("#snapshot").addEventListener("click", () => {
  let photo = webcam.snap();
  document.querySelector("#download-photo").href = photo;
});