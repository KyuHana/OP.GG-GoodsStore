import React, { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import {withRouter} from 'react-router-dom';
//css
import '../../componentscss/wholeHome/wholeHome.css';
//query
import { CREATE_USER } from '../../Graphql/Mutation';
//component
import Navbar from '../../Components/navbar/Navbar';
import ShowMoreNavBar from '../../Components/showMoreNavBar/ShowMoreNavBar';
import HowGoodsContainer from '../../Components/howGoodsContainer/HowGoodsContainer';

function HowGoods(props) {
  const [createUser, { error }] = useMutation(CREATE_USER);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const pointShowMoreBar = useRef();
  useEffect(() => {
    if(showMenuBar == true) {
      pointShowMoreBar.current.classList.add("click")
    }
    else if(showMenuBar == false)  {
      pointShowMoreBar.current.classList.remove("click")
    }
  }, [showMenuBar])
  return (
    <div className="wholeHomeContainer">
      <div className="homeContainer">
        <Navbar showMoreFunc={setShowMenuBar} />
        <HowGoodsContainer />
      </div>
      <div ref={pointShowMoreBar} className="showMoreBar">
        <ShowMoreNavBar />
      </div>
    </div>
  )
}

export default React.memo(withRouter(HowGoods))