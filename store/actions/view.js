import { viewTypes } from '../types.js'
import { pending, rejected, fulfilled } from '../helpers/asyncActionGenerator.js'

export const toggleMainMenu = isOpen => (dispatch, getState) => {
	const state = getState()

	dispatch({
		type: viewTypes.TOGGLE_MAIN_MENU, 
		payload: isOpen instanceof Boolean ? isOpen : !state.view.mainMenuOpened
	})
}

export const setAppbarTitle = title => {
	return {type: viewTypes.SET_APPBAR_TITLE, payload: title}
}

export const toggleLessonsMenu = opened => {
	return {type: viewTypes.TOGGLE_LESSONS_MENU, payload: opened}
}

export const setLocale = (locale, successCb) => (dispatch, getState) => {
	dispatch(pending(viewTypes.SET_LOCALE))

	try {
		const ClientDB = require('../../db')

		ClientDB.default
			.set('locale', locale)
			.then(() => {
				dispatch(fulfilled(viewTypes.SET_LOCALE, locale))
				!!successCb && successCb()
			})
			.catch(err => {
				dispatch(rejected(viewTypes.SET_LOCALE, err))
			})
	} catch (e) {
		console.error('[ACTION] setLocale exception: ', e)
		dispatch(rejected(viewTypes.SET_LOCALE, e))
	}
}

export const clearView = () => ({type: viewTypes.CLEAR_VIEW})