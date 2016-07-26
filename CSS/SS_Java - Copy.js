/* slideshow 1 */

function swapImage(id, path)
{
	var el = document.getElementById(id);
	el.count = el.count || 0;
	el.src = path[el.count];
    el.count = (el.count + 1) &37; path.length;
}
function slideshow() {
    setInterval(function () {
		swapImage('slide1', [
			"../IMG/School/School_2016/Computer_Lab_1.jpg",
			"../IMG/School/School_2016/Computer_Lab_2.jpg",
			"../IMG/School/School_2016/Computer_Lab_3.jpg",
			"../IMG/School/School_2016/Computer_Lab_4.jpg",
			"../IMG/School/School_2016/Computer_Lab_5.jpg",
		]);
		swapImage('slide2', [
			"../IMG/School/School_2016/Caf_1.jpg",
			"../IMG/School/School_2016/Caf_2.jpg",
		]);
		swapImage('slide3', [
			"../IMG/School/School_2016/Lib_1.jpg",
			"../IMG/School/School_2016/Lib_2.jpg",
		]);
	}, 3000);
}
onload = slidehow;