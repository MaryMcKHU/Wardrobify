import React from 'react';

function ShoeList(props) {
    console.log(props)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model Name</th>
                    <th>Color</th>
                    <th>Image</th>
                    <th>Closet Name</th>
                    <th>Bin Number</th>
                    <th>Bin Size</th>
                </tr>
            </thead>
            <tbody>
                {console.log(props.data.shoes)}
                {props.data.shoes.map(shoe => {
                    return (
                        <tr key={ shoe.id }>
                            <td>{ shoe.manufacturer }</td>
                            <td>{ shoe.model_name }</td>
                            <td>{ shoe.color }</td>
                            <td><img src={ shoe.picture_URL }/></td>
                            <td>{ shoe.bin.closet_name }</td>
                            <td>{ shoe.bin.bin_number }</td>
                            <td>{ shoe.bin.bin_size }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default ShoeList;