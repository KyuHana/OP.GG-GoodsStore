import React, {useEffect, useRef} from 'react';
//css
import '../../componentscss/heart/heart.css';

function Heart({isClick}) {
  const heartRef = useRef()
  useEffect(() => {
    if(isClick == true) {
      heartRef.current.classList.add("click")
    }
    else {
      heartRef.current.classList.remove("click")
    }
  })
  return (
    <div ref={heartRef} className="heartContainer">
        <div className="heartContainer_bar1"></div>
        <div className="heartContainer_bar2"></div>
        <div className="heartContainer_bar3"></div>
        <div className="heartContainer_bar4"></div>
        <div className="heartContainer_bar5"></div>
        <div className="heartContainer_bar6"></div>
    </div>
  )
}

export default Heart
