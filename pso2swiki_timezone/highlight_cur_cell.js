// highlight current and next event cell
// I am using string of int comparing to actual int
function highlight_cur_cell(dd, hh) {
	// remove highlighted cell
	cell = document.querySelectorAll('.cur_highlight_cell, .nxt_highlight_cell');
	for(let i = 0, c; c = cell[i]; i++) { // should have either 0 or 2 objects
		c.classList.remove('cur_highlight_cell', 'nxt_highlight_cell');
	}

	let ediv = document.getElementsByClassName('table-responsive')[0];
	let target_table = ediv.getElementsByClassName('style_table')[0];

	// get correct row with date (dd)
	let rid = 0;
	for (; c = target_table.rows[rid]; rid++)
		if (parseInt(c.cells[0].innerText, 10) == dd)
			break;
	if (rid >= target_table.rows.length)
		return; // not match date found

	// get correct column with jp hour (hh)
	// use the last row in tHead instead of the second row since there may only be one row
	let cid = 1;
	let jp_row = target_table.tHead.rows[target_table.tHead.rows.length - 1];
	for (let c; c = jp_row.cells[cid]; cid++)
		if (cid >= jp_row.cells.length - 1 || c.innerText.substring(0, c.innerText.length - 1) > hh)
			break;
	cid -= 1;

	// highligh current cell
	// check colspan because casino event
	let cur_i = 0;
	let ind;
	for (ind = 1, c; c = target_table.rows[rid].cells[ind]; ind++) {
		cur_i += c.colSpan;
		if (cur_i >= cid) {
			c.classList.add('cur_highlight_cell');
			break;
		}
	}
	// highligh next cell
	// check if change day
	ind += 1;
	if (ind == target_table.rows[rid].cells.length - 1) {
		ind = 1;
		rid += 1;
	}
	if (rid < target_table.rows.length) {
		target_table.rows[rid].cells[ind].classList.add('nxt_highlight_cell');
	}
}
