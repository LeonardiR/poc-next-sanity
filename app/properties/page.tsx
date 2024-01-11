import React from 'react';
import Image from 'next/image';
import { Property } from '@/types/property';
import { getProperties } from '../../sanity/lib/sanity.query';

async function Properties() {
    const properties: Property[] = await getProperties();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <div>
            <h1 className='text-center text-3xl mb-8'>PROPERTIES</h1>
            {properties && properties.map((property) => (
            <div className="grid grid-rows-1 grid-flow-col gap-4 items-center">
                <div className="row-span-3" key={property._id}>
                <Image
                        className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                        src={property.thumb.image}
                        width={400}
                        height={400}
                        quality={100}
                        alt={property.thumb.alt}
                    />
                </div>
                <div className="row-span-8 col-span-12">
                    <h1>
                    Name of the property: <strong>{property.name}</strong>
                    </h1>
                    <h2>
                    Adress: <strong>{property.address}</strong> 
                    </h2>
                    <h3>
                    Bedrooms #: <strong>{property.bedrooms}</strong> 
                    </h3>
                    <h3>
                    Bathrooms #: <strong>{property.bathrooms}</strong> 
                    </h3>
                    <h3>
                    Size: <strong>{property.size}</strong> 
                    </h3>
                    <h3>
                    Proce: <strong>{property.price}$</strong> 
                    </h3>
                </div>
            </div>
                
            ))}
        </div>
        </main>
    )
}

export default Properties