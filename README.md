# Project Dashboard #
Simple project dashboard application integrating data from Harvest, Forecast, and Asana.

## Configuration ##
Create a `default.json` file in the `config` directory at the root with the following structure:

``` javascript
{
	"harvest": {
		"subdomain": "",
        "email": "",
        "password": ""
	},
	"asana": {
		"accessToken": "",
		"workspace": ""
	},
	"forecast": {
		"accountId": "",
		"authorizationToken": ""
	}
}
```