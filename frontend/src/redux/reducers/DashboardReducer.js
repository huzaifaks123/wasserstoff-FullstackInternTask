// import redux toolkit to define state at global level
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// define initial state
const initialState = {
    data: [],
    filters: {
        end_year: [],
        intensity: [],
        topic: [],
        sector: [],
        region: [],
        pest: [],
        source: [],
        swot: [],
        country: [],
    }
};

// create filter string from array to pass inside API
const createFilters = (filters) => {
    const params = new URLSearchParams();
    // Only append parameters that are not empty
    Object.keys(filters).forEach(key => {
        if (filters[key] && filters[key].length > 0) {
            params.append(key, filters[key].join(','));
        }
    });
    return params.toString();
}

// export async thunk api to load data when component mount
export const DataAsyncThunk = createAsyncThunk(
    'fetchData',
    async (_, ThunkApi) => {
        try {
            const state = ThunkApi.getState()
            const filterString = createFilters(state.DataReducer.filters)
            console.log(filterString);
            const response = await fetch(`https://wasserstoff-fullstackinterntask-4s11.onrender.com/api/data?${filterString}`);
            let data = await response.json();
            console.log("data", data);
            ThunkApi.dispatch(setData(data));
        } catch (error) {
            console.log("Error while fetching data from API :", error);
        }
    }
)

// create slice to set actions and state
const DataSlice = createSlice({
    name: "Data&Filter",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
            console.log("setFilters-reducer" , {...state.filters});
            
        },
        resetFilters: (state) => {
            state.filters = initialState.filters;
        }
    }
})

// export reducer for store
export const DataReducer = DataSlice.reducer;

// export actions to use in other component if necessory
export const { setData, setFilters ,resetFilters} = DataSlice.actions;

// expotr selector to select state defined
export const DataSelector = (state) => state.DataReducer;