const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0; // 現在表示されているスライドのインデックス
const totalSlides = slides.length; // スライドの総数

// スライドの位置を更新する関数
function updateSliderPosition() {
  // 現在のインデックスに基づいて、sliderWrapperを横に移動させる
  // 各スライドは100%の幅を持つため、currentIndex * 100% 分移動
  sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// 「次へ」ボタンのクリックイベント
nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0; // 最後のスライドに達したら最初に戻る
  }
  updateSliderPosition();
});

// 「前へ」ボタンのクリックイベント
prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // 最初のスライドで「前へ」を押したら最後に戻る
  }
  updateSliderPosition();
});

// ページロード時に最初のスライドを表示
updateSliderPosition();
