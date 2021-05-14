import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import {withRouter} from 'react-router-dom';
//css
import '../../componentscss/wholeHome/wholeHome.css';
import '../../componentscss/saleGoodsContainer/saleGoodsContainer.css'
//query
import { CREATE_USER } from '../../Graphql/Mutation';
//component
import Navbar from '../../Components/navbar/Navbar'
import Homebody from '../../Components/homeBody/Homebody'
import ShowMoreNavBar from '../../Components/showMoreNavBar/ShowMoreNavBar'
import ImageSlider from '../imageSlider/ImageSlider'
//fontawseom
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

function SaleGoodsContainer(props) {
  const [createUser, { error }] = useMutation(CREATE_USER)
  const [showMenuBar, setShowMenuBar] = useState(false)
  const [flowScroll, setFlowScroll] = useState(false)
  const pointShowMoreBar = useRef()
  const pointBody = useRef()
  const goodsContent = props.location.state.goodsContent//클릭된 굿즈 이미지 가져오기
  console.log(goodsContent)
  const scrollStop = useCallback((e) => { //removeEventListener를 사용할려면 동일한 함수로 인식해야하는데 state가 바뀔때마다 함수가 재생성되어 같은 함수라고 인식하지 않아 event가 지워지지 않는 에러가 발생
    console.log(e)
    e.preventDefault()
  }, [])

    document.addEventListener('scroll', () => {
      let scrollPosition = document.documentElement.scrollTop
      console.log(scrollPosition)
      if(scrollPosition > 60) 
      {
        setFlowScroll(true)
      }
      else 
      {
        setFlowScroll(false)
      }
    })

    document.body.childNodes[1].addEventListener('click', () => {
      document.body.classList.remove("asdf")

    })

  //  useEffect(() => {
  //    if(changeClickF == true) 
  //    {
  //      pointPurchaseButton.current.classList.add('clicked')
  //    }
  //    else 
  //    {
  //      pointPurchaseButton.current.classList.remove('clicked')
  //    }
  //  },[changeClickF])
  
  useEffect(() => {
    console.log(document.body.childNodes[1].childNodes[0])
  })

  useEffect(() => {
    if(showMenuBar == true) {
      pointShowMoreBar.current.classList.add("click")
      pointBody.current.addEventListener('mousewheel', scrollStop, true)
    }
    else if(showMenuBar == false)  {    
      pointShowMoreBar.current.classList.remove("click")
      pointBody.current.removeEventListener('mousewheel', scrollStop, true)
    }
  }, [showMenuBar])

  return (
    <div ref={pointBody} className="wholeHomeContainer">
      <div className="homeContainer">
        <Navbar scrollVal={flowScroll} showMoreFunc={setShowMenuBar} />
        <div className="saleGoodsContainer">
          <div className="saleGoodsContainer__image">
            <ImageSlider goodsContent={goodsContent} />
          </div>
          <div className="saleGoodsContainer__desc">
            <div className="wrapSaleGoodsContainerTitle">
              <div className="saleGoodsContainer__desc_title">
                <h1>{goodsContent.itemName}</h1>
              </div>
              <div className="saleGoodsContainer__desc_subTitle">
                <h3>{goodsContent.itemSubName}</h3>
              </div>
              <div className="saleGoodsContainer__desc_goodsPrice">
                <h4>{goodsContent.itemPrice}</h4>
              </div>
            </div>
            <div className="wrapSaleGoodsContainerIcon">
              <div className="wrapSaleGoodsContainerIcon__heart">
                <FontAwesomeIcon icon={faHeart} className="heartIcon" />
              </div>
              <div className="wrapSaleGoodsContainerIcon__share">
                <FontAwesomeIcon icon={faShare} className="shareIcon" />
              </div>
            </div>
          </div>
          <div className="saleGoodsContainer__react">
            
          </div>

        </div>
        
      </div>
      <div className="clickPurchaseBar">
        <h1>주문하기</h1>
      </div>
      <div ref={pointShowMoreBar} className="showMoreBar">
        <ShowMoreNavBar />
      </div>
    </div>
    
  )
}

export default React.memo(withRouter(SaleGoodsContainer))