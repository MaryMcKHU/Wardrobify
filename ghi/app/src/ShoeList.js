import React from 'react';

function ShoeList(props) {

    return (
        <div className="shoe-list">
            <h1>Shoes</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Manufacturer</th>
                            <th>Model Name</th>
                            <th>Color</th>
                            <th>Image</th>
                            <th>Closet Name</th>
                            <th>Bin Number</th>
                            <th>Bin Size</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.shoes.map(shoe => {
                            return (
                                <tr key={ shoe.id }>
                                    <td>{ shoe.manufacturer }</td>
                                    <td>{ shoe.model_name }</td>
                                    <td>{ shoe.color }</td>
                                    <td><img src={ shoe.picture_URL } width={150}/></td>
                                    <td>{ shoe.bin.closet_name }</td>
                                    <td>{ shoe.bin.bin_number }</td>
                                    <td>{ shoe.bin.bin_size }</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => props.delete(shoe)}>X</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        </div>
    );
}

export default ShoeList;