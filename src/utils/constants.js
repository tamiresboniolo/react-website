import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Provide high quality furniture with on trend design with honesty, pride, and originality',
  },
    {
    id: 2,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'In our 12 years of solid history, we have reinforced the values we cherish most. In our company, happiness lies in the special service of the seller, in the quality products offered to the consumer',
  },
  {
    id: 3,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'We believe in the Liberty Way, setting high standards and dedication in order to find a way to say yes',
  },

]


// export const products_url = 'https://serveless-func-react-api.netlify.app/api/products'
// export const single_product_url = `https://serveless-func-react-api.netlify.app/api/products?id=`
export const products_url = 'https://course-api.com/react-store-products'
export const single_product_url = `https://course-api.com/react-store-single-product?id=`
