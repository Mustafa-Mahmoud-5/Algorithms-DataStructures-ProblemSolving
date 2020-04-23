// i`ll create a function that takes two arrays of objects then merge them to output a single array of objects but each object will have all the properties from the arr1 objects and arr2 objects (بدون روت )


let arr1 = [
    {
        id: 117,
        body: "kyf bd2 el kon ظظhasjdhk",
        zone_id: 16,
        created_at: "2020-04-06T06:34:35.000000Z",
        updated_at: "2020-04-07T00:13:48.000000Z"
    },
    {
        id: 118,
        body: "why do fish live in water ظظ",
        zone_id: 18,
        created_at: "2020-04-06T06:35:58.000000Z",
        updated_at: "2020-04-06T06:35:58.000000Z"
    },
    {
        id: 119,
        body: "why does monday come before tuesday ظظ",
        zone_id: 19,
        created_at: "2020-04-06T06:37:02.000000Z",
        updated_at: "2020-04-06T06:37:02.000000Z"
    }
]

let arr2 = [

    {
        name: 'q1',
        value: ''
    },
    {
        name: 'q2',
        value: ''
    },
    {
        name: 'q3',
        value: ''
    },
    
]


const mergeTwoArraysOfObjects = (arr1, arr2) => {
// return new array (using map)
// loop through arr1 (or arr2) and then return a new object(for each iteration) of the first arr object  and the second arr object using the index

    return arr1.map((obj, i) => {
        return Object.assign({}, obj, arr2[i])
    })
}


console.log(mergeTwoArraysOfObjects(arr1, arr2));
