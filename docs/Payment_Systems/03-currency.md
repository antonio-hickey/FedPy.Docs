# Currency

## About
The Federal Reserve Board is the issuing authority for Federal Reserve notes and ensures that there is enough cash in circulation to meet the public's demand. The Federal Reserve Banks distribute, receive, and process Federal Reserve notes and distribute and receive through depository institutions.

FedPy allows you to quickly and seamlessly pull data on their Currency Service.


## in_circulation()

### About

``` py
FedPy.Currency().in_circulation(_type)
```
Returns a `DataFrame` of annual currency in circulation.

#### Parameters:
- `_type` : string, by default is set to "val" if nothing is passed.
  - Valid _type's:
    * "val", "Val", "value", or "Value" : Value of currency in circulation.
    * "vol", "Vol", "volume", or "Volume" : Volume of currency in circulation.

### Example use
``` py
import FedPy


val_in_circulation = FedPy.Currency().in_circulation("val")
vol_in_circulation = FedPy.Currency().in_circulation("vol")
print(val_in_circulation, vol_in_circulation)
```

#### Output:
```
val_in_circulation:
Year            $1  ... $500 to $10,000           Total
2020  $13100000000  ...      $300000000  $2040700000000
2019  $12700000000  ...      $300000000  $1759800000000
2018  $12400000000  ...      $300000000  $1671900000000
2017  $12100000000  ...      $300000000  $1571100000000
2016  $11700000000  ...      $300000000  $1463400000000
2015  $11400000000  ...      $300000000  $1380000000000
...   ...           ...      ...         ...
2000   $7700000000  ...      $300000000   $563900000000

vol_in_circulation:
Year    $1  ... $500 to $10,000 Total
2020  13.1  ...         0.0004  50.3
2019  12.7  ...         0.0004  44.9
2018  12.4  ...         0.0004  43.4
2017  12.1  ...         0.0004  41.6
2016  11.7  ...         0.0004  39.8
2015  11.4  ...         0.0005  38.1
...   ...   ...         ...     ...
2001   7.8  ...         0.0005  22.1
```

## printing_cost()

### About
``` py
FedPy.Currency().printing_cost()
```
Returns a `DataFrame` of the annual cost of printing currency, and takes in no parameters.

### Example use
``` py
import FedPy

printing_cost = FedPy.Currency().printing_cost()
print(printing_cost)
```

#### Output:
```
Year     Amount
2020  778000000
2019  641000000
2018  800000000
2017  674000000
2016  660000000
2015  689000000
2014  707000000
2013  717000000
...   ...
2000  456000000
```

## operation_expenses()

### About
``` py
FedPy.Currency().operation_expenses()
```
Returns a `DataFrame` of cash operation expenses, including (processing, paying, recieving, verification, destruction, transportation, and non-standerd packaging), and takes in no parameters.

### Example use
``` py
import FedPy

op_expense = FedPy.Currency().operation_expenses()
print(op_expense)
```

#### Output:
```
Year     Amount
2020  751000000
2019  700000000
2018  680000000
2017  628000000
2016  593000000
2015  578000000
...   ...
2000  329000000
```

## payments()

### About
``` py
FedPy.Currency().payments(_type)
```
Returns a `DataFrame` of payments of currency in either value or volume format.

#### Parameters:
- `_type` : string of the format type, by default is "val" if nothing is passed. 
  - Valid _type's :
    * "val", "Val", "Value", "value" : Value format.
    * "vol", "Vol", "Volume", "volume" : Volume format.

### Example use
``` py
import FedPy

payments_val = FedPy.Currency().payments("val")
payments_vol = FedPy.Currency().payments("vol")
print(payments_val, payments_vol)
```

#### Output:
```
payments_val:
Year            $1          $2  ...           $50           $100          Total
2020   $7800000000  $100000000  ...  $95900000000  $432800000000  $872800000000
2019  $10800000000  $200000000  ...  $78900000000  $367700000000  $784100000000
2018  $11300000000  $200000000  ...  $75400000000  $369200000000  $792600000000
2017  $11600000000  $200000000  ...  $71900000000  $368800000000  $789700000000
2016  $11900000000  $200000000  ...  $64500000000  $323800000000  $730000000000
2015  $12200000000  $200000000  ...  $61000000000  $328600000000  $736000000000
...   ...           ...         ...  ...           ...            ...
2000  $11500000000  $100000000  ...  $54100000000  $162500000000  $527300000000

payments_vol:
Year    $1   $2   $5  $10   $20  $50 $100 Total
2020   7.8  0.1  2.5  1.5  15.4  1.9  4.3  33.5
2019  10.8  0.1  3.2  1.7  14.7  1.6  3.7  35.7
2018  11.3  0.1  3.3  1.7  15.1  1.5  3.7  36.8
2017  11.6  0.1  3.3  1.7  15.2  1.4  3.7  37.0
2016  11.9  0.1  3.2  1.7  14.8  1.3  3.2  36.3
2015  12.2  0.1  3.2  1.9  15.0  1.2  3.3  36.8
...   ...   ...  ...  ...  ...   ...  ...  ...
2000  11.5  0.0  2.4  2.3  13.2  1.1  1.6  32.1
```

## receipts()

**TODO** : spelt receipts wrong MUST fix you retard.

### About
``` py
FedPy.Currency().reciepts(_type)
```
Returns a `DataFrame` of receipts of currency in either value or volume format.

#### Parameters:
- `_type` : string of the format type, by default is "val" if nothing is passed. 
  - Valid _type's :
    * "val", "Val", "Value", "value" : Value format.
    * "vol", "Vol", "Volume", "volume" : Volume format.

### Example use
``` py
import FedPy

receipts_val = FedPy.Currency().reciepts("val")
receipts_vol = FedPy.Currency().reciepts("vol")
print(receipts_val, receipts_vol)
```

#### Output:
```
receipts_val:
Year            $1          $2  ...           $50           $100          Total
2020   $7400000000  $100000000  ...  $74100000000  $220800000000  $592100000000
2019  $10500000000  $100000000  ...  $75800000000  $286600000000  $696000000000
2018  $11000000000  $100000000  ...  $72600000000  $277500000000  $692000000000
2017  $11300000000  $100000000  ...  $69200000000  $272400000000  $682600000000
2016  $11600000000  $100000000  ...  $60900000000  $251200000000  $646600000000
2015  $11800000000  $100000000  ...  $58300000000  $260900000000  $655400000000
...   ...           ...         ...  ...           ...            ...
2000  $11400000000  $000000000  ...  $63700000000  $170700000000  $564300000000

receipts_vol:
Year    $1   $2   $5  $10   $20  $50 $100 Total
2020   7.4  0.0  2.4  1.4  13.2  1.5  2.2  28.1
2019  10.5  0.0  3.1  1.6  14.6  1.5  2.9  34.2
2018  11.0  0.0  3.2  1.7  14.9  1.5  2.8  35.0
2017  11.3  0.0  3.2  1.7  14.8  1.4  2.7  35.2
2016  11.6  0.0  3.1  1.7  14.5  1.2  2.5  34.7
2015  11.8  0.0  3.0  1.9  14.5  1.2  2.6  35.1
...   ...   ...  ...  ...  ...   ...  ...  ...
2000  11.4  0.0  2.4  2.5  14.1  1.3  1.7  33.3
```
