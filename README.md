This is everything that is associated with the LDP site. The "root" of the website is found by navigating to the /htdocs folder, so in a localhost environment if you store it in a /ldp folder in your local server folder, the URL to get to it would be something like this; "localhost/ldp/htdocs/"

Featured images should be updated on a regular basis to add the newly added images from the live site. They need to be put in the /Images/Featured-Images folder as well as uploaded in the media library in wordpress.

Any other important images such as layouts, logos, etc. should be placed in the /Images folder as well.

The sql folder should have the localhost version as well as the remote (live) site versions of the exported sql file from phpMyAdmin. There really is only one difference between the two files. There are two changes that are needed when transfering wordpress databases between different servers (i.e. Local to Remote). In the 'wp_options' table is where the changes will be made. Where the rows that have 'siteurl' and 'home' as the 'option_name' colomn, change the value to the live site url or to the locolhost url. In this case, change it between "http://www.latterdayprofiles.org" and your own localhost URL (i.e. http://localhost/ldp/htdocs). 

We are going to maintain these two sql files by exporting the database from the remote site and then making a copy of the file and then changing the previously mentioned fields to the localhost URLs in the copy. The names will have "-LOCAL" or "-REMOTE" added onto the end of the file to reflect which database they should be uploaded to.

--

--

DIRECTIONS TO UPDATE LOCAL VERSION OF THE WORDPRESS SITE DATABASE

From the point of view that we are going to update our local versions of the site with the updated sql file that has been exported from the remote site and then changed to have the correct URL for the local environment. Here are the steps:

Step 1: Go to the phpMyAdmin of your localhost and go to the wordpress database.  Then drop all of the tables that are in that database.

Step 2: Click on the Import tab and then select the sql file that has the localhost URL and import that file into the database.

Step 3: Then what you have to do is go and login to the wordpress dashboard for the localhost version of the site.

Step 4: Go to the "Settings >> General" and hit save. Then go to "Settings >> Permalink" and hit save also.

Step 5: To change the images to have the correct path, in phpMyAdmin select the wordpress database. Then select the SQL tab and enter in the sql statement (assuming the localhost URL is "localhost/ldp/htdocs/"): UPDATE wp_posts SET post_content = REPLACE(post_content, 'www.latterdayprofiles.org', 'localhost/ldp/htdocs/');

Congrats, you have just updated the wordpress on your local machine to match the one on the remote site.


For full directions on moving wordpress around to different servers (one domain to another, local to remote, or remote to local), can be found here: http://www.wpbeginner.com/wp-tutorials/how-to-move-wordpress-from-local-server-to-live-site/