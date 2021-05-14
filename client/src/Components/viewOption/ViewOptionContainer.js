import React, {useRef, useState, useEffect} from 'react';
//component
import ViewOptionEachTag from '../viewOption/ViewOptionEachTag';
import EachTypeGoodsContainer from '../eachTypeGoods/EachTypeGoodsContainer';
//css
import '../../componentscss/viewOptionContainer/viewOptionContainer.css'
function ViewOptionContainer() {
  const tag1 = useRef();
  const tag2 = useRef();
  const tag3 = useRef();
  const tagId = useRef();
  const tag1ChangeClass = useRef(true);
  const tag2ChangeClass = useRef(false);
  const tag3ChangeClass = useRef(false);

  const [click, setClick] = useState(false);

  const tagobj = [
    {
      id:1,
      tagName: "의류",
      eachref: tag1,
      clickVal: click,
      clickFunc: setClick,
      tagId: tagId,
      tagChangeClass: tag1ChangeClass.current
    },
    {
      id:2,
      tagName: "케이스",
      eachref: tag2,
      clickVal: click,
      clickFunc: setClick,
      tagId: tagId,
      tagChangeClass: tag2ChangeClass.current
    },
    {
      id:3,
      tagName: "데코",
      eachref: tag3,
      clickVal: click,
      clickFunc: setClick,
      tagId: tagId,
      tagChangeClass: tag3ChangeClass.current
    },
    {
      id:4,
      tagName: "케이스",
      eachref: tag2,
      clickVal: click,
      clickFunc: setClick,
      tagId: tagId,
      tagChangeClass: tag2ChangeClass.current
    },
    {
      id:5,
      tagName: "데코",
      eachref: tag3,
      clickVal: click,
      clickFunc: setClick,
      tagId: tagId,
      tagChangeClass: tag3ChangeClass.current
    }
  ]

  useEffect(() => {
    
    if(tagId.current == 1) {
      tag1ChangeClass.current = true
      tag2ChangeClass.current = false
      tag3ChangeClass.current = false

    }
    else if(tagId.current == 2) {
      tag1ChangeClass.current = false
      tag2ChangeClass.current = true
      tag3ChangeClass.current = false

    }
    else if(tagId.current == 3) {
      tag1ChangeClass.current = false
      tag2ChangeClass.current = false
      tag3ChangeClass.current = true
    }
  }, [click])

  if(tag1ChangeClass.current == true) {
  } 
  else if(tag2ChangeClass.current == true) {
  }
  else if(tag3ChangeClass.current == true) {
  }

  return (
    <div className="viewOptionContainer">
      <nav className="viewOptionContainer__nav">
        <ul className="viewOptionContainer__ul">
          {
            tagobj.map((eachTag) => {
              return (
                <ViewOptionEachTag key={eachTag.id} tagId={eachTag.tagId} id={eachTag.id} clickVal={eachTag.clickVal} clickFunc={eachTag.clickFunc} rev={eachTag.eachref} tagName={eachTag.tagName} tagChangeClass={eachTag.tagChangeClass} />
              )
            })
          }
        </ul>
      </nav>
      <div className="viewOptionContainer__showCategoryGoods">
        <div className="viewOptionContainer__showCategoryGoods_inCon">
          <EachTypeGoodsContainer eachSelect={tagId.current} />
        </div>
      </div>
    </div>
  )
}

export default ViewOptionContainer
