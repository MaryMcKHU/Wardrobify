import React from 'react';

function ShoeList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model name</th>
                    <th>Color</th>
                    <th>Image</th>
                    <th>Bin</th>
                </tr>
            </thead>
            <tbody>
                {props.shoes.map(shoe => {
                    return (
                        <tr key={shoe.id}>
                            <td>{ shoe.manufacturer }</td>
                            <td>{ shoe.modelName }</td>
                            <td>{ shoe.color }</td>
                            <td><img src={shoe.picture_URL}/></td>
                            <td>{ shoe.bin.href }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default ShoeList;