import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreators from './redux/action-creators';
import App from './App';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(ActionCreators, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(App);