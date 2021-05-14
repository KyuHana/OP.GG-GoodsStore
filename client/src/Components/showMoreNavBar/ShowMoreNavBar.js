import React, {useEffect, useRef, useState} from 'react';
import {withRouter} from 'react-router-dom';
//component
import ShowMoreGoodsType from '../showMoreNavBar/ShowMoreGoodsType';
//css
import '../../componentscss/showMoreNavBar/showMoreNavBar.css';

function ShowMoreNavBar() {
  const pointCategory = useRef();
  const [clickCategory, setClickCategory] = useState(false);
  
  useEffect(() => {
    if(clickCategory == true) {
      pointCategory.current.classList.add("click")
    } 
    else if(clickCategory == false) {
      pointCategory.current.classList.remove("click")
    }
  }, [clickCategory])
  return (
    <div className="showMoreNavBar">
      <div className="wrapBox">
        <div className="showMoreNavBar__EachContainer">
        <div className="showMoreNavBar__Eachontainer_title">
          <h2>로그인하기</h2>  
        </div>
      </div>
        <div className="showMoreNavBar__EachContainer">
        <div onClick={() => setClickCategory(!clickCategory)} className="showMoreNavBar__EachContainer_title">
          <h2>카테고리</h2>
        </div>
      </div>
      </div>
      <div ref={pointCategory} className="showMoreNavBar__viewGoodsType">
          <ShowMoreGoodsType />
      </div>
    </div>
  )
}

export default React.memo(withRouter(ShowMoreNavBar))
