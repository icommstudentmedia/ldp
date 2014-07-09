This is everything that is associated with the LDP site. The "root" of the website is found by navigating to the /htdocs folder, so in a localhost environment if you store it in a /ldp folder in your local server folder, the URL to get to it would be something like this; "localhost/ldp/htdocs/"

Featured images should be updated on a regular basis to add the newly added images from the live site. They need to be put in the /Images/Featured-Images folder as well as uploaded in the media library in wordpress.

Any other important images such as layouts, logos, etc. should be placed in the /Images folder as well.

The sql folder should have the localhost version as well as the remote (live) site versions of the exported sql file from PHPMyAdmin. There really is only one difference between the two files. There are two changes that are needed when transfering wordpress databases between different servers (i.e. Local to Remote). In the 'wp_options' table is where the changes will be made. Where the rows that have 'siteurl' and 'home' as the 'option_name' colomn, change the value to the live site url or to the locolhost url. In this case, change it between "http://www.latterdayprofiles.org" and your own localhost URL (i.e. http://localhost/ldp/htdocs). 

We are going to maintain these two sql files by exporting the database from the remote site and then making a copy of the file and then changing the previously mentioned fields to the localhost URLs in the copy. The names will have "-LOCAL" or "-REMOTE" added onto the end of the file to reflect which database they should be uploaded to.
