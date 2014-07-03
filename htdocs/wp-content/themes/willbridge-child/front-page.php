<?php

get_header(); 

$args = array(
'post_type' => 'post',
'post_per_page' => 1,
'orderby' => 'date',
'order' => 'DESC', 
'category_name' => 'Video');

$latestPost = new WP_Query($args);
if($latestPost->have_posts()) :
   $latestPost->the_post();
?>
<div id="front_page_content">
<h1><?php the_title(); ?></h1>

   <?php the_content(); ?>
   <p id="resize_message">* If the video did not display correctly, please resize your browser to get the 
        correct size. (You can change it right back to your normal size.)</p>
</div>
<?php
endif;
get_footer();
?>