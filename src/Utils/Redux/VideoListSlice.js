import { createSlice } from "@reduxjs/toolkit";

const VideoListSlice = createSlice({
    name: "VideoList",
    initialState: {
        videoLists : [],
    },
    reducers: {
        addVideos : (state,action) =>{
            state.videoLists = action.payload;
        }
    }
});

export const {addVideos} = VideoListSlice.actions;

export default VideoListSlice.reducer;