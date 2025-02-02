const fs = require('fs');

if (!fs.existsSync('./newDir')) {
    fs.mkdir('./newDir', { recursive: true }, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Directory created successfully');
        // fs.rmdir('./newDir', { recursive: true }, (err) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     console.log('Directory deleted successfully');
        // });
    });
}

