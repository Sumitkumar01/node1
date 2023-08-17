import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Type your URL :",
            name: "URL",
        },
    ])
    .then((answer) => {
        // console.log(answer)
        const url = answer.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.appendFile("qr_img.png"));
        fs.writeFile("URL.txt", url, (err) => {
            if (err) {
                throw err;
            }
            console.log("the file hase been saved!")
        })
    })
    .catch((er) => {
        if (er.isTtyError) {

        } else {

        }
    })