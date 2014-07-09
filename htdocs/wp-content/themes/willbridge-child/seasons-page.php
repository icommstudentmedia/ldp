<?php
/*
Template Name: Seasons Page
 */

get_header(); 

$season_start = htmlspecialchars($_GET["seasonstart"]);
$season_end = htmlspecialchars($_GET["seasonend"]);

$seasons = array();

if ($season_end > $season_start) {
   for ($i = $season_start; $i <= $season_end; $i++) { 
      array_push($seasons, "Season ".$i);
   }


   foreach ($seasons as $single_season) {
      $args = array(
      'post_type' => 'post',
      'orderby' => 'date',
      'order' => 'ASC', 
      'category_name' => $single_season );
      ?>
      <div class="season_blocks">
         <h1><?php echo $single_season ?></h1>
         <?php
         $myposts = new WP_Query($args);
         if($myposts->have_posts()) :
            while ($myposts->have_posts()) {
               $myposts->the_post();
               ?>
               <figure class="seasons_thumbs">
                  <a href="<?php the_permalink() ?>" title="<?php the_title(); ?>"><?php the_post_thumbnail(); ?></a>
                  <figcaption><h2><a href="<?php the_permalink() ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2></figcaption>
               </figure>
               <?php
            }
         endif;
         ?>
      </div>
      <?php 
   }
} else {
   ?>
   <h1><a href="http://www.latterdayprofiles.org/seasons/?seasonstart=1&amp;seasonend=5">Seasons 1-5</a></h1>
   <h1><a href="http://www.latterdayprofiles.org/seasons/?seasonstart=6&amp;seasonend=10">Seasons 6-10</a></h1>
   <h1><a href="http://www.latterdayprofiles.org/seasons/?seasonstart=11&amp;seasonend=15">Seasons 11-15</a></h1>
   <h1><a href="http://www.latterdayprofiles.org/seasons/?seasonstart=16&amp;seasonend=20">Seasons 16-20</a></h1>
   <h1><a href="http://www.latterdayprofiles.org/seasons/?seasonstart=21&amp;seasonend=21">Season 21</a></h1>
   <?php
}


get_footer();
?>