import ShopItemFunc from './components/ShopItemFunc';
import './App.css';

export const App = () => {
	return (
	<div className = 'App'>
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
    </div>
  )
};