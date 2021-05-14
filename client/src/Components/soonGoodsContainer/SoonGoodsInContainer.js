import React from 'react'
import SoonGoodsEachContainer from '../soonGoodsContainer/SoonGoodsEachContainer'
//img assets
import lolgoods5 from '../../assets/imgs/lolgoods3.jpeg';
import lolgoods2 from '../../assets/imgs/lolgoods2.jpg';

function SoonGoodsInContainer() {
  const listSoonGoods = [
    {
      id: 1,
      imgSrc: lolgoods5,
      itemTitle: '짜잔~! 내가 돌아왔다',
      itemDesc: '전장에 복귀한 잭스의 미니어쳐를 만나보세요',
      releaseDate: '2021년 6월 25일'
    },
    {
      id: 2,
      imgSrc: lolgoods2,
      itemTitle: '복실복실 포로',
      itemDesc: '따뜻하고 복실복실한 포로를 만나보세요',
      releaseDate: '2021년 6월 23일'
    }
  ]
  return (
    <div>
      {
        listSoonGoods.map((item) => {
          return (
            <SoonGoodsEachContainer props={item} />
          )
        })
      }
      
    </div>
  )
}

export default SoonGoodsInContainer
