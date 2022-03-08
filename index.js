const fs = require('fs');
const axios = require('axios');
const urlExists = require('url-exists-deep');
const { info, success, error } = require('consola');

clearFile();
fetchSites();
async function fetchSites() {
	let count = 0;
	let nextPage = true;

	while (nextPage) {
		const url = `https://s1.landingfolio.com/api/v1/inspiration/?offset=${count}&type=landing-page`;

		try {
			count++;
			const { data } = await axios.get(url);

			if (data.message) return (nextPage = false);

			data.forEach(({ url }) => {
				checkForJobs(url);
			});
		} catch (err) {
			error(err);
		}
	}
}

async function checkForJobs(url) {
	const useSlash = url.charAt(url.length - 1) == '/' ? '' : '/';

	const jobUrl = `${url}${useSlash}jobs`;
	const hasJobUrl = await urlExists(jobUrl);

	if (hasJobUrl) {
		fs.appendFileSync('data/jobs.txt', `${jobUrl}\n`);
		return success(jobUrl);
	}

	const careerUrl = `${url}${useSlash}careers`;
	const hasCareerUrl = await urlExists(careerUrl);

	if (hasCareerUrl) {
		fs.appendFileSync('data/jobs.txt', `${careerUrl}\n`);
		return success(careerUrl);
	}

	return info(url);
}

async function clearFile() {
	const files = fs.readdirSync('data');
	files.forEach((file) => {
		fs.writeFileSync(`data/${file}`, '');
	});
}
