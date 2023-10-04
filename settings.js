const fs = require('fs')

global.creator = 'AdminSF'// yourname
global.MONGO_DB_URI = "mongodb+srv://sfvpnteam752:1tMKf3H2oPcz0ChN@cluster0.l5btbqh.mongodb.net/?retryWrites=true&w=majority" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "SatanFusion" //isi apa aja bebas
global.your_email = "sfvpnteam752@gmail.com" //email
global.email_password = "vcaavlvzzhefquyl" //application password email
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'apikeynya mana deck!',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service tidak tersedia, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Terlarang, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
