import React from 'react'

const Home = () => {
  return (
    <div> 
             <h1>
                 Creatorships-Business
              </h1>        
            
<div className="container">
    <div className="row py-5 mt-4 align-items-center">        
        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" className="img-fluid mb-3 d-none d-md-block"/>
            <h1>A platform where creativity meet business</h1>
            <p className="font-italic text-muted mb-0">Register as business or creator. As a business you will get to meet new creating ideas. As a creator you will meet new business.</p>
            
        </div>        
        <div className="col-md-7 col-lg-6 ">
            <form action="_blank">
                <div className="row">                     
                <div className="form-group col-lg-12 mx-auto d-flex justify-content-center align-items-center my-4" >
                        <a href="/add-business"  target=' _blank'className="btn btn-primary ">                            
                          Register as Business
                                 
                        </a>
                    </div>
                    <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div class="border-bottom w-100 ml-5"></div>
                        <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div class="border-bottom w-100 mr-5"></div>
                    </div>

                    <div className="form-group col-lg-12 mx-auto d-flex justify-content-center align-items-center my-4">
                        <a href='/add-creator' target='_blank'className="btn btn-primary btn-block py-2">
                            <span className="font-weight-bold" >Register as Creator</span>
                        </a>
                    </div>                
                  </div>
            </form>
        </div>
    </div>
    </div>
    </div>

    
  )
};

export default Home;