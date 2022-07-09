import React from 'react';

function ShoeList(props) {

    return (
        <div className="shoe-list">
            <h1 className="title" align="center">Shoes</h1>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Manufacturer</th>
                            <th>Model</th>
                            <th>Color</th>
                            <th>Closet</th>
                            <th>Bin Number</th>
                            <th>Bin Size</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.shoes.map(shoe => {
                            return (
                                <tr key={ shoe.id }>
                                    <td><img src={ shoe.picture_URL } width={150}/></td>
                                    <td>{ shoe.manufacturer }</td>
                                    <td>{ shoe.model_name }</td>
                                    <td>{ shoe.color }</td>
                                    <td>{ shoe.bin.closet_name }</td>
                                    <td>{ shoe.bin.bin_number }</td>
                                    <td>{ shoe.bin.bin_size }</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => props.delete(shoe)}>REMOVE</button>
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