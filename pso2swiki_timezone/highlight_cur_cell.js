// highlight next event cell
// I am using string of int comparing to actual int
function highlight_cur_cell(dd, hh) {
	// remove current highlight cell
	cell = document.getElementsByClassName('cur_highlight_cell');
	for(let i = 0, c; c = cell[i]; i++) { // should only have one element
		c.classList.remove('cur_highlight_cell');
	}

	let ediv = document.getElementsByClassName('table-responsive')[0];
	let target_table = ediv.getElementsByClassName('style_table')[0];

	// get correct row with date (dd)
	let rid = 0;
	for (let r; c = target_table.rows[rid].cells[0]; rid++)
		if (c.innerText.substring(0, c.innerText.length - 1).startsWith(dd))
			break;

	// get correct column with jp hour (hh)
	// use the last row in tHead instead of the second row since there may only be one row
	let cid = 1;
	let jp_row = target_table.tHead.rows[target_table.tHead.rows.length - 1];
	for (let c; c = jp_row.cells[cid]; cid++)
		if (c.innerText.substring(0, c.innerText.length - 1) > hh || cid >= jp_row.cells.length - 1)
			break;
	if (cid >= jp_row.cells.length - 1)
		cid = 1;

	// highligh the cell
	// check colspan because casino event
	let cur_i = 0;
	for (let i = 1, c; c = target_table.rows[rid].cells[i]; i++) {
		cur_i += c.colSpan;
		if (cur_i >= cid) {
			c.classList.add('cur_highlight_cell');
			break;
		}
	}
}
