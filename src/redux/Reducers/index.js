const initialData = {
  Icon: {},
};

const IconReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_ICON':
      const {data} = action.payload;
      return {
        Icon: {
          data: data,
        },
      };
    default:
      return state;
  }
};

export default IconReducer;
