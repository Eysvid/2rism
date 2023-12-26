import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from './../healpers/countryList.js'

function autoCompleteFunc() {
	const autoCompleteJS = new autoComplete({
		selector: '#autoComplete',
		data: {
			src: countryList,
			cache: true,
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value;
					autoCompleteJS.input.value = selection;
				},
			},
		},
		resultsList: {
			maxResults: 10,
		},
		searchEngine: 'strict', // strict | loose
	});
}

export default autoCompleteFunc;