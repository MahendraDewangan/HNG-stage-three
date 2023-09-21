
import './Header.css'

export const Header = () => {
    
    return (
      <>
        
        <header >
          <div className="container flexSB">
            <nav className='flexSB navbar'>
              <div className="logo">
                <a href="/"><img src="./images/logo-rm.png" alt="" className="header_logo" /></a>
                
              </div>
              <div className="search-bar">
                <input type="text" placeholder='Search' />
                <i className="fa fa-search search-magnifying-glass" ></i>
  
              </div>
              <div className='flexSB menu'>
                <div className="menu-btn">
                  <a href="/"><i class="fa fa-user"></i></a>
                </div>
                <div className="menu-btn">
                  <a href="/"><i class="fa fa-plus"></i></a>
                </div>
              </div>
            </nav>
  
          </div>
        </header>
      </>
    )
  }
