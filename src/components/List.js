import React, { Component } from 'react';
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { articles: state.articles };
};
const List = ({ articles }) => {
    return (
        <div>
            {articles.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.title}
                </li>
            ))}
        </div>
    )
}

export default connect(mapStateToProps)(List);