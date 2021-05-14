import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router-dom'
//component
import GoodsEachContainer from '../goodsContainer/GoodsEachContainer';
import PopupBuyContainer from '../popupBuy/PopupBuyContainer'
//css
import '../../componentscss/goodsContainer/goodsContainer.css';
import '../../componentscss/goodsContainer/goodsContainer.css';
//img
import lolgoods1 from '../../assets/imgs/lolgoods1.jpeg';
import lolgoods2 from '../../assets/imgs/lolgoods4.jpeg';
import lolgoods3 from '../../assets/imgs/lolgoods5.jpeg';
import lolgoods4 from '../../assets/imgs/lolgoods3.jpeg';
function GoodsContainer(props) {
  const [changeClickF, setChangeClickF] = useState(false)
  const [goodsId, setGoodsId] = useState()

  const scrollStopMoment = useCallback((e) => {
    e.preventDefault()
  }, [])

  const itemarr = [
    {
      id: 1,
      itemName: "에어팟 내 안에 있소",
      itemSubName: "에어팟 ",
      itemImgSrc: lolgoods1,
      itemPrice: '13000원',
      itemCategory: ['케이스', '알리스타']
    },
    {
      id: 2,
      itemName: "티모대위 모자 챙겨",
      itemSubName: "티모모자 ",
      itemImgSrc: lolgoods2,
      itemPrice: '22000원',
      itemCategory: ['모자', '티모']
    },
    {
      id: 3,
      itemName: "나 두고 가는거야",
      itemSubName: "아무무컵",
      itemImgSrc: lolgoods3,
      itemPrice: '22000원',
      itemCategory: ['컵', '아무무']
    },
    {
      id: 4,
      itemName: "짜잔 내가 돌아왔다",
      itemSubName: "잭스피규어",
      itemImgSrc: lolgoods4,
      itemPrice: '22000원',
      itemCategory: ['피규어', '잭스']
    },
  ]
  
  useEffect(() => {
    
    if(changeClickF == true) 
    {
      let goodsContent
      //클릭된 굿즈를 찾는다
      itemarr.filter((item) => {
        if(item.id == goodsId) {
          return (
            goodsContent = item
          )
        }
      })
      //클릭된 굿즈의 정보를 해당 페이지로 넘겨준다
      props.history.push({
        pathname: '/saleGoods',
        state: {
          enter: 'saleGoods',
          goodsContent: goodsContent
        }
      })
      //document.body.classList.add("asdf")
      //document.body.childNodes[1].childNodes[0].addEventListener('mousewheel', scrollStopMoment)
      //ReactDOM.render(
      //  <PopupBuyContainer props={itemarr} goodsId={goodsId} />, 
      //  document.body.childNodes[3]
      //)
      
    }
    else
    {
      //document.body.classList.remove("asdf")
      //document.body.childNodes[1].childNodes[0].removeEventListener('mousewheel', scrollStopMoment)
    }
      
  },[changeClickF])

  document.body.childNodes[1].addEventListener('click', () => {
    document.body.childNodes[1].childNodes[0].removeEventListener('mousewheel', scrollStopMoment)
  })
  
  return (
    <>
      <div className="goodsContainer">
        <div className="goodsContainer__eachTagContainer">
          <div className="goodsContainer__eachTagContainer_titleCon">
            <h1>인기 굿즈</h1>
          </div>
          <div className="goodsContainer__eachTagContainer_goodsCon">
            {
              itemarr.map((item) => {
                return (
                  <GoodsEachContainer changeGoodsId={setGoodsId} changeClickVal={changeClickF} changeClick={setChangeClickF} key={item.id} props={item} />
                )
              })
            }
          </div>
          <div className="goodsContainer__eachTagContainer_viewMore">
            <div className="goodsContainer__eachTagContainer_viewMore_tagName">
              <span>인기 굿즈 더보기</span>
            </div>
          </div>
          
        </div>
        <div className="goodsContainer__eachTagContainer">
          <div className="goodsContainer__eachTagContainer_titleCon">
            <h1>새로 나온 굿즈</h1>
          </div>
          <div className="goodsContainer__eachTagContainer_goodsCon">
            {
              itemarr.map((item) => {
                return (
                  <GoodsEachContainer changeGoodsId={setGoodsId} changeClick={setChangeClickF} changeClickVal={changeClickF} key={item.id} props={item} />
                )
              })
            }
          </div>
          <div className="goodsContainer__eachTagContainer_viewMore">
            <div className="goodsContainer__eachTagContainer_viewMore_tagName">
              <span>새로 나온 굿즈 더보기</span>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default React.memo(withRouter(GoodsContainer))
