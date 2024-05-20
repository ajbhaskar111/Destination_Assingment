import React, { useState, useEffect, isValidElement } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Lodding1 from './Lodding1';
import Lodding2 from './Loding2';
import Result from './Result';

export default function Header() {
    const [options, setOptions] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [error, setError] = useState(null);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [result, setResult] = useState (null); 


    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/detination_location');
                // console.log(response.data);
                const fetchedOptions = response.data.data.map(item => ({
                    value: item.id,
                    label: item.Des_title,
                    lat : item.Des_latitude_number,
                    lng : item.Des_longitude_number 
                }));
                setOptions(fetchedOptions); 
                setLoading1(false);
            } catch (error) {
                setError(error);
                setLoading1(false);
            }
        };  

        fetchOptions();
    }, []);
    useEffect(() => {
                    if(!loading1 && loading2){
                        setTimeout(()=>{
                            if(loading2){
                                setLoading2(false)
                            }
                        },3000)
                    }
    },[loading1,loading2])
    useEffect ( ()  =>  {
                if (loading2){
            const fetchDestination = async () => {
                const response = await axios.get(`http://127.0.0.1:8000/Destinationdetails_data_api/${to.value}`);
                console.log('Response:', response.data);
                if (response.data){
                    setResult(response.data)
                }
                // Handle the response as needed
            }
            fetchDestination();
        }
    },[loading2])
   useEffect(() => {
        if (loading1){
            setTimeout(()=> {
                   
                if(loading1){
                    console.log('loadding1',loading1) 
                    setLoading1(false)
                    setLoading2(true)
                }
              
            },3000)
        }
   },[loading1])
    const handleSubmit =  (event) => {
        event.preventDefault();
        console.log(to)
        if (from && to) {
            // try {
                setLoading1(true)
               
               
               
              
            // } catch (error) {
            //     console.error('Error:', error);
            //     // Handle the error as needed
            // }
            
        } else {
            console.error('Please select both "From" and "To" destinations.');
        }
        if (from === to){
          setTo(isValidElement)
          alert('From and To both value is same')
        }
        
             
    };

    // if (loading) return <p>Loading options...</p>;
    if (error) return <p>Error loading options: {error.message}</p>;
    console.log('results',result)
    return (
        
        <>
            <section className='py-5  mb-4 card border-0 shadow-sm bg-black'>
                <div className='container'>
                    <h1 className='card-title text-primary text-uppercase text-center mb-4'>Destination Search Panel</h1>
                    <div className='row'>
                        <div className='col-lg-8 col-md-10 col-sm-12 m-md-auto'>
                            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="from_select" className='label text-light'>From</label>
                                    <Select 
                                        options={options} 
                                        value={from} 
                                        onChange={setFrom} 
                                        isClearable 
                                        required 
                                        name='from' 
                                        id="from_select" 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="to_select" className='label text-light'>To</label>
                                    <Select 
                                        options={options} 
                                        value={to} 
                                        onChange={setTo} 
                                        isClearable 
                                        required 
                                        name='to' 
                                        id="to_select"
                                    />
                                </div>
                                <div className="col-lg-8 col-md-10 col-sm-12 m-md-auto text-center mt-3">
                                    <button className="btn btn-md btn-success px-5 py-3 w-50" type="submit" >Destination</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            
            
            </section>
            {loading1 && <Lodding1 lat ={to.lat} lang = {to.lng}/>}
            {loading2 && <Lodding2 lat1 ={to.lat} lang1 = {to.lng}/>}
            {result && !loading1 && !loading2 && <Result destinationDetail= {result}/> }

        </>
        
    );
}
