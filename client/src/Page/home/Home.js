import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import {withRouter} from 'react-router-dom';
//css
import '../../componentscss/wholeHome/wholeHome.css';
//query
import { CREATE_USER } from '../../Graphql/Mutation';
//component
import Navbar from '../../Components/navbar/Navbar'
import Homebody from '../../Components/homeBody/Homebody'
import ShowMoreNavBar from '../../Components/showMoreNavBar/ShowMoreNavBar'

function Home(props) {
  const [createUser, { error }] = useMutation(CREATE_USER)
  const [showMenuBar, setShowMenuBar] = useState(false)
  const [flowScroll, setFlowScroll] = useState(false)
  const pointShowMoreBar = useRef()
  const pointBody = useRef()
  const pointPurchase = useRef()

  const scrollStop = useCallback((e) => { //removeEventListener를 사용할려면 동일한 함수로 인식해야하는데 state가 바뀔때마다 함수가 재생성되어 같은 함수라고 인식하지 않아 event가 지워지지 않는 에러가 발생
    console.log(e)
    e.preventDefault()
  }, [])

  const clearListener = useCallback((e) => {
    console.log(e)
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
        <Homebody />
      </div>
      <div ref={pointShowMoreBar} className="showMoreBar">
        <ShowMoreNavBar />
      </div>
    </div>
    
  )
}

export default React.memo(withRouter(Home))