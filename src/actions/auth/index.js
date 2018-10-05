import {
    CREATE_ACCOUNT,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAILURE,
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE
} from '../../constants';
import Accounts from '../../utilities';

const accountsClient = new Accounts();

export const createAccount = ({ username, password }) => async dispatch => {
    dispatch({ type: CREATE_ACCOUNT });

    try {
        const response = await accountsClient.create({
            username,
            password
        });
        createAccountSuccess({ response, dispatch });
    } catch (err) {
        console.error(err);
        dispatch({ type: CREATE_ACCOUNT_FAILURE, err });
    }
};

const createAccountSuccess = ({ username, dispatch }) => async dispatch => {
    dispatch({ type: CREATE_ACCOUNT_SUCCESS, username });
};

export const logIn = ({ username, password }) => async dispatch => {
    dispatch({ type: LOG_IN });

    try {
        const response = await accountsClient.logIn({
            username,
            password
        });
        logInSuccess({ response, dispatch });
    } catch (err) {
        console.error(err);
        dispatch({ type: LOG_IN_FAILURE, err });
    }
};

const logInSuccess = ({ username, dispatch }) => async dispatch => {
    dispatch({ type: LOG_IN_SUCCESS, username });
};
