import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navar-brand'>
                    <img src="./images/Alfa5.png" alt='Alfa5 Logo'></img>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-mt-0'>
                <div className="input-group">
                    <input
                        type="text"
                        id="sear_field"
                        class="form-control"
                        placeholder='Que producto esta buscando'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search-plus fa-2x" aria-hidden="true"></i>
                            </button>
                        </div>
                </div>
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <span><button className="btn" id="login-btn">Inicie Sesion</button></span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <i class="fa fa-shopping-cart fa-2x"aria-hidden="true"></i>
                <span className="ml-1" id="cart_count">2</span>
            </div>
        </nav>

    </Fragment>
  )
}

export default Header