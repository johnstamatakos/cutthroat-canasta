import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignupForm from '../../components/signupForm';
import { createAccount } from '../../../../actions';

// const mapStateToProps = (state, props) => {
//     return {};
// };

const mapDispatchToProps = dispatch => ({
    createAccount: args => dispatch(createAccount(args)),
    logIn: args => dispatch(logIn(args))
});

export default connect(
    null,
    mapDispatchToProps
)(SignupForm);
