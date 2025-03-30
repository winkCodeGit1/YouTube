import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    addCache: (state, action) => {
      // The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

      //   example of object.assign
      //   const user = { name: "John" };
      //   Object.assign(user, { age: 30, city: "New York" });

      //   console.log(user); // { name: "John", age: 30, city: "New York" }

      Object.assign(state, action.payload);
    },
  },
});

export const { addCache } = searchSlice.actions;
export default searchSlice.reducer;

// LRU cache concept explanation and example of showing how to do it below

// import { createSlice } from "@reduxjs/toolkit";

// const MAX_CACHE_SIZE = 5; // Maximum number of entries in the cache

// const searchSlice = createSlice({
//   name: "searchSlice",
//   initialState: {
//     cache: {}, // Stores the cached data
//     usageOrder: [], // Tracks the order of keys based on usage
//   },
//   reducers: {
//     addCache: (state, action) => {
//       const key = Object.keys(action.payload)[0]; // Get the key from the payload
//       const value = action.payload[key]; // Get the value from the payload

//        If the key already exists, remove it from the usageOrder
//       if (state.cache[key]) {
//         state.usageOrder = state.usageOrder.filter((k) => k !== key);
//       }

//        Add the key to the end of the usageOrder (most recently used)
//       state.usageOrder.push(key);

//        Add the key-value pair to the cache
//       state.cache[key] = value;

//        If the cache exceeds the maximum size, remove the least recently used entry
//       if (state.usageOrder.length > MAX_CACHE_SIZE) {
//         const leastRecentlyUsedKey = state.usageOrder.shift(); // Remove the oldest key
//         delete state.cache[leastRecentlyUsedKey]; // Remove it from the cache
//       }
//     },
//   },
// });

// export const { addCache } = searchSlice.actions;
// export default searchSlice.reducer;
