import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
   <>
        <nav
            class="navbar navbar-expand-sm navbar-light bg-light"
        >
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/contactus" aria-current="page"
                                >Contac us</Link>
                                
                            
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="aboutus" style={({isActive})=>{
                                if(isActive){
                                    return {
                                        color:'red',
                                        border:'1px solid'
                                    }
                                }
                            }}
                            //or
                            //  className={({isActive})=>(isActive)?'bg-susess':''

                            // }
                            >about us</NavLink>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="product">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="movie">Movies</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="movieDetails">MoviesDetails</Link>
                        </li>
                       
                    </ul>
                    <form class="d-flex my-2 my-lg-0">
                        <input
                            class="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
        
        </>
  )
}
