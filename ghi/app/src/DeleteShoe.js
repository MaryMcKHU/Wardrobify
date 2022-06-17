import React from 'react';

class DeleteShoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: []
        };
        
        this.handleShoeChange = this.handleShoeChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleShoeChange(event) {
        const value = event.target.value
        this.setState({shoe: value})
    }

    async handleDelete(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.shoes;

        const shoeId = this.state.shoe; 
        const shoeUrl = `http://localhost:8080/api/shoes/${shoeId}`;
        const fetchConfig = {
            method: "delete",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(shoeUrl, fetchConfig);
        if (response.ok) {
            console.log('deleted successfully')
            const cleared = {
                shoe: '',
            }
            this.setState(cleared)
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8080/api/shoes/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({shoes: data.shoes});
        }
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Delete a shoe</h1>
                    <form onSubmit={this.handleDelete} id="delete-shoe-form">
                    <div className="form-floating mb-3">
                        <select onChange={this.handleShoeChange} placeholder="Shoe" 
                        required type="text" name="shoe" 
                        className="form-select" value={this.state.shoe}>
                        <option value="">Shoe</option>
                        {this.state.shoes.map(shoe => {
                            return (
                                <option key={shoe.id} value={shoe.id}> {shoe.id} </option>
                            );
                        })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Delete</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }

}

export default DeleteShoe;
