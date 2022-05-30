import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// Domain :  dev-s0ime6ch.us.auth0.com
// Client ID : heYEs1l83uXO1VJBqBjUizO5AT19jO2G

//adding the providers and put the app between it 
//so everywhere in the app we have access for that provider
ReactDOM.render(
  <Auth0Provider
    // domain={process.env.REACT_APP_AUTH_DOMAIN}
    // clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    domain='dev-s0ime6ch.us.auth0.com'
    clientId='heYEs1l83uXO1VJBqBjUizO5AT19jO2G'
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>  
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
, document.getElementById('root'))
