import React, {useEffect, useRef} from 'react'
import '../../componentscss/viewOptionContainer/viewOptionEachTag.css'

function ViewOptionEachTag({tagName, rev, clickFunc, clickVal, id, tagId, tagChangeClass}) {
  const pointATag = useRef(); //a태그를 가리키는 useref 
  const clickTag = (e) => {
    clickFunc(!clickVal)
    tagId.current = e.target.id
  }

  useEffect(() => {
    if(tagChangeClass == true) {
      rev.current.classList.add("bbba");
    } else {
      rev.current.classList.remove("bbba");
    }
  }, [clickVal])
  return (
    <li ref={rev} onClick={(e) => clickTag(e)} className="viewOptionEachTagContainer">
        <span id={id} ref={pointATag} className="viewOptionEachTagContainer__tagName">{tagName}</span>
    </li>
  )
}

export default ViewOptionEachTag
