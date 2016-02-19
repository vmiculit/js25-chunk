var getIndex = function(reg, res){
	res.sendFile("index.html", {root : './public/html/'})
}

module.exports = {

	getIndex : getIndex

}