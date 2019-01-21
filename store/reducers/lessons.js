import { lessonsTypes } from '../types.js';
import { pending, rejected, fulfilled } from '../helpers/asyncStatusGenerator.js';
import initialState from '../initialState.js';

export default function reducer(state = initialState, action) {
	let lessonFilesCache = {};

	switch (action.type) {
		/* GET_LESSONS */
		case pending(lessonsTypes.GET_LESSONS):
			return {
				...state,
				getLessonsLoading: true,
			};
		case rejected(lessonsTypes.GET_LESSONS):
			return {
				...state,
				getLessonsLoading: false,
				getLessonsError: action.payload,
			};
		case fulfilled(lessonsTypes.GET_LESSONS):
			return {
				...state,
				getLessonsLoading: false,
				getLessonsError: null,
				lessons: action.payload,
			};

		/* SET_LESSON */
		case lessonsTypes.SET_LESSON:
			return {
				...state,
				currentLesson: action.payload,
			};

		/* GET_LESSON_FILE */
		case pending(lessonsTypes.GET_LESSON_FILE):
			return {
				...state,
				getLessonFileLoading: true,
			};
		case rejected(lessonsTypes.GET_LESSON_FILE):
			return {
				...state,
				getLessonFileLoading: false,
				getLessonFileError: action.payload,
			};
		case fulfilled(lessonsTypes.GET_LESSON_FILE):
			return {
				...state,
				getLessonFileLoading: false,
				getLessonFileError: null,
				currentLessonFile: action.payload,
			};

		/* CLOSE_LESSON_FILE */
		case lessonsTypes.CLOSE_LESSON_FILE:
			return {
				...state,
				getLessonFileLoading: false,
				getLessonFileError: null,
				currentLessonFile: null,
			}
	}

	return state;
}
