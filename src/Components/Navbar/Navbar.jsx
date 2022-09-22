import React from "react"
import Cartwidget from "../CartWidget/Cartwidget";
import '../Navbar/Navbar.css';
 
const Navbar = () => {
    return(
        <div>
            
  <nav className ="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF84fh09XZmqqc_uSNZNfNOaW6uSs7ahIrHQ&usqp=CAU" width="120px" alt="/" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Carteras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Mochilas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Bandoleras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Billeteras</a>
        </li>     
                                   
      </ul>
      <a className="nav-link active" aria-current="cart" href="/"> <Cartwidget /> </a>
    </div>
  </div>
</nav>


        </div>
    )
}

export default Navbar ;