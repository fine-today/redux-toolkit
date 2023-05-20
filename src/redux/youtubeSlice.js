import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//비동기 서버통신으로 데이터를 전달받고 첫 번째 인수로 넣은 문자값으로 내부 액션타입을 자동생성해서 액션객체를 생성
export const fetchYoutube = createAsyncThunk('youtube/requestYoutube', async () => {
	const key = 'AIzaSyAGpWq7AF0NYZp55xSg6n3WzYimiqnbLzo';
	const playlistId = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=10&playlistId=${playlistId}`;

	const response = await axios.get(url);
	return response.data.items;
});

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		// 데이터요청시작
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		//데이터 응답성공
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		//데이터 응답실패
		[fetchYoutube.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default youtubeSlice.reducer;
