const initialState = {
  id: '0',
  name: '',
  surname: ''
}

export default function current_user(state = initialState, action) {

  switch (action.type) {
    case 'SET_ID':
      return Object.assign({}, state, { id: action.payload })

    case 'SET_CURRENT_USER':
      return Object.assign({}, action.payload )

    default:
      return state;
  }

}