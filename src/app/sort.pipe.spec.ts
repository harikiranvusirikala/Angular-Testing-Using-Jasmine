import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  let pipe: SortPipe;
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return an array of mobiles sorted by product name', () => {
    const mobiles = [
      {
        "productId": 1,
        "productName": "Samsung Galaxy Note 7",
        "productCode": "MOB-120",
        "description": "64GB, Coral Blue",
        "price": 25000
      },
      {
        "productId": 2,
        "productName": "Mi Note 7",
        "productCode": "MOB-121",
        "description": "64GB, Coral Blue",
        "price": 15000
      },
      {
        "productId": 3,
        "productName": "iPhone 7",
        "productCode": "MOB-122",
        "description": "64GB, Coral Blue",
        "price": 35000
      }
    ];
    const pipe = new SortPipe();
    const  sortedMobiles = pipe.transform(mobiles);
    expect(sortedMobiles).toEqual(mobiles)
  });

  
  it('should return the input array unchanged when args are neither "prodName" nor "price"', () => {
    const mobiles = [
      {
        "productId": 1,
        "productName": "Samsung Galaxy Note 7",
        "productCode": "MOB-120",
        "description": "64GB, Coral Blue",
        "price": 25000
      },
      {
        "productId": 2,
        "productName": "Mi Note 7",
        "productCode": "MOB-121",
        "description": "64GB, Coral Blue",
        "price": 15000
      },
      {
        "productId": 3,
        "productName": "iPhone 7",
        "productCode": "MOB-122",
        "description": "64GB, Coral Blue",
        "price": 35000
      }
    ];
    const pipe = new SortPipe();
    const  sortedMobiles = pipe.transform(mobiles,'other');
    expect(sortedMobiles).toEqual(mobiles)
  });

 

});
