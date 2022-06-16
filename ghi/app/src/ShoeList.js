import React from 'react';

function ShoeList(props) {

    return (
        <table className="ShoeList">
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
                        <tr key={ props.shoe.id }>
                            <td>{ props.shoe.manufacturer }</td>
                            <td>{ props.shoe.model_name }</td>
                            <td>{ props.shoe.color }</td>
                            {/* <td><img src={ props.shoe.picture_URL }/></td> */}
                            {/* <td>{ props.shoe.bin.bin_number }</td> */}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default ShoeList;