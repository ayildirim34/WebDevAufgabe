const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Tüm isimlerin dizisini al

const names = characters.map (character => 
    {return character.name})
console.log(names)


//2. Tüm yüksekliklerin dizisini al

const heights = characters.map (character => 
    {return character.height})
console.log(heights)

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
const namesundheight = characters.map (character => 
    {return {name : character.name, 
        height : character.height}
    })
console.log(namesundheight)
//4. Tüm ilk isimlerin dizisini al

const firstnames = characters.map (character => 
    {return character.name.split(" ")[0]})
console.log(firstnames)

//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
const totalmass = characters.reduce ((total, character) => {
return total=total+character.mass
}, 0)
console.log(totalmass)
//2. Tüm karakterlerin toplam yüksekliğini alın

const totalheight = characters.reduce ((total, character) => {
    return total=total+character.height
    }, 0)
    console.log(totalheight)
//3. Göz rengine göre toplam karakter sayısını alın
const eye_color_group = characters.reduce (character => {
    
    return character
    }, {})
    console.log(totalheight)
//4. Tüm karakter adlarındaki toplam karakter sayısını alın


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
//2. 200'den az yüksekliğe sahip karakterler alın
//3. Tüm erkek karakterleri al
//4. Tüm kadın karakterleri al


//***SORT***
//1. Kütleye göre sırala
//2. Yüksekliğe göre sırala
//3. İsme göre sırala
//4. Cinsiyete göre sırala


//***EVERY***
//1. Her karakterin mavi gözleri var mı?
//2. Her karakterin kütlesi 40'tan fazla mı?
//3. Her karakter 200'den kısa mı?
//4. Her karakter erkek mi?


//***SOME***
//1. En az bir erkek karakter var mı?
//2. Mavi gözlü en az bir karakter var mı?
//3. 210'dan uzun en az bir karakter var mı?
//4. Kütlesi 50'den az olan en az bir karakter var mı?