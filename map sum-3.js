//sum-3 map method //
				 const place = [
					  {
						first_name: 'Mike',
						location: 'London'
					  },
					  {
						first_name: 'Tim',
						location: 'US'
					  },
					  {
						first_name: 'John',
						location: 'Australia'
					  },
					];
					 const placelist=place.map(function(place){
					 return `${place.first_name} Lives in  ${place.location}`;
					 });
					 console.log(placelist);
					 document.write(JSON.stringify(placelist));
		