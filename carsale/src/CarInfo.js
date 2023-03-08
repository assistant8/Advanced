import React from "react";

const items = [
    { carName: "Granduer", carPrice: 4500, carDetail: "graceful" },
    { carName: "BMW", carPrice: 7800, carDetail: "functional high" },
    { carName: "Benz", carPrice: 9200, carDetail: "gorgeous" },
    { carName: "Sonata", carPrice: 2000, carDetail: "friendly" },
    { carName: "Genesis", carPrice: 6700, carDetail: "popular" },
];

const CarInfoItem = ({item}) => {
    return (
        <div>
            <span>
                {item.carName} {item.carPrice} {item.carDetail}
            </span>
        </div>
    )
}

const CarInfo = () => {
    return (
        <div>
            <h1>Car Information</h1>
            <div>
                {items.map((e,i)=>{ //e는 배열 한줄씩
                    return <CarInfoItem item={e}/>
                })}
            </div>
        </div>        
    )
}
    

export default CarInfo;