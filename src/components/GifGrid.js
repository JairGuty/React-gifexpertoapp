import React from 'react';
import { useFetchGits } from '../hooks/useFetchGits';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const { data:images, loading } = useFetchGits( category );
       
    return (
        <>
            <h3 className= "card animate__animated animate__fadeIn"> { category } </h3>
           { loading && <p className = "card animate__animated animate__flash">Loading...</p>}
            <div className = "card-grid">
                    
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}


