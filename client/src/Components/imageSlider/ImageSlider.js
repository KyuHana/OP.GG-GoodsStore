import React from 'react'
//css
import '../../componentscss/imageSlider/imageSlider.css'

function ImageSlider({goodsContent}) {
  //자동으로 스크롤 변환
  let counter = 1;
  setInterval(() => {
    document.getElementById('radio' + counter).checked = true
    counter++
    if(counter > 4) {
      counter = 1
    }
  }, 5000)
  return (
    <div className="slider"> 
      <div className="slides">
        {/* 둥근 버튼 */}
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        {/*슬라이드 이미지 시작 */}
        <div className="slide first">
          <img src={goodsContent.itemImgSrc}  />
        </div>
        {/*
        나중에 채워질 이미지 
        */}
        <div className="slide">
          <img src={goodsContent.itemImgSrc} />
        </div>
        <div className="slide">
          <img src={goodsContent.itemImgSrc} />
        </div>
        <div className="slide">
          <img src={goodsContent.itemImgSrc} />
        </div>  
        {/*자동 네비게이션 */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
      </div>
      <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
        <label for="radio4" className="manual-btn"></label>
      </div>
    </div>
  )
}

export default ImageSlider
