import React, { Component } from "react";
import { TouchableHighlight, Text, View } from 'react-native';
import { ButtonIcon, Footer, FooterTab, Left, Right, Body, Button, Icon } from "native-base";

import styles from '../../styles/styles';
import { connect } from 'react-redux';
import { selectKeyIndex } from '../../actions';

class KeysButton extends Component {


    render() {
        // LONG VERSION
        // const keys = this.prosp.keys;
        // const selectedKeyIndex = this.props.selectedValues.selectedKeyIndex;

        const { selectedValues: { selectedKeyIndex }, keys } = this.props;
        const keyButtons = keys.map(key => (key.shortKey ? '/' : [key.key] ));
       
        return ( 

        <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 10,}}>Key</Text>
            <Text style={{fontSize: 20,marginBottom: 5,}}>C</Text> 
            
            <Button>
            <Text>{keyButtons} </Text>
            </Button>
        </View>

        );
    }
}

const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });

export default connect(mapStateToProps, { selectKeyIndex })(KeysButton);