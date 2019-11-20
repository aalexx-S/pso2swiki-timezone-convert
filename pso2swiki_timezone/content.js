// Get emergency table's tHead
let ediv = document.getElementsByClassName("table-responsive")[0];
let target_table = ediv.getElementsByClassName("style_table")[0];
let tHead = target_table.tHead;

// Get hour difference between current location and jp
// JP is UTC + 9
let date = new Date();
let coff = date.getTimezoneOffset() / 60;
let off = - 9 - coff;

// insert a row above
// loop through tHead to get times in jp
let nrow = tHead.insertRow(0);
for (let i = 0, col; col = tHead.rows[1].cells[i]; i++) {
	let nc = nrow.insertCell(i);
	nc.classList.add("style_td");
	nc.style.textAlign = 'center';
	if (i == 0) {
		nc.innerHTML = "UTC" + (coff<0?"":"+") + coff;
	} else if (i < tHead.rows[1].cells.length - 1) {
		let t = parseInt(col.innerText.substring(0, col.innerText.length - 1));
		nc.innerHTML = (t + off + 24) % 24 + col.innerText[col.innerText.length - 1];
	} else { // the final cell, do nothing for now
		nc.innerHTML = '<span class="wikicolor" style="color:Yellow">Current</span> <br class="spacer">' + date.toLocaleTimeString({hour12: false});
	}
}
