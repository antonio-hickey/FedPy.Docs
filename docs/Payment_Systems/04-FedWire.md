# FedWire

## About
FedWire is a real-time gross settlement funds transfer system operated by the Federal Reserve that allows financial institutions to electronically transfer funds between its more than 9,289 participants (as of March 19, 2009).

FedPy allows you to quickly and seamlessly pull FedWire data.


## funds()

### About
The Fedwire Funds Service is a credit transfer service. Participants originate funds transfers by instructing a Federal Reserve Bank to debit funds from its own account and credit funds to the account of another participant. Participants may originate funds transfers online, by initiating a secure electronic message, or off line, via telephone procedures.

``` py
FedPy.FedWire().funds()
```
Returns a `DataFrame` of FedWire Funds annual data, and takes in no parameters.

### Example use
``` py
import FedPy

fedwire_funds = FedPy.FedWire().funds()
print(fedwire_funds)
```

#### Output's:
```
Year  ... Average daily value of transfers ($millions)
2020  ...                                    3,322,067
2019  ...                                    2,772,252
2018  ...                                    2,853,433
2017  ...                                    2,948,593
2016  ...                                    3,055,624
2015  ...                                    3,312,026
...   ...                                    ...
1987  ...                                      604,974
```

## securities()


### About
The Federal Reserve Banks provide the Fedwire Securities Service, a securities settlement system that enables participants to hold, maintain, and transfer Fedwire-eligible securities.

``` py
FedPy.FedWire().securities()
```
Returns a `DataFrame` of FedWire Securities annual data, and takes in no parameters.

### Example use
``` py
import FedPy

fedwire_securities = FedPy.FedWire().securities()
print(fedwire_securities)
```

#### Output's:
```
Year  ... Securities held in custody at year end ($millions)
2020  ...                                         96,952,666
2019  ...                                         88,271,327
2018  ...                                         85,141,500
2017  ...                                         76,440,851
2016  ...                                         74,039,804
2015  ...                                         70,489,690
2014  ...                                         67,914,939
2013  ...                                         65,725,983
2012  ...                                         63,196,046
2011  ...                                         60,295,945
2010  ...                                         56,722,615
...   ...                                         ...
1989  ...                                                   
```

