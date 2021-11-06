# Check Services

## About 
The Federal Reserve Check Services offer a suite of electronic and paper check processing options.

FedPy allows you to quickly fetch data on these Check Services.

## cc()

### About
``` py 
FedPy.Check_Services().cc()
```
Returns a `DataFrame` of annual data on Commercial Collected check's processed by the Federal Reserve. 

This command takes in no parameters.

### Example use
``` python
import FedPy

comm_collected = FedPy.Check_Services().cc()
print(comm_collected)
```

#### Output:
```
Year  ...  Average value per check (dollars)
2020  ...                             2091.0
2019  ...                             1895.0
2018  ...                             1790.0
2017  ...                             1638.0
2016  ...                             1543.0
2015  ...                             1487.0
2014  ...                             1412.0
2013  ...                             1329.0
2012  ...                             1273.0
2011  ...                             1187.0
...   ...                             ...
1989  ...                              679.0
```

## cr()

### About
``` py
FedPy.Check_Services().cr()
```
Returns a `DataFrame` of annual data on Commercial Returned check's processed by the Federal Reserve. 

This command takes in no parameters.

### Example use
``` python
import FedPy

comm_returned = FedPy.Check_Services().cr()
print(comm_returned)
```

#### Output:
```
Year  ...  Average value per check (dollars)
2020  ...                             2794.0
2019  ...                             2125.0
2018  ...                             1949.0
2017  ...                             1705.0
2016  ...                             1605.0
2015  ...                             1529.0
2014  ...                             1404.0
2013  ...                             1301.0
2012  ...                             1190.0
2011  ...                             1074.0
...   ...                             ...
1989  ...                                NaN
```

## gc()

### About
``` py
FedPy.Check_Services().gc()
```
Returns a `DataFrame` of annual data on Government Check's processed by the Federal Reserve. 

This command takes in no parameters.

### Example use
``` python
import FedPy

gov_checks = FedPy.Check_Services().gc()
print(gov_checks)
```

#### Output:
```
Year  ...  Average value per check (dollars)
2020  ...                            24672.0
2019  ...                             2893.0
2018  ...                             2784.0
2017  ...                             2595.0
2016  ...                             2625.0
2015  ...                             2413.0
2014  ...                             2259.0
2013  ...                             1864.0
2012  ...                             1649.0
2011  ...                             1523.0
...   ...                             ...
1989  ...                             1174.0
```

## pmo()

### About
``` py
fedpy.check_services().pmo()
```
returns a `dataframe` of annual data on postal money order's processed by the federal reserve. 

this command takes in no parameters.

### Example use
``` python
import fedpy

postal_money_orders = fedpy.check_services().pmo()
print(postal_money_orders)
```

#### Output:
```
year  ...  average value per postal money order (dollars)
2020  ...                                           269.0
2019  ...                                           266.0
2018  ...                                           254.0
2017  ...                                           243.0
2016  ...                                           235.0
2015  ...                                           226.0
2014  ...                                           220.0
2013  ...                                           220.0
2012  ...                                           204.0
2011  ...                                           197.0
...   ...                                           ...
1989  ...                                            97.0
```

## all()

### About
``` py
fedpy.check_services().all()
```
returns a `dataframe` of annual data on postal money order's, government checks, commercial collected checks, and commercial returned checks all aggregated together. 
this command takes in no parameters.

### Example use
``` python
import fedpy

all_check_services = fedpy.check_services().all()
print(all_check_services)
```

#### Output:
```
Year  Volume (millions of items)  Value (billions of dollars)
2020                      3944.0                      10014.0
2019                      4548.0                       8546.0
2018                      4905.0                       8711.0
2017                      5325.0                       8658.0
2016                      5419.0                       8314.0
2015                      5637.0                       8325.0
2014                      5937.0                       8323.0
2013                      6214.0                       8192.0
2012                      6680.0                       8431.0
2011                      7023.0                       8273.0
...                       ...                          ...
1989                     18863.0                      12971.0
```
