import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface menuSliceState {
    isVisible: boolean;
}

const initialState: menuSliceState = {
    isVisible: false,
};

const menuSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        showSidebar(state) {
            state.isVisible = true;
        },
        hideSidebar(state) {
            state.isVisible = false;
        },
        toggleSidebar(state) {
            state.isVisible = !state.isVisible;
        },
        setVisibility(state, action: PayloadAction<boolean>) {
            state.isVisible = action.payload;
        },
    },
});

export const {showSidebar, hideSidebar, toggleSidebar, setVisibility} = menuSlice.actions;

export default menuSlice.reducer;