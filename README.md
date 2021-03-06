### The homepage
![Homepage](https://i.imgur.com/ePr4MBr.png)


### About the app

The app is designed to mimic a self-checkout system where you would scan your bar codes with your webcam and it would then add it to the cart. I could not get the barcode scanner to work in time, so for now you can only input the EAN-number manually. If you add a couple of items to the cart and press "Bekræft og betal" it will clear the cart and record the purchase in the database. If you want to remove an item you can just click on it in the cart.

If you want to view previous purchases you can press "Se køb" in the bottom left corner and you will be met with the page in the picture below. I only show the total price and the UUID for each purchase but the items that made up each purpose could be pulled from the database if we wanted.
![Purchase page](https://i.imgur.com/kohqaHD.png)

If you want to see which products we currently have in the database, you can press "Se varekatalog" in the bottom left corner and you will be met with the page shown in the picture below.
![Product page](https://i.imgur.com/dTEkvu4.png)

If you want to add another product to the database you can click the "Create product" button and you will be directed to this page:
![Creation page](https://i.imgur.com/a9AioS5.png)

The pages that are not meant to be seen by the customer are written in English.

### Install Dependencies

$ yarn 


### Running App

Have Docker running and then 

$ yarn dev

$ yarn build

