import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { itemsFetchData } from '../actions/index'
class ItemList extends Component {
    constructor() {
        super()
        this.state = {
            value: "dhaval"
        }
    }
    componentDidMount() {
        this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
    }
    render() {

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        //debugger;
        return (
            <ul>
                {typeof this.props.items != 'undefined' ? this.props.items.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.label}
                        </li>
                    )
                }

                ) : null}
                <input type="text" value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }} />
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.indexReducer.items,
        isLoading: state.indexReducer.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //  fetchData: url => dispatch(itemsFetchData(url)),
        fetchData: bindActionCreators(itemsFetchData, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);