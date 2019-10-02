# Activity 1
> Oregon State University - CS 340 - Introduction to Databases

**Work individually and submit URLs in Canvas.**

## Overview
You will be creating a small Parts-Supplier database in phpMyAdmin for the ER diagram given below.  You will also modify code to create a website that accesses the database using JavaScript (Node.js), HTML & CSS.

![Assignment Design Overview](https://user-images.githubusercontent.com/39965401/65824301-78314500-e21b-11e9-9a7e-342b32325f6d.png)

## Steps
1. Clone this repository or download the contents as a ZIP file and place the contents in your `public_html/cs340` directory on the ENGR Flip servers.
1. Copy the contents of `src/config.template.js` into a new file called `src/config.js` and update the configuration.
1. Log in to [phpMyAdmin] and import the `scripts/seed-db.sql` file to create the tables required for this assignment.
1. In [phpMyAdmin]
   - Create a new table named `Suppliers` with the structure and values shown below:

     ![Suppliers Table Schema](https://user-images.githubusercontent.com/39965401/65824311-9c8d2180-e21b-11e9-88dd-b8b8e9d6071e.png)
     ![Suppliers Table Data](https://user-images.githubusercontent.com/39965401/65824313-b890c300-e21b-11e9-9140-b3d492cec587.png)

   - Connect the `Catalog` table to the `Parts` and `Suppliers` tables. To do this, go to Catalog > Structure > Relation View and add the following constraints:

     ![Catalog Constraints](https://user-images.githubusercontent.com/39965401/65824320-e970f800-e21b-11e9-97da-4bd53a66ee28.png)

   - Go to the designer window to verify the relationship (you will need to submit a screenshot to Canvas). It should resemble the following:

     ![Designer Window Example](https://user-images.githubusercontent.com/39965401/65824318-dbbb7280-e21b-11e9-88ad-62e7bd6d5b81.png)

   - After linking the tables, insert two new records into the `Catalog` table.

1. From the root of this repository (where you downloaded the files):
   - Install the required dependencies - `npm install`
   - Start the server - `npm start`
   - If you are using the ENGR servers, you may need to modify the `PORT` environment variable for the server to start properly. To do so, simply run   the following commands from the terminal on the Flip server, replacing `<port_number>` with the port you wish to use (a number between 2000 and   65535):
   
         $ bash
         $ PORT=<port_number> npm start

1. Visit the server address from your browser. Replace `PORT` in the URLs below with the port number you used (default of 3000):
   - If you are running this locally (on your own PC, not the Flip server), use `http://localhost:PORT/suppliers`
   - If you are running this on the Flip server, use `http://flipX.engr.oregonstate.edu:PORT/suppliers`. Replace `X` with the number of the Flip server you logged in to (1, 2, or 3).

1. **Change the "My Site" text to your full name.**
1. Modify the code in the `src/routes/pages.js` file according to the `TODO` statements in the code.

## Submit
Submit a screenshot of your database relationship and your URLs to Canvas.

[phpMyAdmin]: https://tools.engr.oregonstate.edu/phpMyAdmin/index.php
