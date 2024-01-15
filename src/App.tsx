import { observer } from 'mobx-react-lite';
import './Styles/App.scss';
import { Header } from './components/header/header';
import { Outlet, useLocation} from 'react-router-dom';

export const  App = observer(() => {
  const location = useLocation().pathname;
  const shouldShowMain = location.includes('rules') || location.includes('inputs');

  return (
    <div className='app'>
      <div className="layer">
        <div className="container">
          <Header />
          {shouldShowMain && <div className="mainChar"></div>}
          <section 
            className="content"
          >
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  )
})