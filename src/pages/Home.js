import React from 'react'
import ItemList from '.././components/ItemsContainer/ItemList'
import Banner from '../components/Banner'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
        <Banner />
        <Categories />
        <ItemList />
        <img src='https://cdn.shopify.com/s/files/1/0526/4123/5093/files/BASE-Banner-DESK-ago22_1800x.jpg?v=1660866740' alt=''  className='p-5'/>
    </div>
  )
}

export default Home