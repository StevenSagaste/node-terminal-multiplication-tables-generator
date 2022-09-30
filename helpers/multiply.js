const fs = require('fs');

const mkFile = (base) => {

    return new Promise((resolve, reject) => {
        
        console.log('===========================');
        console.log('TABLA DE MULTIPLICAR', base);
        console.log('===========================');
    
        let salida = '';
    
        for(let i=1;i<=10;i++){
            salida += `${base} x ${i} = ${base * i} \n`;
        }
        console.log(salida);
        fs.writeFileSync(`./created-tables/tabla-${base}.txt`, salida);
        resolve(`labla-${base}.txt`);
        reject(`The file labla-${base}.txt can't be saved!`);

    })
    

    /*file system
    fs.writeFile(`labla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log(`The file labla-${base}.txt has been saved!`);
    });
    */
}

const mkFileAsync = async(l, base, times = 10) => {

    try {

        let salida = '';
        
        for(let i=1;i<=times;i++){
            salida += `${base} x ${i} = ${base * i} \n`;
        }
        
        if (l) {
            console.log('===========================');
            console.log('TABLA DE MULTIPLICAR', base);
            console.log('===========================');
            console.log(salida);
        }

        fs.writeFileSync(`./created-tables/tabla-${base}.txt`, salida);

        return(`labla-${base}.txt`);
        
    } catch (err) {
        throw err;
    }
}

module.exports = {
    mkFile, mkFileAsync
}