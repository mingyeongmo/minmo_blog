/* 나중에 useReducer를 다시 사용하기 위해서 남겨두는 코드 입니다. */

// import { Post } from "contentlayer/generated";

// export type State = {
//   cate: string;
//   cateNum: number;
//   catePost: Post[];
// };

// export type Action =
//   | { type: "cate"; cate: string }
//   | { type: "cateNum"; cateNum: number }
//   | { type: "catePost"; catePost: Post[] };

// export const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "cate":
//       return {
//         ...state,
//         cate: action.cate,
//       };
//     case "cateNum":
//       return {
//         ...state,
//         cateNum: action.cateNum,
//       };
//     case "catePost":
//       return {
//         ...state,
//         catePost: action.catePost,
//       };
//     default:
//       return state;
//   }
// };

// export const initialState = {
//   cate: "",
//   cateNum: 0,
//   catePost: [],
// };
