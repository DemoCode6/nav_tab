// pages/autarky/autarky.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoucang: true,
    activeindex:0,
    titles:['新品','销量','价格'],
    goodslist:[
      {
        goods_img:'/img/list1.jpg',
        goods_title:'星空面膜',
        goods_price:'49.90',
        goods_sold:'0'
      },
      {
        goods_img: '/img/list2.jpg',
        goods_title: '星空面膜',
        goods_price: '49.90',
        goods_sold: '0'
      },
      {
        goods_img: '/img/list2.jpg',
        goods_title: '星空面膜',
        goods_price: '49.90',
        goods_sold: '0'
      },
      {
        goods_img: '/img/list1.jpg',
        goods_title: '星空面膜',
        goods_price: '49.90',
        goods_sold: '0'
      }
    ],
    goodslist1: [
      {
        goods_img: '/img/list1.jpg',
        goods_title: '星空面膜',
        goods_price: '49.90',
        goods_sold: '0'
      },
      {
        goods_img: '/img/list3.jpg',
        goods_title: '星空面膜',
        goods_price: '49.90',
        goods_sold: '0'
      }
    ],
    goodslist2: [
      {
        goods_img: '/img/list2.jpg',
        goods_title: '星空面膜',
        goods_price: '49.90',
        goods_sold: '0'
      },
      {
        goods_img: '/img/list3.jpg',
        goods_title: '星空面膜',
        goods_price: '49.90',
        goods_sold: '0'
      }
    ]
  },
  shoucang_click(){
    this.setData({
      shoucang: !this.data.shoucang
    })
  },
  headelcilck(event){
    console.log(event)
    const index = event.currentTarget.dataset.index;
    this.setData({
      activeindex: index
    })
  }
})