$(document).ready(function() {

/*///////////// MUSIC ACTIVITY ///////////////////*/
	
	/* Base query url https://funwithajax.herokuapp.com/api/ */

		/* Base query url https://funwithajax.herokuapp.com/api/ */

      /* 
      1.
				Create a function call `getMusic` 
           The function is already invoked at the end of this file.
           close this function just before it is invoked
			*/

      /*
      2.
				a.  create a varialbe named `cors` that has the value `https://cors-anywhere.herokuapp.com/`

				b.  create a variable named `baseURL` with the value `https://funwithajax.herokuapp.com/api`

				  
				c.  create a variable with the name `query` with the value `"?q=music&t=song%of%your%choice"`

				d. create a variable with the name `apiKey` with the value `&apikey=i7_iHnA2g-3d`

					parameter `q` with the value `music`. 
					parameter `t` with the value `song of your choice` (replace all spaces with %)
					paramater `apikey` with value `i7_iHnA2g-3d`

					Example: to pass the parameter `q` with a value of `chicken` we can use `?q=chicken`
					use `?`` to denote query parameter are being used
					`q` for query 
					followed by the parameter
					`&`` new query
					`t` for query
					followed by the parameter
					`&` new query
					`apikey` for query
					followed by the parameter
			*/

      /* 
      3.
				Using ajax make a `GET` request to:
          `cors` plus `baseURL` plus `query` plus `apiKey`
        Close your promise (.then()) just before you close the function. We will be writing the rest of our code within the promise, ensuring that all this logic happens only once we've received a return from the API.
			*/

      /* 
      4.
				`console.log` the response
					** make sure to add a string note inside ALL your console.log like: 
						console.log("these are the results:", result); 
			*/

			/* 
				examine the response, look at the data structure 
			*/

      /*
      5.
				remove class `heroes` and `weather` from `#container`
			*/

			/* 
				add class `music-BKG` to `body` 
			*/

			/* 
				remove class `blue` to the `#wrap` 
			*/

			/*
				remove class `weather-wrap` and `heroes` from `#content`
			*/

			/*
				add class `music` to `#content`
			*/

			/* 
				Before doing anything with the data make sure that you remove any elements inside the `#contents` container 
					remember `.empty()`
			*/
		/*
			Using jQuery 
		*/

      /*
      6.
				get the `first item` from the `response`
				store it to a variable with the name `track`
			*/

			/* 
				create a `div` store it in a variable named `trackWrap`
				add a class of `track-wrap` to `trackWrap div`
			*/

			/* 
				create a `div` store it in a variable named `trackCol1`
				add classes  `"col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-1"` to the `trackCol1 div`
			*/

			/* 
				create a `h2` store it to a variable named `heading` 
				add text the `heading` with the value of the `track` name
			*/

			/*
				create a variable named `artistURL` with the value of  the `track` firts artists spotify external url 
			*/

			/* 
				create an image and store it to a variable named `img`
				add a class of `track-img` to `img div`
				get the album image url with the height: 300
			  assign it to the `img` source attribute
			*/

			// get the first artist name
			// external spotify URL for artist

			// get album name
			// get release date
			// get external spotify URL for album

			// button to listen in new tab 
			// eternal spotify URL for song
			// var trackLink = track.external_urls.spotify;
getMusic()

})