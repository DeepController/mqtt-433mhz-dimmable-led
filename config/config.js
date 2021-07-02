
// codes pulled from the remote using RFSniffer
// we aren't actually using brightness up/down and just picking the closest quarter so we know the status
// 'script' is location of non codesend script. this is written a little backwards because it started as a just codesend thing
const codes = {
	'livingroom': {
		'off': '12914529',
		'on': '12914529',
		'down': '12914536',
		'up': '12914532',
	}
};


module.exports = codes;
