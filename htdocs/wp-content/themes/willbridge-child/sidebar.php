<?php
/**
 * @package WordPress
 * @subpackage Willbridge
 * @since Willbridge 1.0
 * 
 * Sidebar Template
 * Created by CMSMasters
 * 
 */


if (function_exists('generated_dynamic_sidebar_cmsmasters')) {
   
   generated_dynamic_sidebar_cmsmasters(1);
   echo '<!-- This is the Social Media Links -->
         <ul class="social_list"><li><a target="_blank" href="https://twitter.com/ldprofiles" title="Twitter"><img src="http://www.latterdayprofiles.org/wp-content/themes/willbridge-child/images/social_icons/twitter.png" alt="twitter" /></a></li><li><a target="_blank" href="https://www.facebook.com/pages/Latter-day-Profiles/187329654624001" title="Facebook"><img src="http://www.latterdayprofiles.org/wp-content/themes/willbridge-child/images/social_icons/facebook.png" alt="facebook" /></a></li></ul><br>';
} else {
    echo '<aside class="widget widget_search">';
    
    get_search_form();
    
    echo '</aside';
}

?>