/* 
	Before you begin install this chrome extennsion: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en 
	make sure the extension is enabled, will be a green icon not red
*/

/* 
	add https://funwithajax.herokuapp.com/api/* to intercepted URLs and patterns 
*/

/*
	Create a ready event to make all function available after the document is loaded
*/



$(document).ready(function() {

	/*///////////// HEROES ACTIVITY ///////////////////*/

		/* Base query url https://funwithajax.herokuapp.com/api/ */

      /* 
      1. 
				Create a function call `getHeroes`. Put the closing bracket just before this function is invoked (towards the bottom of this file). 
				
			*/

      /* 
      2. Create 3 variable for our query:
      

       a. create a varialbe named `cors` that has the value `https://cors-anywhere.herokuapp.com/`
        
        Because our request to this server is coming from a different app, there is a risk of running into a `cross-origin` error. Prepending the above url to our query url will handle this error for us.

			  b.	create a variable named `baseURL` with the value `https://funwithajax.herokuapp.com/api`

				c.  create a variable with the name `query` with the value `"?q=heroes"`
					(parameter `q` with the value `heroes`.) 

					Example: to pass the parameter `q` with a value of `chicken` we can use `?q=chicken`
					use `?`` to denote query parameter are being used
					`q` for query 
					followed by the parameter value
			*/

      /* 
      3.
				Using ajax make a `GET` request to:
          `cors` plus `baseURL` plus `query`
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
			/* 
				add class `hero-BKG` to `<body>` 
			*/

			/* 
				add class `blue` to the `#wrap` 
			*/

			/*
				remove class `weather-wrap` and `music` from `#content`
			*/

			/*
        add class `heroes` to `#content`
        Open up inspector tools and make sure your HTML looks like you expect it to.
			*/

      /* 
      6. 
				Before doing anything with the data make sure that you remove any elements inside the `#contents` container 
          remember `.empty()`
          
			*/

			/* 
			*****	Using jQuery *****
			*/

      /* 
      7.
				create a `div` and store it to a variable called `row`
				add a class of `row` to the `row div` 
			*/

      /* 
      7.
        for each squad in the response: 
        Hint: loop
			*/

				/* 
					create a `div` and store it to a variable called `col`
					add classes `col-sm-12 col-md-6 col-lg-6` to the `col div` 
				*/

				/* 
					create a `div` and store it to a variable called `header`
					add a class of `header` to the `header`
					add a `h2` to the `header` with the currennt squads name as the text
						* hint this can be achieved using .html
					append `header` to `col` 
				*/

			 /* 
			 	create a `div` and store it to a variable called `characters`
			  add a class of `characters` to the `characters div` 
			 */

        /* 
        8.
          for each member in the current squad: 
          Hint: nested loop
			  */

			  	/* 
			  		create a `div` and store it to a variable called `hero`
			  		add a class of `hero` to the `hero div` 
			  	*/

			  	/* 
			  		creat a `div` and store it to a variable called `imgWrap`
			  		add a class of `img-wrap` to the `imgWrap div` 
			  	*/

			  	/* 
				  	create a `img` and store it to a variable called `image`
				  	add a class of `hero-image` to the `image div`
				  	add an attribute for `source` and the value being the current members image 
			  	*/

			  	/* 
			  		append `image` to `imgWrap` 
			  	*/

			  	/* 
				  	create a `p` and store it to a variable called `name`
				  	add text of the current member's name to the `name div`
			  	*/

			  	/* 
				  	create a `p` and store it to a variable called `power`
				  	add text that is the current members LAST listed power to the `power div`
				  		example : sleepig, eating, saving the world – saving the world would be the LAST listed power 
				  */

          /* 
          9.
				  	
				  	append the `imgWrap`, `name`, and `power` to `hero`
				  	append `hero` to `characters` 
				  */

        /* 
        10.
				  inside the first loop, but outside the second:
				  append `characters` to `col`
				  append `col` to `row`
				*/

        /* 
        11.
			  	outside the loops 
			  	append `row` to `#content` 
			  */
getHeroes()
        /* 
        12.
        BONUS Split these actions into multuple functions */
        
});