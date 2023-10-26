import {
  createContext,
  useReducer,
  useCallback,
  ChangeEvent,
  ReactElement,
  useContext,
} from "react";

type StateType = {
  count: number;
  text: string;
};

export const initialState: StateType = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPES {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPES;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPES.NEW_INPUT:
      return { ...state, text: action.payload || "" };
    default:
      throw new Error("Bad action");
  }
};

const useCounterContext = (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPES.INCREMENT }),
    []
  );

  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPES.DECREMENT }),
    []
  );

  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPES.NEW_INPUT,
      payload: e.target.value,
    });
  }, []);

  return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextType: UseCounterContextType = {
  state: initialState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const Countercontext =
  createContext<UseCounterContextType>(initContextType);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const CounterContextProvider = ({
  children,
  ...initialState
}: ChildrenType & StateType): ReactElement => {
  return (
    <Countercontext.Provider value={useCounterContext(initialState)}>
      {children}
    </Countercontext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(Countercontext);

  return { count, increment, decrement };
};

type UseCounterTextHookType = {
  text: string;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): UseCounterTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(Countercontext);

  return { text, handleTextInput };
};
