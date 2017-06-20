document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function() {
			function findPrice(tab) {
				let d = document;

				let name = d.getElementsByClassName("name").firstChild.textContent;

				let marketInfo = d.getElementsByClassName("market-info").firstChild.innerHTML;
				let lowestAsk = marketInfo.getElementsByTagName("span").lastChild.textContent;
				let lowestNum = lowestAsk.search(/[1-9][0-9]*/i);

				return parseFloat(lowestNum);
			}

			var querying = chrome.tabs.query({currentWindow: true, active: true}
				);

			querying.then(findPrice);
		}
	})
})