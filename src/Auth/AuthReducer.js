export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL'
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD'

export const setEmail = (email) => ({
  type: AUTH_CHANGE_EMAIL,
  payload: email
})

export const setPassword = (password) => ({
  type: AUTH_CHANGE_PASSWORD,
  payload: password
})

const defaultState = {
  email: '',
  password: ''
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_CHANGE_EMAIL:
      return { ...state, email: action.payload };
    
    case AUTH_CHANGE_PASSWORD:
      return { ...state, password: action.payload };
  
    default:
			return state;
  }
}