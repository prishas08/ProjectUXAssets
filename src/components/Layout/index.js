import SideBar from '../SideBar'
import './index.scss'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div className = 'App'>
        <SideBar />
              <div className = 'page'>
                  <span className = 'tags top-tags'> &lt;body&gt;</span>
                    <Outlet/>
                    <span className = 'tage bottom-tags'>&lt;/body&gt;
                    <br />
                    <span className = 'bottom-tag-html'>&lt;/html&gt;</span>
                    </span>
              </div>
        </div>
        
    )
}

export default Layout