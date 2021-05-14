import React, {useEffect, useState, useRef} from 'react'
//css
import '../../componentscss/popupBuy/popupBuyContainer.css'
//componenent
import Navbar from '../navbar/Navbar'
import PopGoodsImageCon from './popupGoodsImageCon/PopGoodsImageCon'
import PopupGoodsShowReact from './popupGoodsShowReact/PopupGoodsShowReact';

function PopupBuyContainer({props, goodsId}) {
  const [startDraw, setStartDraw] = useState(false)
  let setGoodsClick;  
  console.log(props)
  console.log(goodsId)
  return (
    <>
      <div className="popupBuyContainer">
        <div class="popupBuy_screen">
          <div className="popupGoodsImageCon">
            <PopGoodsImageCon />
          </div>
          <div className="popupGoodsShowReact">
            <PopupGoodsShowReact />
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupBuyContainer
