import React from 'react';
import reservationAction from '../action/reservationAction';
import moment from 'moment';
import _ from 'underscore';
import p from '../util/polyglot';
import Colors from '../util/colors';

class EZFormRow extends React.Component {
    render() {
        var {label, value, rightElement, style} = this.props;
        style = _.extend({
            height: 40,
            paddingLeft: 15,
            lineHeight: '40px',
            fontWeight: 200,
            fontSize: 13,
        }, style);

        if (!rightElement && value) {
            rightElement = <span>{value}</span>;
        }

        return (
            <div style={style}>
                <span>{label}</span>
                <span style={{paddingRight:15, float: 'right'}}>{rightElement}</span>
            </div>
        )
    }
}

class EZForm extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        var {content, form} = this.props;

        var styles = {
            root: {
                width: '100%',
                fontWeight: 200,
                fontSize: 13,
            },
            row: {
                height:40,
                paddingLeft: 15,
                lineHeight: '40px',
                fontWeight: 200,
                fontSize: 13,
            },
            hero: {
                root: {
                    height: 80,
                    paddingLeft: 10,
                },
                name: {
                    fontSize: 18,
                    fontWeight: 600,
                },
                tel: {
                    paddingTop: 10,
                    color: Colors.ezBlue,
                },
                comfirm: {
                    float: 'right',
                },
            },
            hr: {
                verticalAlign: 'middle',
                fontWeight: 100,
                color: Colors.lightGray,
                fontSize: 12,
                paddingLeft: 10,
                height: 30,
                lineHeight: '30px',
                backgroundColor: Colors.hrGray,
                borderTop: `1px solid ${Colors.hrBorderGray}`,
                borderBottom: `1px solid ${Colors.hrBorderGray}`,
            },
            text: {
                padding: 0,
                width: 100,
                borderWidth: 0,
                marginTop: 12,
                textAlign: 'right',
            },
            textarea: {
                width: '90%',
                borderWidth: 0,
                margin: '12px 15px',
                resize: 'none',
            }
        }

        var contents = form.map((obj, key) => {
            var nextIsHr = form[key+1] ? form[key+1].type == 'hr' : false;
            var style = nextIsHr ? {} : {borderBottom: `1px solid ${Colors.backgroundGray}`};

            switch(obj.type) {
                case 'hero':
                    var circleSize = 50;
                    var doneSize = 40;
                    return ( 
                        <div key={key} style={_.extend(style, styles.hero.root)}>
                            <div style={{marginTop:16,float: 'left'}}>
                                <div style={styles.hero.name}>{content.name}</div>
                                <div style={styles.hero.tel}>{content.tel}</div>
                            </div>
                            <div>
                                <div style={_.extend(_.clone(styles.hero.comfirm), {
                                    border: `1px solid ${Colors.ezBlue}`,
                                    borderRadius: '50%',
                                    width: circleSize,
                                    height: circleSize,
                                    marginRight: 10,
                                    marginTop: (styles.hero.root.height - circleSize) / 2,
                                })} className="material-icons"/>
                                {content.read ? <i style={_.extend(styles.hero.comfirm, {
                                    color: Colors.ezBlue,
                                    fontSize: doneSize,
                                    marginRight: -45,
                                    marginTop: (styles.hero.root.height - doneSize) / 2,
                                    // marginBottom: -70,
                                })} className="material-icons">done</i> : null}
                            </div>
                        </div>
                    );
                case 'dropdown':
                    return ( 
                        <EZFormRow 
                            key={key} 
                            style={_.extend(style, styles.row)}
                            label={obj.label}
                            value={content[obj.name]}/>
                    );
                case 'date':
                    let date = moment(content[obj.name], 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD');
                    return ( 
                        <EZFormRow 
                            key={key} 
                            style={_.extend(style, styles.row)}
                            label={obj.label}
                            value={date}/>
                    );
                case 'time':
                    let time = moment(content[obj.name], 'YYYY-MM-DD HH:mm').format('HH:mm');
                    return ( 
                        <EZFormRow 
                            key={key} 
                            style={_.extend(style, styles.row)}
                            label={obj.label}
                            value={time}/>
                    );
                case 'hr':
                    return ( 
                        <div key={key} style={_.extend(style, styles.hr)}>
                            {obj.label}
                        </div>
                    );
                case 'text':
                    return ( 
                        <EZFormRow 
                            key={key} 
                            style={_.extend(style, styles.row)}
                            label={obj.label}
                            rightElement={
                                <input style={styles.text} defaultValue={content[obj.name]} placeholder={p.t('reservation_form_empty')}/>
                            }/>
                    );
                case 'textarea':
                    return ( 
                        <textarea key={key} style={_.extend(style, styles.textarea)} placeholder={p.t('reservation_form_empty')}>
                            {content[obj.name]}
                        </textarea>
                    );
                default:
                    return null;
            }
        })
        return (
            <div style={styles.root}>
                {contents}
            </div>
        )
    }
}

EZForm.contextTypes = {
    router: React.PropTypes.func.isRequired,
};

export default EZForm;
