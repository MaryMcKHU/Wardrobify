import React from 'react';

function HatList(props) {

    return (
        <div className="hat-list">
            <h1>Hats</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Fabric</th>
                            <th>Style</th>
                            <th>Color</th>
                            <th>Image</th>
                            <th>Closet Name</th>
                            <th>Section Number</th>
                            <th>Shelf Number</th>
                            <th>Delete Hat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(props)}
                        {props.hats.map(hat => {
                            return (
                                <tr key={ hat.id }>
                                    <td>{ hat.fabric }</td>
                                    <td>{ hat.style }</td>
                                    <td>{ hat.color }</td>
                                    <td><img src={ hat.picture }/></td>
                                    <td>{ hat.location.closet_name }</td>
                                    <td>{ hat.location.section_number }</td>
                                    <td>{ hat.location.shelf_number }</td>
                                    <td className="delete">
                                        <button onClick={() => this.delete(hat.id)}>Delete</button>
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
