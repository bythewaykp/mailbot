const fs = require('fs')
const sendMail = require('./gmail')

const delay = ms => new Promise(res => setTimeout(res, ms));


const App = ()=>{
    const main = async (varTo) => {

        const fileAttachments = [
        //     {
        //     filename: 'Ragam Poster.jpeg',
        //     path: path.join(__dirname, './pos.jpg'),
        //     cid: 'logo1',
        //     content: 'This is a plain text file sent as an attachment',
        // }
    ];
        const message = `Hey`
        const options = {
            to: varTo,
            // cc: '',
            // bcc: '',
            // replyTo: '',
            subject: `Invite for Ragam '22`,
            // text: "",
            html: '<h1>Hi</h1>',
            attachments: fileAttachments,
            textEncoding: 'base64',
            headers: [{
                    key: 'X-Application-Developer',
                    value: 'Abhiram K P'
                },
                {
                    key: 'X-Application-Version',
                    value: 'v1.0.0.2'
                },
            ],
        };

        const messageId = await sendMail(options);
        await delay(2000)
        return options.to;
    };

    const listAll = []
    const allFileContents = fs.readFileSync('a.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line => {
        listAll.push(line.replace(/\s/g, ''))

    })

    arr = listAll.filter((x) => {
        return x != ''
    })

    let c = 0
    str = 'ekm'

    // csvFile = './Files/' + str + '.csv'
    // unsentFile = './Error/' + str + '-error.txt'
    // sentFile = './Success/' + str + '-success.txt'

    arr.forEach((x, i) => {
        main(x)
            .then((messageId) => {
                console.log(`${i+1} | Success : ${messageId}`)
                console.log(`Status : ${++c}/ ${k}`);
                // fs.appendFileSync(csvFile, `${i+1},${x},Success\n`)
                // fs.appendFileSync(sentFile, `${x}\n`)
    
            })
            .catch((err) => {
                console.error(`${i+1} | Error   : ${x}`)
                console.log(` --- ${++c}/ ${arr.length} ---`);
                // fs.appendFileSync(csvFile, `${i+1},${x},Error\n`)
                // fs.appendFileSync(unsentFile, `${x}\n`)
            });
    
    })
}

module.exports =  App;
