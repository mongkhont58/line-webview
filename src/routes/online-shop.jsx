import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import ico_web from '../assets/images/ico_web.png'
import ico_shopee from '../assets/images/ico_shopee.png'
import ico_lazada from '../assets/images/ico_lazada.png'
import ico_tiktok from '../assets/images/ico_tiktok.png'
import ico_lineshop from '../assets/images/ico_lineshop.png'
import bg_shop from '../assets/images/bg_shop.png'

const initialShop = [
  { name: 'เว็บไซต์', image: ico_web },
  { name: 'Shopee', image: ico_shopee },
  { name: 'Lazada', image: ico_lazada },
  { name: 'TikTok', image: ico_tiktok },
  { name: 'LineShop', image: ico_lineshop },
]

function OnlineShop() {
  return (
    <div className='overflow-x-hidden'>
      <Row className='online-shop-background'>
        {initialShop.map((item, index) => {
          return (
            <Col xs={12} className='online-shop-card '>
              <div className='display-flex align-item-center'>
                <div>
                  <Image src={item.image} alt='ico_web' width='50' />
                </div>
                <div className='pl-10'>
                  <div className='font-12' style={{ color: '#354e9a' }}>
                    สั่งซื้อผ่านทาง
                  </div>
                  <div className='font-bold' style={{ color: '#354e9a' }}>
                    {item.name}
                  </div>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
      <Image src={bg_shop} alt='ico_web' width='100%' />
    </div>
  )
}

export default OnlineShop