import React from 'react';

class DeleteShoe extends Component {
    constructor(props) {
        super(props);
        this.state = { shoes: [] };
    
        this.handleSubmit.bind(this);
    }
    async handleSubmit(event) {
        const data = {...this.state}

        const shoeUrl = `http://localhost:8080/api/shoes/${shoe.id}`;
        const fetchConfig = {
            method: "delete",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
    
        const response = await fetch(shoeUrl, fetchConfig);
            if (response.ok) {
                
}
}