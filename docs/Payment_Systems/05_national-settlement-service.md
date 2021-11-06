# National Settlement Service

## About
The Federal Reserve provide the National Settlement Service (NSS), which allows participants in private-sector clearing arrangements to exchange and settle transactions on a multilateral basis through designated master accounts held at the Federal Reserve.

## fetch()

### About

```
FedPy.NSS().fetch()
```
Returns a `DataFrame` of annual National Settlement Service data, and takes in no parameters.

### Example use
``` py
import FedPy

nss = FedPy.NSS().fetch()
print(nss)
```

#### Output's:
```
Year  ... Average daily settlement value ($millions)
2020  ...                                     92,748
2019  ...                                     86,633
2018  ...                                     83,211
2017  ...                                     77,158
2016  ...                                     71,646
2015  ...                                     71,768
...   ...                                     ...
1999  ...                                        847
```
