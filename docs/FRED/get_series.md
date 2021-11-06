# get_series()

### About


``` py
FedPy.FRED(api_key: str).get_series(series_id: str, *start: str = "", *end: str = "")
```

Returns a `DataFrame` for a given `series_id`, but requires you have an API key which is free sign up at https://fred.stlouisfed.org

#### Parameters:
- `series_id` : string of series id which can be found @ https://fred.stlouisfed.org

- `start` : **optional** string of start date, Defaults to blank string which sets the start date as far back as the series goes. 

- `end` : **optional** string of end date, Defaults to blank string which sets the end date to as present as the series gets.

### Example use
Let's fetch data on Commercial and Industrial Loans, All Commercial Banks from beginning of series to present day.

``` py
import FedPy

FRED = FedPy.FRED(
  api_key = "*YOUR API KEY*"
)
LIBOR = FRED.get_series("TOTCI") #"TOTCI" is the series_id
print(LIBOR)
```
*NOTE* : We didn't set a start or end date so it defaults to all.

#### Output:
```
1973-01-03     134.0421
1973-01-10     134.4069
1973-01-17     134.9826
1973-01-24     135.8008
1973-01-31     137.0512
...           ...    
2021-09-29    2431.7251
2021-10-06    2424.3470
2021-10-13    2423.9121
2021-10-20    2428.9191
2021-10-27    2434.2663
Length: 2548, dtype: float64
```

