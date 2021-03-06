import tipo from '../actions/types';

const init = {
  dataII: []
}

// Root Reducer (Dispatch store)
export default(state = init, action) => {
  switch (action.type)
  {   
    case tipo.GET_POPULAR_FULFILLED:
      return Object.assign( {},state,
        {
          dataII: action.payload.data.results
        })
    default:
      return state
  }
}