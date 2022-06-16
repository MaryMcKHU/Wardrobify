import React from 'react';

class ShoeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            manufacturer: '',
            modelName: '',
            color: '',
            pictureURL: '',
            bins: []
        };
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
        this.handleModelNameChange = this.handleModelNameChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handlePictureURLChange = this.handlePictureURLChange.bind(this);
        this.handleBinChange = this.handleBinChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturer: value})
    }

    handleModelNameChange(event) {
        const value = event.target.value;
        this.setState({modelName: value})
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value})
    }

    handlePictureURLChange(event) {
        const value = event.target.value;
        this.setState({pictureURL: value})
    }

    handleBinChange(event) {
        const value = event.target.value;
        this.setState({bin: value})
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/bins/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ bins: data.bins });
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.model_name = data.modelName;
        data.picture_URL = data.pictureURL;
        delete data.modelName;
        delete data.pictureURL;
        delete data.bins;
        console.log("data", data);

        const shoeUrl = "http://localhost:8080/api/shoes/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(shoeUrl, fetchConfig);
        if (response.ok) {
            const newShoe = await response.json();
            console.log(newShoe);

            const cleared = {
                manufacturer: '',
                modelName: '',
                color: '',
                pictureURL: '',
                bin: ''
            }
            this.setState(cleared);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new shoe</h1>
                    <form onSubmit={this.handleSubmit} id="create-shoe-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleManufacturerChange} placeholder="Manufacturer" 
                        required type="text" name="name" 
                        id="manufacturer" className="form-control" value={this.state.manufacturer}/>
                        <label htmlFor="manufacturer">Manufacturer</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleModelNameChange} placeholder="ModelName" 
                        required type="text" name="modelName" 
                        id="modelName" className="form-control" value={this.state.modelName}/>
                        <label htmlFor="modelName">Model Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleColorChange} placeholder="Color" required 
                        type="text" name="color" id="color" className="form-control" value={this.state.color}/>
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                        <label htmlFor="picture_url" className="form-label">Picture URL</label>
                        <input className="form-control" name="description" id="description" type="text"
                        onChange={this.handlePictureURLChange} value={this.state.pictureURL}>
                        </input>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleBinChange} required id="bin" 
                        className="form-select" name="bin" value={this.state.bin}>
                        <option value="">Bin</option>
                        {this.state.bins.map(bin => {
                            return (
                                <option key={bin.id} value={bin.id}> {bin.href} </option>
                            );
                        })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }

}

export default ShoeForm;