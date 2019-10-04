# Activity 1

> Oregon State University - CS 340 - Introduction to Databases

**Work individually and submit a screenshot of your database relationship (the designer view) and your website server URL to Canvas**

## Overview

You will be creating a small Parts-Supplier database in phpMyAdmin for the ER diagram given below. You will also modify code to create a website that accesses the database using Node.js (JavaScript), HTML & CSS.

![Assignment Design Overview](https://user-images.githubusercontent.com/39965401/65824301-78314500-e21b-11e9-9a7e-342b32325f6d.png)

## Steps

1. Log into one of the Flip servers using SSH (or PuTTY or another method on Windows). Use one of the server addresses below:

       flip1.engr.oregonstate.edu
       flip2.engr.oregonstate.edu
       flip3.engr.oregonstate.edu
    
    > **NOTE**: You need to have Duo Security setup to SSH into ENGR servers.

1.  Clone this repository and place the contents somewhere in your user directory on the ENGR Flip servers.

        $ git clone https://github.com/bradenhc-osu/cs-340-activity-1.git

1. Navigate into the created directory (`cs-340-activity-1`).

1.  Log into [phpMyAdmin] from a browser and import the `scripts/seed-db.sql` file to create the tables required for this assignment. To do this you may need to download the files locally as well or just copy/paste the SQL from the file into the SQL editor in phpMyAdmin.

1.  In [phpMyAdmin]

    - Create a new table named `Suppliers` with the structure and values shown below:

        ![Suppliers Table Schema](https://user-images.githubusercontent.com/39965401/65824311-9c8d2180-e21b-11e9-88dd-b8b8e9d6071e.png)
        ![Suppliers Table Data](https://user-images.githubusercontent.com/39965401/65824313-b890c300-e21b-11e9-9140-b3d492cec587.png)

    - Connect the `Catalog` table to the `Parts` and `Suppliers` tables. To do this, go to Catalog > Structure > Relation View and add the following constraints:

        ![Catalog Constraints](https://user-images.githubusercontent.com/39965401/65824320-e970f800-e21b-11e9-97da-4bd53a66ee28.png)

    - Go to the designer window (click on the database in the left panel, then select "Designer" from the top menu. You may have to click the "More" option to see it if your screen isn't wide enough.) to verify the relationship. **You will need to submit a screenshot to Canvas of this**. It should resemble the following:

        ![Designer Window Example](https://user-images.githubusercontent.com/39965401/65824318-dbbb7280-e21b-11e9-88ad-62e7bd6d5b81.png)

    - **After linking the tables** (don't do this before!), insert two new records into the `Catalog` table.

1.  On the ENGR Flip server (where you downloaded/cloned the files):

    - Install the required dependencies and start the server. Follow the commands below, replacing `<port_number>` with an unused port on the Flip server you are using. If you get an error that includes the message `EADDRINUSE`, try another port.

          $ bash
          $ npm install
          $ PORT=<port_number> npm start
    
    - Make sure the website is running by visiting `http://flipX.engr.oregonstate.edu:PORT/suppliers` (replace the `X` with the number of the Flip server you are using: 1, 2, or 3).

    - Stop the server while you make changes by typing `Ctrl + c` into the terminal window.

    - **Update the configuration** at `src/config.js`.

    - **Change the "My Site" text to your full name**. The source is in the `views/partials/header.hbs` file.

    - **Modify the code** in `src/routes/parts.js` and `views/parts.hbs` according to the `TODO` statements. If you need help, use the `src/routes/suppliers.js` and `views/suppliers.hbs` files as a reference.

    - Restart your website server.

    - Make sure the "List Parts" and "Add Part" pages work properly.

    - Once you have ensured everything is complete, you will need to run your website server using Forever, a Node.js library that keeps a process running in the background even after you have logged out of the ENGR servers. To install and run your website server using Forever, run the following commands:

          $ npm install forever
          $ PORT=<port_number> node_modules/.bin/forever start src/index.js

    - Make sure your website server is running in Forever with the following command. If you see `STOPPED` in the output, then there has been an error.

          $ node_modules/.bin/forever list

        > **Some helpful commands for working with forever**
        >
        > Restart a process by it's index (replace `<index>` with the number between the [] in the output of the list command):
        >
        >     $ node_modules/.bin/forever restart <index>
        >
        > Stop a process by it's index:
        >
        >     $ node_modules/.bin/forever stop <index>
        >
        > Stop all processes (useful if there are several stopped processes that need to be cleaned up):
        >
        >     $ node_modules/.bin/forever stopall
        >
        > If you want to read error messages from a process that was running using Forever, you will need to execute the list command from above and then `cat` the contents of the log file provided in the list command output. The command will resemble the following:
        >
        >     $ cat /nfs/stak/users/<username>/.forever/<file>.log

1. After using Forever to run your website server, log out of the ENGR server and make sure the website is still running.

## Submit

Submit a screenshot of your database relationship (the designer view) and your website server URL to Canvas.

[phpmyadmin]: https://tools.engr.oregonstate.edu/phpMyAdmin/index.php
