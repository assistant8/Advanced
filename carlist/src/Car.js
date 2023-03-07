import React from 'react';

const item = [
    {carName: "Granduer", carPrice:4500, carDetail: "graceful"},
    {carName: "BMW", carPrice:7800, carDetail: "functional high"},
    {carName: "Benz", carPrice:9200, carDetail: "gorgeous"},
    {carName: "Sonata", carPrice:2000, carDetail: "friendly"},
    {carName: "Genesis", carPrice:6700, carDetail: "popular"},
];

function CarItem({item}, index) {
    return(
        <div>
            <span>
                [{index+1}] {item.carName} {item.carPrice} {item.carDetail}
            </span>
        </div>
    );
}


function Car() {
    return(
        <div>
            <h2>Car List</h2>
            {item.map((e,i)=>{
                <CarItem item={e} index={i} />
            })}
        </div>
    );
}

export default Car;