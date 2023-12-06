const initialState = {
  data: localStorage.getItem("my-collection")
    ? JSON.parse(localStorage.getItem("my-collection"))
    : [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLLECTION":
      return { ...state, data: [...state.data, action.payload] };
    case "DELETE_COLLECTION":
      return {
        ...state,
        data: state.data.filter((val) => val.name !== action.payload.name),
      };
    case "EDIT_COLLECTION_NAME":
      return {
        ...state,
        data: state.data.map((val) =>
          val.name === action.payload.name
            ? { ...val, name: action.payload.changeName }
            : val
        ),
      };
    case "ADD_COLLECTION_ITEM":
      state.data
        .find((val) => val.name === action.payload.name)
        .collectionItem.push(action.payload.name);
      return { ...state, data: state.data };
    case "DELETE_COLLECTION_ITEM":
      state.data.find(
        (val) => val.name === action.payload.name
      ).collectionItem = state.data
        .find((val) => val.name === action.payload.name)
        .collectionItem.filter(
          (val) => val.id !== action.payload.collectionItem.id
        );
      return {...state, data: state.data}
    default: 
      return state;
    }
};

export { rootReducer, initialState };
