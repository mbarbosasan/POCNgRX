import {createAction, createActionGroup, createReducer, on, props} from "@ngrx/store";

export interface User {
  name: string;
  age?: number;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
  }
}

export interface AppState {
  form?: User
}

export const initialState: AppState = {
  form: {
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: ''
    }
  },
}

export const updateForm = createAction('UPDATE_FORM', props<{form: User}>())
export const userActionsGroup = createActionGroup({
  source: "MOCK API",
  events: {
    'GET USER': props<{id: number}>(),
    'GET USER SUCCESS': props<{user: User}>(),
    'GET USER ERROR': props<{error: any}>(),
  }
})
export const appReducer = createReducer(
  initialState,
  on(updateForm, (state, action) => {
    return {
      ...state,
      form: action.form
    }
  }),
  on(userActionsGroup.getUserSuccess, (state, action) => {
    return {
      ...state,
      form: action.user
    }
  })
)

