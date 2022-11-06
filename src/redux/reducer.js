import ACTIONS from "./action";

const evaluate = state => {
    let {currentOperand, lastOperand, operation} = state;
    let current = parseFloat(currentOperand);
    let last = parseFloat(lastOperand);

    let res = "";
    switch(operation) {
        case '+':
            res = last + current;
            break;
        case '-':
            res = last - current;
            break;
        case '×':
            res = last * current;
            break;
        case '÷':
            res = last / current;
            break;
    }
    return res.toString();
}

const reducer = (state = {
    currentOperand: "",
    lastOperand: "",
    operation: "",
    overWrite: false,
}, action) => {
    switch(action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overWrite) 
                return {
                    ...state,
                    currentOperand: action.digit,
                    overWrite: false,
                }

            if (state.currentOperand === '0' && action.digit === '0')
                return state;
            if (state.currentOperand === '0' && action.digit !== '.')
                return {
                    ...state,
                    currentOperand: action.digit,
                }
            if (action.digit === '.' && state.currentOperand.includes('.'))
                return state;
            if (action.digit === '.' && state.currentOperand === "")
                return {
                    ...state,
                    currentOperand: '0.',
                }
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,
            }
        case ACTIONS.DELETE_DIGIT:
            if (state.overWrite)
                return {
                    ...state,
                    currentOperand: "",
                    overWrite: false,
                }
            if (state.currentOperand === "")
                return state;
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            }
        case ACTIONS.CHOOSE_OPERATION:
            if (state.lastOperand === "" && state.currentOperand === "")
                return state;
            if (state.lastOperand === "")
                return {
                    ...state,
                    operation: action.operation,
                    lastOperand: state.currentOperand,
                    currentOperand: "",
                }
            if (state.currentOperand === "")
                return {
                    ...state,
                    operation: action.operation,
                }
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operation,
                currentOperand: "",
            }
        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOperand: "",
                lastOperand: "",
                operation: "",
            }
        case ACTIONS.EVALUATE:
            if (state.currentOperand === "" || state.lastOperand === "" || state.operation === "")
                return state;
            return {
                ...state,
                currentOperand: evaluate(state),
                lastOperand: "",
                operation: "",
                overWrite: true,
            }
        default:
            return state;
    }
}

export default reducer;