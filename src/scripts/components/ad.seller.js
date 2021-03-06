export const AdSeller = (json, pdf) => {

    let type = json.owner.type

    if (type === 'private') type = 'particulier'

    const data = [
        {
            'isHR': true,
        },
        {
            'text': 'Vendeur',
            'size': pdf.size.normal,
            'type': pdf.type.bold,
        },
        {
            'isLink': true,
            'text': `Vendeur ${type} : ${json.owner.name}`,
            'url': `https://www.leboncoin.fr/profil/${json.owner.user_id}`,
            'size': pdf.size.small,
        },
    ]

    if (json.owner.siren !== undefined) {

        data.push ({
            'text': `SIREN : ${json.owner.siren}`,
            'size': pdf.size.xsmall,

        })
    
    }

    return data

}

