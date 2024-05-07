import {Component} from 'react';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: 'Choose',
            acceptRules: false,
            submitted: false,
        };
    }

    changeInputHandler = (key, value) => {
        this.setState({[key]: value})
    }

    submitFormHandler = (e) => {
        this.changeInputHandler('submitted', true);
        e.preventDefault();
    }

    getForm = () => (
        <form name="myForm" onSubmit={this.submitFormHandler}>
            <div className="col-md-6 mb-3">
                <label htmlFor="email" className="col-form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={({target: {value}}) => this.changeInputHandler('email', value)}
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="password" className="col-form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={({target: {value}}) => this.changeInputHandler('password', value)}
                />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="address" className="col-form-label">Address</label>
                <textarea
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="1234 Main St"
                    value={this.state.address}
                    onChange={({target: {value}}) => this.changeInputHandler('address', value)}
                ></textarea>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="city" className="col-form-label">City</label>
                <input
                    type="text"
                    className="form-control"
                    name="city"
                    id="city"
                    value={this.state.city}
                    onChange={({target: {value}}) => this.changeInputHandler('city', value)}
                />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="country" className="col-form-label">Country</label>
                <select
                    id="country"
                    name="country"
                    className="form-control"
                    value={this.state.country}
                    onChange={({target: {value}}) => this.changeInputHandler(
                        'country',
                        value === 'Choose' ? '' : value
                    )}
                >
                    <option>Choose</option>
                    <option value="argentina">Argentina</option>
                    <option value="ukraine">Ukraine</option>
                    <option value="china">China</option>
                </select>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="rules">
                        <input
                            id="rules"
                            type="checkbox"
                            name="acceptRules"
                            className="form-check-input"
                            checked={this.state.acceptRules}
                            onChange={({target: {checked}}) => this.changeInputHandler(
                                'acceptRules',
                                checked
                            )}
                        />
                        Accept Rules
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    )

    getTable = () => {
        const data = [
            { key: 'acceptRules', value: this.state.acceptRules ? 'true' : 'false' },
            { key: 'address', value: this.state.address },
            { key: 'city', value: this.state.city },
            { key: 'country', value: this.state.country },
            { key: 'email', value: this.state.email },
            { key: 'password', value: this.state.password }
        ];

        data.sort((a, b) => a.key.localeCompare(b.key));

        const tableRows = data.map(({ key, value }) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
            </tr>
        ));

        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={() => {
                    this.changeInputHandler('submitted', false)
                }}>Back
                </button>
                <table className="table">
                    <tbody>
                    {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        return (
            <>
                {
                    this.state.submitted ? this.getTable() : this.getForm()
                }
            </>
        )
    }
}


export default MyForm;