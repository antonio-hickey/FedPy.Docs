# ACH

## About
The automated clearinghouse (ACH) system is a nationwide network through which depository institutions send each other batches of electronic credit and debit transfers.

FedPy grants you the ability to quickly and seamlessly fetch this data for your desired use. 

## commercial()

### About
``` python
FedPy.ACH().commercial()
```
Returns a `DataFrame` of annual commercial ACH data, and takes in no parameters.

### Example use
``` python
import FedPy

ach_comm = FedPy.ACH().commercial()
print(ach_comm)
```

#### Output:
```
Year  ... Average value per transaction (dollars)
2020  ...                                    1900
2019  ...                                    1802
2018  ...                                    1760
2017  ...                                    1702
2016  ...                                    1680
2015  ...                                    1672
2014  ...                                    1712
2013  ...                                    1767
2012  ...                                    1809
2011  ...                                    1720
...   ...                                    ...
1989  ...                                    5182
```

## government()

### About
``` python
FedPy.ACH().government()
```
Returns a `DataFrame` of annual government ACH data, and takes in no parameters.

### Example use
``` python
import FedPy

ach_gov = FedPy.ACH().government()
print(ach_gov)
```

#### Output:
```
Year  ... Average value per transaction (dollars)
2020  ...                                    3648
2019  ...                                    3396
2018  ...                                    3306
2017  ...                                    3296
2016  ...                                    3257
2015  ...                                    3245
2014  ...                                    3214
2013  ...                                    3214
2012  ...                                    3336
2011  ...                                    3476
...   ...                                    ...
1989  ...                                     887
```

## all()

### About
``` python
FedPy.ACH().all()
```
Returns a `DataFrame` of annual commercial & government ach data aggregated, and takes in no parameters.


### Example use

``` python
import FedPy

ach_all = FedPy.ACH().all()
print(ach_all)
```

#### Output:
```
Year  Volume (millions of items)  ...  Average daily value (billions of dollars)  Average value per transaction (dollars)
2020                     18427.0  ...                                      149.6                                   5548.0
2019                     17288.0  ...                                      135.0                                   5198.0
2018                     16360.0  ...                                      125.0                                   5066.0
2017                     15378.0  ...                                      115.1                                   4998.0
2016                     14554.0  ...                                      107.4                                   4937.0
2015                     13856.0  ...                                      102.0                                   4917.0
...                      ...      ...                                       ...                                    ...
1989                      1182.0  ...                                       17.1                                   6069.0
```
