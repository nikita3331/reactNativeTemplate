import { Dimensions} from 'react-native'
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export default theme={
    maxWidth:Dimensions.get('window').width,
    maxHeight:Dimensions.get('window').height,
    mainColor:'white'
}
