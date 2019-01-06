const account = {
	loading: false,
	error: null,
	loggedIn: false,
};

const feeds = {
	loading: true,
	error: null,
	data: [],
	current: null,
};

const forms = {
	getFormTypesLoading: true,
	getFormTypesError: null,
	formTypes: [],
	getFormsLoading: true,
	getFormsError: null,
	getFormsSuccess: false,
	forms: [],
	postFormLoading: false,
	postFormError: null,
	postFormSuccess: false,
};

const lessons = {
	getLessonsLoading: true,
	getLessonsError: null,
	lessons: [],
	getLessonCardsLoading: true,
	getLessonCardsError: null,
	lessonCards: [],
};

const checklists = {
	getSystemChecklistsLoading: true,
	getSystemChecklistsError: null,
	systemChecklists: {},
	getCustomChecklistsLoading: true,
	getCustomChecklistsError: null,
	getCustomChecklistsSuccess: false,
	customChecklists: [],
};

const view = {
	mainMenuOpened: false,
	appbarTitle: null,
	lessonsMenuOpened: 0,
	locale: 'en',
};

export default {
	account,
	feeds,
	forms,
	lessons,
	checklists,
	view,
};