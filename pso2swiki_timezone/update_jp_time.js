// Update current Japan time
function update_jp_time() {
	let date = new Date();
	let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
	let jp = new Date(utc + (3600000 * 9));
	let dd = jp.getDate();
	let hh = jp.getHours();
	let s = document.getElementById('jp_time_str');
	if (s != null)
		s.innerHTML = (jp.getMonth() + 1) + '/' + dd + ' '
			+ jp.toLocaleTimeString('ja-JP', {hour12: false, hour: '2-digit', minute:'2-digit'});
	// update current highlighted cell
	highlight_cur_cell(dd, hh);
}
