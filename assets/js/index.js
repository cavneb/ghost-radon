
$(function() {


  /** reponsive videos **/
  $(".post-cover, .post-content").fitVids();

  $(".posts .post-cover").each(function() {

    var available = false;
    // image cover
    var $cover = $("img", $(this));
    if($cover && $cover.length == 1) {
      $(this).html(
              "<img src='" + $cover.attr("src") + "' />" +
                  "<div class='post-image-overlay'>" +
                    "<a href='" + $cover.attr("src") + "' class='preview' data-lightbox='image-" + $(this).data("post") + "'><span class='fa fa-search'></span></a>" +
                    "<a href='" + $(this).data("url") + "' class='link'><span class='fa fa-link'></a></span>" +
                  "</div>").removeClass("hide");
      available = true;
    }

    // video cover
    var $videoCover = $(".fluid-width-video-wrapper", $(this));
    if($videoCover && $videoCover.length == 1) {
      $(this).removeClass("hide");
      available = true;
    }

    // soudcloud cover
    var $iframeCover = $("iframe[src*='soundcloud.com']", $(this));
    if($iframeCover && $iframeCover.length == 1) {
      $(this).removeClass("hide");
      available = true;
    }

    // blog cover image
    var blogCoverImage = $(this).data("image");
    if(blogCoverImage && !available) {
      $(this).html("<img src='" + blogCoverImage + "' />");
      $(this).removeClass("hide");
    }

    $(this).closest("article").removeClass("non-visible").addClass("animated fadeIn");
  });

  /* image lightbox */
  $(".post-content").imagesLoaded(function() {
    $(".post-content img").each(function() {
      var height = $(this).height();
      var width = $(this).width();
      $(this).wrap($("<div class='post-image'></div>").css("height", height).css("width", width));
      $(this).after("<a href='" + $(this).attr("src") + "' data-lightbox='image-post'><div class='post-image-overlay'></div></a>")
    });
  });

  // grab an element
  var header = document.querySelector(".nav-top");
  // construct an instance of Headroom, passing the element
  new Headroom(header, {
    tolerance: {
      down : 10,
      up : 20
    },
    offset : 205,
    classes: {
      initial: "slide",
      pinned: "slide-reset",
      unpinned: "slide-up"
    }
  }).init();

  $(".post-content img:first").each(function() {
    var src = $(this).attr("src");
    $(".blog-post-header").css("background-image", "url(" + src + ")");
  });

    // scroll up plugin
  $().showUp('.js-scroll-up', {
    upClass: '{{upClass}}',
    downClass: '{{downClass}}'
  });


  if($("#disqus_thread").length > 0) {
    // disqus
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  }

});
