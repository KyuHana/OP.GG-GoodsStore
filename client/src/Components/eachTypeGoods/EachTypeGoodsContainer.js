import React, {useState, useEffect} from 'react'
import EachTypeGoods from '../eachTypeGoods/EachTypeGoods'
//img
import lolclothes1 from '../../assets/imgs/lolclothes1.jpeg'
import lolclothes2 from '../../assets/imgs/lolclothes2.jpeg'
import lolclothes3 from '../../assets/imgs/lolclothes3.jpeg'
//css
import '../../componentscss/eachTypeGoods/eachTypeGoodsContainer.css'

function EachTypeGoodsContainer({eachSelect}) {
  let typeGoodsArr = []

  if(eachSelect == 1) {
    typeGoodsArr = []
    typeGoodsArr.push(
    {
      id: 1,
      imgSrc: lolclothes1,
      itemTitle: 'clo1',
      itemDesc: 'wear it'
    },
    {
      id: 2,
      imgSrc: lolclothes2,
      itemTitle: 'clo2',
      itemDesc: ''
    },
    {
      id: 3,
      imgSrc: lolclothes3,
      itemTitle: 'clo3',
      itemDesc: ''
    }
    )
  }
  else if(eachSelect == 2) {
    typeGoodsArr = []
    typeGoodsArr.push(
    {
      id: 1,
      imgSrc: lolclothes1,
      itemTitle: 'cloea1',
      itemDesc: 'wear it'
    },
    {
      id: 2,
      imgSrc: lolclothes2,
      itemTitle: 'cloea2',
      itemDesc: ''
    },
    {
      id: 3,
      imgSrc: lolclothes3,
      itemTitle: 'cloae3',
      itemDesc: ''
    }
    )
  }

  return (
    <div className="eachTypeGoodsContainer">
      {
        typeGoodsArr.map((eachGoodsContent) => {
          return (
            <EachTypeGoods eachGoodsContent={eachGoodsContent} />
          )
        })
      }
    </div>
  )
}

export default EachTypeGoodsContainer
