import React from 'react';

function HatList(props) {

    return (
        <div className="shoe-list">
            <h1 className="title" align="center">Hats</h1>
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Fabric</th>
                            <th>Style</th>
                            <th>Color</th>
                            <th>Closet Name</th>
                            <th>Section Number</th>
                            <th>Shelf Number</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.hats.map(hat => {
                            return (
                                <tr key={ hat.id }>
                                    <td><img src={ hat.picture } height={100}/></td>
                                    <td>{ hat.fabric }</td>
                                    <td>{ hat.style }</td>
                                    <td>{ hat.color }</td>

                                    <td>{ hat.location.closet_name }</td>
                                    <td>{ hat.location.section_number }</td>
                                    <td>{ hat.location.shelf_number }</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => props.delete(hat)}>X</button>
                                    </td>
                                </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    );
}

export default HatList;
