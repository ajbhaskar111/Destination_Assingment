import React from 'react'
import Lodding1 from './Lodding1';
import Lodding2 from './Loding2';


export default function Result(props) {
  console.log(props.destinationDetail)

  return (
    <section className='container-fluid '>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className='card mb-3 border-0 shadow-sm'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <Lodding1 mapLat = {props.destinationDetail.data.Des_latitude_number} mapLang = {props.destinationDetail.data.Des_longitude_number}/>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'> <Lodding2 mapLat1 = {props.destinationDetail.data.Des_latitude_number} mapLang1 = {props.destinationDetail.data.Des_longitude_number}/></div>
              </div>
            </div>
          </div>
          <div className='card mb-3 border-0 shadow'>
            <div className='card-body'>
            <div className='row'>
               <div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
                  <h4 className="card-title text-center fw-bold text-uppercase text-primary">Destination To Details</h4>
               </div>
               <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='row'>
                    {props.destinationDetail.data.images.map((item) => {
                        return (
                          <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className="card shadow-sm border-0" >
                              <div className='img_box'>
                                  <img src={item.Desimage} class="card-img-top img-fluid" />
                              </div>
                              
                                <div className="card-body">
                                  <h5 className="card-title">{props.destinationDetail.data.Des_title}</h5>
                                  <p className="card-text">{item.Des_description}</p>
                                  
                                </div>
                              </div>
                                                         
                          </div>
                        );
                      })}
                    </div>
                </div>  
              
              </div>
            </div>
            </div>
           
          </div>

        </div>
       
      </div>
    </section>
  )
}
