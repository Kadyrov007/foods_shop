export const initialState = {
     basket: [],
     Dish: [],
    favorite: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "UPLOAD_CATALOG":
            return {...state, catalog: action.payload}

        case "ADD_TO_BASKET":
            const foundProduct = state.basket.find(el => el.id === action.payload.id)

            if (foundProduct) {
                return {
                    ...state, basket: state.basket.map(el => {
                        if (el.id === action.payload.id) {
                            return {...el, quantity: el.quantity + 1}
                        }
                        return el
                    })
                }
            }

            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
        case "REMOVE_REM":
            if (state.basket[action.payload].quantity > 1) {

                return {
                    ...state,

                    // basket: state.basket.map((el, idx) => idx === action.payload ? {
                    //     ...el,
                    //     quantity: el.quantity - 1
                    // } : el)
                }
            }
        case "REMOVE_BASKET":
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}


        default:
            return state
    }
}