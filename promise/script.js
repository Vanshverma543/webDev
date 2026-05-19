function getdata(value) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if (value ===3){
                reject("Query Soloved");
            }

        },2000);
    });
}


getdata(1)
 .then(() => getdata(2))
 .then(() => getdata(3))
 .then(() => getdata(4))
 .then(() => getdata(5))
.catch(rej) => console.log(rej);