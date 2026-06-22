let hospital = {
    patient: {
        Male: {
            name: 'Maaz',
            disease: 'Tuberclosis'
        } ,

        Female: {
            name: 'Rabia',
            disease: 'Diarrhea'
        }
    }
};

for(let patientName in hospital.patient)
{
    console.log(`${patientName} patient: Name: ${hospital.patient[patientName].name}, Disease: ${hospital.patient[patientName].disease}`);
}