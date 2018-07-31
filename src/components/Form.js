import React, { Component } from "react";
import { connect } from "react-redux";
import { addArtical, loadArtical } from "../actions/index";
import uuidv1 from "uuid";
const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: article => dispatch(addArtical(article)),
        loadArticle: () => dispatch(loadArtical())
    };
}
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
       
    }
    componentDidMount() {
        this.props.loadArticle();

    }
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id })

    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
            </button>
            </form>
        );
    }
}
export default connect(null, mapDispatchToProps)(ConnectedForm);