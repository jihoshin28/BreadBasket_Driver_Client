import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
          
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" ><Link to='/orderpage'>Search Orders</Link><span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/'>About</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to='/orderhistory'>Order History</Link></a>
                        </li>
                        <li class="nav-item logout">
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
           
        
          
        )
    }
}

export default Navbar
