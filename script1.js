const sunlightSlider = document.getElementById('sunlight-slider');
const waterGauge = document.getElementById('water-gauge');
const wateringCanIcon = document.getElementById('watering-can-icon');
const statusMessage = document.getElementById('status-message');


let waterLevel = 0;
let cactusName = "";


//이미지 전환
  const imgSrcArray = ["선인장1.png", "선인장2.png", "선인장3.png", "선인장4.png"];
  let currentIndex = 0;

  function showImage(direction) {
    currentIndex = (currentIndex + direction + imgSrcArray.length) % imgSrcArray.length;
    const imgContainer = document.getElementById("imgContainer");
    const img = imgContainer.querySelector("img");
    img.src = imgSrcArray[currentIndex];
  }

//다육이 이름 정하기
  window.onload = promptForName;

  function promptForName() {
    cactusName = prompt("당신의 다육이 이름을 지어주세요.");
    if (cactusName) {
      updateCactusStatus();
      statusMessage.innerText = '당신의 다육이 ' + `${cactusName}`;
    }
  }


function updateWaterGauge() {
  waterGauge.value = waterLevel;
  }

function updateCactusStatus() {
  const sunlightValue = sunlightSlider.value;
  let cactusStatus = '';

  if (waterLevel === 0) {
    cactusStatus = cactusName + '은 물이 필요해요.';
  } else if (waterLevel < 40) {
    cactusStatus = cactusName + '은 물이 필요합니다.';
  } else {
    cactusStatus = cactusName + '이 촉촉합니다.';
  }

  if (sunlightValue < 30) {
    cactusStatus += ' 해를 보고싶어요.';
  } else if (sunlightValue > 70) {
    cactusStatus += '햇빛을 즐기고 있어요.';
  }

  statusMessage.innerText = cactusStatus;
}

function waterCactus() {
  if (waterLevel < 100) {
    waterLevel += 20;
    updateWaterGauge();
    updateCactusStatus();
  } else {
    statusMessage.innerText = cactusName + '이 과습으로 죽었습니다.';
  }
}

document.getElementById('sunlight-slider').addEventListener('input', () => {
  // Handle sunlight slider change
  updateCactusStatus();
});

updateCactusStatus();


