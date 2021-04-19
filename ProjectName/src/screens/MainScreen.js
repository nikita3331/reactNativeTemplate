import React from 'react'
import { View, StyleSheet ,Text,Switch} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import theme from '../theme/theme'
import i18n from '../locale/i18n'

const MainScreen=(props)=>{
    const {navigation}=props
    return(
        <View style={styles.outerContainer}>
            <Text testID="mainText">{i18n.t('main.hello')}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    outerContainer:{
        flex:1,
        backgroundColor:theme.mainColor
    }
})


const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);

