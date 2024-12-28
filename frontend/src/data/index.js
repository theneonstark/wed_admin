

const vendorChart = [
    {
        name: 'Vendor 1',
        data: [5, 3, 4, 7, 2, 6, 9, 4, 5, 6, 7, 8]
    },
    {
        name: 'Vendor 2',
        data: [3, 2, 4, 5, 6, 7, 8, 9, 5, 3, 2, 1]
    },
    {
        name: 'Vendor 3',
        data: [7, 8, 9, 5, 3, 2, 4, 5, 6, 7, 8, 9]
    },
];

const vendor = [
    {
        id: 1,
        name: 'Vendor 1',
        address: '123 Main St',
        contact: '123-456-7890'
    },
    {
        id: 2,
        name: 'Vendor 2',
        address: '456 Elm St',
        contact: '987-654-3210'
    },
    {
        id: 3,
        name: 'Vendor 3',
        address: '789 Oak St',
        contact: '555-123-4567'
    },
    {
    id: 4,
        name: 'Vendor 4',
        address: '123 Maple St',
        contact: '999-888-7777'
    }
]

export const vendorDetails = [
    { "id": 1, "type": "Venues" },
    { "id": 2, "type": "Photographers" },
    { "id": 3, "type": "Bridal Makeup" },
    { "id": 4, "type": "Decorators" },
    { "id": 5, "type": "Wedding Planners" },
    { "id": 6, "type": "Mehendi Artist" },
    { "id": 7, "type": "Catering Services" },
    { "id": 8, "type": "Invitation" },
    { "id": 9, "type": "DJs" },
    { "id": 10, "type": "Wedding Entertainment" },
    { "id": 11, "type": "Sangeet Choreographer" },
    { "id": 12, "type": "Pre Wedding Photographer" },
    { "id": 13, "type": "Bridal Wear" },
    { "id": 14, "type": "Jewellery" },
    { "id": 15, "type": "Favors" },
    { "id": 16, "type": "Groom Wear" },
    { "id": 17, "type": "Cake" },
    { "id": 18, "type": "Wedding Pandits" },
    { "id": 19, "type": "Bartenders" },
    { "id": 20, "type": "Accessories" },
    { "id": 21, "type": "Cinema/Video" },
    { "id": 22, "type": "Pre Wedding Shoot" },
    { "id": 23, "type": "Locations" },
    { "id": 24, "type": "Beauty & Wellness" }
  ]

  export const StateConfig = {
    method: 'get',
    url: 'https://api.countrystatecity.in/v1/countries/IN/states',
    headers: {
      'X-CSCAPI-KEY': 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
    }
  };

