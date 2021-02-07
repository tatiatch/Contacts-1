import React from 'react'

export default  function Header (props){
   return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            </div>
        </div>
        </nav>
   )
}



