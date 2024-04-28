import React from 'react';

class ListGroup extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <ul className="list-group">
                {React.Children.map(children, (child, index) => (
                    <li key={index} className="list-group-item">
                        {child}
                    </li>
                ))}
            </ul>
        );
    }
}

ListGroup.defaultProps = {
    children: null,
};

export default ListGroup;