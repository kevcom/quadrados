<div class="tile" @php(post_class())>
	<div class="tile-container">
	  <header>
	    <h3 class="title"><a href="{{ get_permalink() }}">{{ get_the_title() }}</a></h3>
	    <!-- @include('partials/entry-meta') -->
	  </header>
	  <div class="excerpt">
	    @php(the_excerpt())
	  </div>
	  <div class="thumbnail">
	    {{ the_post_thumbnail('medium') }}
	  </div>
	</div>
</div>
