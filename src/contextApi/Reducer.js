export default Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exitingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (exitingProduct) {
        exitingProduct.qty += 1;
        return [...state];
      } else {
        const item = { ...action.payload, qty: 1 };
        return [...state, item];
      }
    case 'INCREASE':
        return state.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, qty: item.qty + 1 };
            }
            return item;
          });
          case 'DECREASE':
            return state.map(item=>{
                if(item.id===action.payload.id){ 
                        return {...item, qty:item.qty-1}
                }
                return item
            })
      default:
        return state
  }
};
