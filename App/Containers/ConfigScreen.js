import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'

// Redux Actions
import ConfigScreenActions from '../Redux/ConfigScreenRedux'
import AuthActions from '../Redux/AuthRedux'

// components
import { Icon, Button } from 'react-native-elements'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/ConfigScreenStyle'
import { Colors } from '../Themes/'

class ConfigScreen extends Component {
  static propTypes = {
    user_profile: PropTypes.object,
    accounts: PropTypes.array,
    coinbaseLogout: PropTypes.func
  }
  
  render () {
    const { goBack } = this.props.navigation
    const { coinbaseLogout } = this.props
    const { user_profile, accounts } = this.props
    const isAuthed = user_profile ? true : false
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.header} >
            <View style={{width: 50}}><Icon name='chevron-left' color={Colors.navigation} onPress={() => goBack()}/></View>
          </View>
          <View style={styles.content}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Coinbase</Text>
              <Text style={styles.sectionText}>Logged in as {isAuthed ? user_profile.name : null}</Text>
              <Text style={styles.sectionText}>Tracking {isAuthed ? accounts.length : null} accounts</Text>
            <RoundedButton text="Logout" onPress={() => coinbaseLogout()}/>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user_profile: state.auth.user_profile,
    accounts: state.auth.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    coinbaseLogout: () => dispatch(AuthActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigScreen)
