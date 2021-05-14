import React, { useEffect, useState } from 'react'
import {withRouter} from 'react-router-dom'
//css
import '../../componentscss/homebody/homebody.css'
//component
import Filter from '../filter/Filter';
import ShowIntro from '../showIntro/ShowIntro';
import GoodsContainer from '../goodsContainer/GoodsContainer';
import EndIntro from '../endIntro/EndIntro';


function Homebody(props) {
  useEffect(() => {

  }, [localStorage.getItem("hamburgerClicks")]);

  return (
    <div className="bodyContainer">
      <ShowIntro />
      <Filter />
      <GoodsContainer />
      <EndIntro />
    </div>
  )
}

export default React.memo(withRouter(Homebody))
