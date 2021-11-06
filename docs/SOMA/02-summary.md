# summary()

## About

``` python
FedPy.SOMA().summary()
```
This command takes no parameters, and is for aggregating the value of each type of security held in the SOMA portfolio. Returning a `DataFrame` organized by `asOfDate`, `security type`, and `total`.

## Example use

``` python
import FedPy

SOMA_summery = FedPy.SOMA().summary()
print(SOMA_summery)
```

#### Output:
```
     asOfDate               mbs  ...    agencies             total
0  2021-11-03  2518432273010.10  ...  2347000000  7996833535330.90
```

