import React from 'react'

const CoinItem = ({coins}) => {
  return (
    <div className='coin-row'>
    <div className='img-symbol'>
        <img src={coins.image} alt='' />
    </div>
        <p>${coins.current_price.toLocaleString()}</p>
        <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>${coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${coins.market_cap.toLocaleString()}</p>
 </div>
  )
}

export default CoinItem