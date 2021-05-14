import React, { useEffect } from 'react'
import {withRouter} from 'react-router-dom'
//css
import '../../componentscss/homebody/homebody.css'
//component
import Filter from '../filter/Filter';
import ShowIntro from '../showIntro/ShowIntro';
import SoonGoodsInContainer from '../soonGoodsContainer/SoonGoodsInContainer';

function SoonGoodsContainer(props) {
  useEffect(() => {
  }, [localStorage.getItem("hamburgerClicks")]);
  return (
    <div className="bodyContainer">
      <ShowIntro />
      <Filter />
      <SoonGoodsInContainer />
    </div>
  )
}

export default React.memo(withRouter(SoonGoodsContainer))
