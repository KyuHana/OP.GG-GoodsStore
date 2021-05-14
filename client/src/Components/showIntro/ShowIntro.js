import React from 'react';
import {withRouter} from 'react-router-dom'
import '../../componentscss/showIntro/showIntro.css';
import ShowCarousel from '../../Components/showCarousel/ShowCarousel';

function ShowIntro() {
  return (
    <div className="showIntroContainer">
      <ShowCarousel />
    </div>
  )
}

export default React.memo(withRouter(ShowIntro))
