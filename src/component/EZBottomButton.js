import React from "react";
import Colors from '../util/colors';
import _ from 'underscore';

class EZBottomButton extends React.Component {
    render() {
        var styles = {
            return: {
                position: 'fixed',
                borderTop: `1px solid ${Colors.backgroundGray}`,
                backgroundColor: 'white',
                color: Colors.ezBlue,
                bottom: 0,
                width: '100%',
                lineHeight: '60px',
                textAlign: 'center',
            }
        };

        return (
            <div>
                <div style={{height: styles.return.lineHeight}}/>
                <div style={_.extend(styles.return, this.props.style || {})} onTouchTap={this.props.onClick}>
                    {this.props.label || 'Back'}
                </div>
            </div>
        )
    }
} 

export default EZBottomButton;
