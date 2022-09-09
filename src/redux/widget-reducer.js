const UPDATE = 'UPDATE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const ERROR_IS_FETCHING = 'ERROR_IS_FETCHING';
const TOGGLE_IS_CHECKING = 'TOGGLE_IS_CHECKING';

let initialState = {
    name: '',
    temp: 0,
    icon: '',
    description: '',
    isFetching: true,
    isChecked: '',
    timezone: 0,
    fetchedError: false,
}

const widgetReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE: {
            return {
                ...state,
                name: action.name,
                temp: action.temp,
                icon: action.icon,
                description: action.description,
                timezone: action.timezone
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_CHECKING: {
            return {
                ...state, isChecked: action.isChecked
            }
        }
        case ERROR_IS_FETCHING: {
            return {
                ...state, fetchedError: action.fetchedError
            }
        }
        default:
            return state
    }
}
export const updateData = (name, temp, icon, description, timezone) => ({type: UPDATE, name, temp, icon, description, timezone})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const ErrorIsFetching = (fetchedError) => ({type: ERROR_IS_FETCHING, fetchedError})
export const isCheckedAC = (isChecked) => ({type: TOGGLE_IS_CHECKING, isChecked})
export default widgetReducer;
