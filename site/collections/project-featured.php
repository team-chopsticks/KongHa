<?php 

return function() {
    return page('projects')->filterBy('featured', true);
};