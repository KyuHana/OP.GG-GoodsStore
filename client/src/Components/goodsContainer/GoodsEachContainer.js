import React, {useState, useEffect} from 'react'
import '../../componentscss/goodsContainer/goodsEachContainer.css';
//component
import Heart from '../Heart/Heart';
import BlueRoundButton from '../button/BlueRoundButton';

function GoodsEachContainer({props, changeClick, changeClickVal, changeGoodsId}) {
  const [changeMotiveHeart, setChangeMotiveHeart] = useState(false);
  const [clickPurchase, setclickPurchase] = useState(false);
  const changeMotionHeart = () => {
    setChangeMotiveHeart(!changeMotiveHeart);
  }

  const changeClickId = () => {
    changeClick(!changeClickVal)
    setclickPurchase(!clickPurchase)
    changeGoodsId(props.id)
  }


  return (
    <div className="goodsEachContainer">
      <div className="goodsEachContainer__inDiv">
        <div className="goodsEachContainer__imgContainer">
          <img src={props.itemImgSrc} width="300px" height= "240px"/>
        </div>
        <div className="goodsEachContainer__DetailOption">
          <div className="wrapDiv">
            <div className="goodsEachContainer__DetailOption_clickTag">
              {
                props.itemCategory.map((item) => {
                  return (
                    <>
                      <span>#</span>
                      <span>{item}</span>
                    </>
                  )
                })
              }
            </div>
            <div className="goodsEachContainer__DetailOption_showTag">
              <div className="goodsEachContainer__DetailOption_showTagTitle">
                <p>{props.itemName}</p>
              </div>
              <div onClick={() => changeMotionHeart()} className="goodsEachContainer__DetailOption_showTagOption">
                <div className="goodsEachContainer__DetailOption_heartIconContainer">
                  <Heart isClick={changeMotiveHeart} />
                </div>
                <span>|</span>
                <div className="goodsEachContainer__DetailOption_showTagOption_price">
                  <p>{props.itemPrice}</p>
                </div>
              </div>
            </div>
            <div onClick={() => changeClickId()} className="goodsEachContainer__DetailOption_clickButton">
              <BlueRoundButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoodsEachContainer
