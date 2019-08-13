import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body, Form, Item, Label, Input  } from 'native-base';
import styles from '../../styles/styles';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    
     <View key={alert.id} style={styles[alert.alertType]} >
        <Text>{alert.msg}</Text>   
    </View>
));

alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
   alerts: state.alert
})
export default connect(mapStateToProps)(Alert); 
  