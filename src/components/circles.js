import React from 'react';

function defaultStyle(otherStyle) {
    let style = {
        width: "900px",
        height: "300px",
        position: "fixed"
    }
    return Object.assign({}, style, otherStyle)
}

export class Circles extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // console.log(this.props.morph(this.group))
    }
    render() {
        let {props} = this;
        let {count, color, inner, morph} = props;
        let style = defaultStyle(props.style || {});
        return (
            <svg style={style}>
                <g ref={(g) => this.group = g}>
                    {new Array(count)
                        .fill("")
                        .map((e, i) => <Circle {...inner(e,i, null, "50%")} key={i}/>)}
                </g>
            </svg>
        )
    }

}

function Circle(props) {
    let {style, r} = props;
    return (
        <circle {...props}></circle>
    )
}
