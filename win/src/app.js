
import React from 'react';
import ReactDOM from 'react-dom';

var CommentList = React.createClass({
    render: function() {
        var comments = this.props.comments.map(function(comment, index) {
            return <li key={index}>{comment}</li>;
        });
        return (
            <ul className="comment-list">{comments}</ul>
        );
    }
});

var CommentApp = React.createClass({
    getInitialState: function() {
        return {
            comments: [],
            inputValue: ''
        }
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var comment = this.state.inputValue;
        this.setState({
            comments: this.state.comments.concat(comment),
            inputValue: ''
        })
    },
    handleChange: function(e) {
        this.setState({
            inputValue: e.target.value
        });
    },
    render: function() {
        return (
            <div>
                <form
                    className="comment-form"
                    onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleChange} />
                    <input type="submit" value="add" />
                </form>
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
});
ReactDOM.render(<CommentApp />, document.getElementById('app'));
