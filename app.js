// Load content and add class show of element main
window.addEventListener('load', function () {
	const main = document.querySelector('main');
	main.classList.add('show');
	getDataProfile('src/profile.json');
});

// Get data profile from profile.json
function getDataProfile(url) {
	return fetch(url)
		.then((repsonse) => repsonse.json())
		.then((datas) => {
			const profile = datas.Profile;
			const container = document.querySelector('main');
			container.innerHTML = printData(profile);
		})
		.catch((e) => {
			document.body.innerHTML = `<h1 style="text-align:center; color: white;">${e}</h1>`;
		});
}

function printData(profile) {
	return `
			<section>
				<!-- Your profile -->
				<div class="profile">
					<!-- Your Photo -->
					<img src="${profile.photo}" alt="${profile.name}" class="photo-profile" />

					<div class="name-and-title">
						<!-- Your name -->
						<p class="name">${profile.name}</p>
						<!-- Your job/title -->
						<p class="title">${profile.title}</p>
					</div>
				</div>

				<!-- Your Links -->
				<div class="container-links">${buttonLinks(profile['button-links'])}</div>

				<!-- Your Social Media -->
				<div class="all-social-media">
					<p>Connect with me:</p>

					<div class="container-social-media">${socialMedia(profile['social-media'])}</div>
				</div>
			</section>
		`;
}

function buttonLinks(links) {
	return links
		.map((buttonLink) => {
			return `<a href="${buttonLink.link}" title="${buttonLink['name-link']}" class="btn-link">
						${buttonLink.icon}
						${buttonLink['name-link']}
					</a>`;
		})
		.join('');
}

function socialMedia(links) {
	return links
		.map((socialMediaLink) => {
			return `<a href="${socialMediaLink.link}" title="${socialMediaLink['name-link']}" class="social-media">
							${socialMediaLink.icon}
						</a>`;
		})
		.join('');
}
