# fomc_statement() 

## About
``` py
FedPy.Publications().fomc_statement(dates)
```

Returns a `DataFrame` of FOMC Statement's

#### Parameters:
- `dates`: string for single date, list of strings for multiple dates, or None for all dates.
  - date format:
    * YYYY-MM-DD : the FOMC Statement for YYYY-MM-DD.
    * "current" : the most recent FOMC Statement.
    * "previous" : the previous FOMC Statement.
    * `None` : All FOMC Statement's.

## Example use
``` py
import FedPy

publications = FedPy.Publications()
current_statement = publications.fomc_statement("current")
print(current_statement)
```

#### Output:
```
date        statement
2021-11-03  The Federal Reserve is committed to using its ...
```
