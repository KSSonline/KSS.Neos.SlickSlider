Neos Slick Slider
=================

For detailed information see: 
http://kenwheeler.github.io/slick/

You can define different amount of slides etc. per breakpoint.
On the "dev" tab in the inspector, add the following code snipped to create two break points at 960px and 639px.  
Example for responsive settings:
```
[
	{
		"breakpoint": 960,
		"settings": {
			"slidesToShow": 1,
			"slidesToScroll": 1
		}
	},  
	{
		"breakpoint": 639,
		"settings": {
			"slidesToShow": 1,
			"slidesToScroll": 1
		}
	}
]
```
Keep in mind that option "# of slides to show" and "# slides to scroll" are for any bigger viewport than the one defined in responsive

