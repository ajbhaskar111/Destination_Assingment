import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Result from './Result';


const Lodding1 = (props) => {
    
const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '100vh',
};
const center = {
    // lat: props.lat, // default latitude
    // lng: props.lang, // default longitude
    lat : Number(props.mapLat),
    lng : Number(props.mapLang) 
};
    console.log(props)
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDCugcRU5bfsuKHuDajx3jVAk07ruFmFNE',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <section className='py-3'>
            <div className='container'>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>
                    <Marker position={center} />
                </GoogleMap>
            </div>
            {/* <div>
                Lodding1...
            </div> */}
        </section>

    );
};

export default Lodding1;