import React from 'react';

class Track extends React.Component {
    renderAction(isRemoval) {
        return isRemoval ? '+' : '-'
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>aa{this.props.name}</h3>
                    <p>ss{this.props.author} | dd{this.props.author}</p>
                </div>
                <button className="Track-action">{this.renderAction(false)}</button>
            </div>
        )
    }
}

export default Track;