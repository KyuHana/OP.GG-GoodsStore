import React from 'react'
import '../../componentscss/soonGoodsEachContainer/soonGoodsEachContainer.css'

function SoonGoodsEachContainer({props}) {
  return (
    <div className="soonGoodsEachContainer">
      <div className="wrapDiv">
        <div className="soonGoodsEachContainer__showDateRelease">
          <div>
            <h2>출시예정일</h2>
          </div>
          <div>
            <h2 style={{color: "rgb(83, 132, 232)", fontFamily:"notoSansBold"}}>{props.releaseDate}</h2>
          </div>
        </div>
        <div className="soonGoodsEachContainer__contentShow">
          <div className="soonGoodsEachContainer__imageContainer">
            <img src={props.imgSrc} width="100%" height="300px" />
          </div>
          <div className="soonGoodsEachContainer__introContainer">
            <div className="soonGoodsEachContainer__descContainer">
              <div className="soonGoodsEachContainer__descContainer_titleContainer">
                <h2>{props.itemTitle}</h2>
              </div>
              <div className="soonGoodsEachContainer__descContainer_subTitleContainer">
                <div>{props.itemDesc}</div>
              </div>
            </div>
            <div className="soonGoodsEachContainer__showOption">
              <div className="soonGoodsEachContainer__showOption__like">
                <div className="soonGoodsEachContainer__showOption__like_tagName">
                  <h3>좋아요</h3>
                </div>
              </div>
              <div className="soonGoodsEachContainer__showOption__share">
                <div className="soonGoodsEachContainer__showOption__shere_tagName">
                  <h3>공유하기</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoonGoodsEachContainer
