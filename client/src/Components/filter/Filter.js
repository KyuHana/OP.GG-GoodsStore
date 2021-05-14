import React, {useEffect, useRef, useState} from 'react'
import {withRouter} from 'react-router-dom'
import '../../componentscss/filter/filter.css';
import '../../commoncss/font/font.css';

function Filter(props) {

  const nowSaleFocus = useRef();  //각각의 필터 태그이름
  const soonSaleFocus = useRef(); //각각의 필터 태그이름
  const saleVoteFocus = useRef(); //각각의 필터 태그이름
  const currentId = useRef();
  const [clickId, setClickId] = useState(false);

  const changePathHome = (event) => {
    console.log(1)
    event.preventDefault();
    props.history.push({
      pathname: '/',
      state: {
        enter: 'home'
      }
    })
  }

  const changePathSoon = (event) => {
    console.log(2)
    event.preventDefault();
    props.history.push({
      pathname: '/soon',
      state: {
        enter: 'soon'
      }
    })
  }

  useEffect(() => {
    if(currentId.current == "nowSale") 
    {
      nowSaleFocus.current.classList.add('showBottomBorder');
      soonSaleFocus.current.classList.remove('showBottomBorder');
    }
    else if(currentId.current == "soonSale") 
    {
      nowSaleFocus.current.classList.remove('showBottomBorder');
      soonSaleFocus.current.classList.add('showBottomBorder');
    }
    else if(currentId.current == "saleVote")
    {
      nowSaleFocus.current.classList.remove('showBottomBorder');
      soonSaleFocus.current.classList.remove('showBottomBorder');
    }
  }, [clickId]);
  
  return (
    <div className="filterContainer">
      <div className="filterContainer__sailNow">
        <div className="filterContainer__coverNameContainer">
          <span 
            className="filterContainer__eachCoverName" 
            id="nowSale"
            onClick={(event) => {          
              currentId.current = event.target.id;
              setClickId(!clickId);
              changePathHome(event);
            }}
            ref={nowSaleFocus}
          >
            판매중인 굿즈
          </span>
        </div>
      </div>
      <div className="filterContainer__sailSoon">
        <div className="filterContainer__coverName">
          <span 
              className="filterContainer__eachCoverName" 
              id="soonSale"
              onClick={(event) => {
                currentId.current = event.target.id;
                setClickId(!clickId);
                changePathSoon(event);
              }}
              ref={soonSaleFocus}
          >
            판매예정인 굿즈
          </span>
        </div> 
      </div>

    </div>
  )
}

export default React.memo(withRouter(Filter))
