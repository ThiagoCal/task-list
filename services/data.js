export const filtroData = (datas)=>{
    let datasUn = [];
    datas.forEach(data => {
        if(datasUn.indexOf(data.dataFormatada)=== -1){
            datasUn.push(data.dataFormatada)
        }
    });

    return datasUn;
}

export const sortData = (data) =>{
    data.sort((a, b) =>{
        let primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
        let segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
        return primeiraData - segundaData;
    })
}