export type State = {
  cate: string;
  cateNum: number;
};

export type Action =
  | { type: "cate"; cate: string }
  | { type: "cateNum"; cateNum: number };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "cate":
      return {
        ...state,
        cate: action.cate,
      };
    case "cateNum":
      return {
        ...state,
        cateNum: action.cateNum,
      };
    default:
      return state;
  }
};

export const initialState = {
  cate: "",
  cateNum: 0,
};
