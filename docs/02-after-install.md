# Quick start

After installing you should be able to import FedPy and start using it.

## Import FedPy to file

`import FedPy`

## Basic Usage example

Let's fetch of all the Treasury Bill's currently held in the SOMA portfolio:

``` py
import FedPy

t_bill_holdings = FedPy.SOMA().holdings("bills")
```

##### Output's a DataFrame organized by CUSIP:

```
                                9127964W6           912796N54           912796H51  ...           912796L64           912796M71           912796M89
asOfDate                       2021-11-03          2021-11-03          2021-11-03  ...          2021-11-03          2021-11-03          2021-11-03
maturityDate                   2021-11-04          2021-11-09          2021-11-12  ...          2022-08-11          2022-09-08          2022-10-06
issuer                                                                             ...                                                            
spread                                                                             ...                                                            
coupon                                                                             ...                                                            
parValue                      20426299000          4646453200         11769171200  ...          3847131500          3419277000          5630934600
inflationCompensation                                                              ...                                                            
percentOutstanding     0.1257560211293619  0.0583431654873188  0.0982657862288283  ...  0.1016500440616873  0.0913774993736779  0.1420853358794164
changeFromPriorWeek                     0                   0                   0  ...                   0                   0                   0
changeFromPriorYear                                                                ...                                                            
securityType                        Bills               Bills               Bills  ...               Bills               Bills               Bills
```



**NOTE:** The data above is of 11/03/2021 and is subject to change as the Federal Reserve conduct open market operation's buying or selling securities.


## Next Steps

- Learn how to use [SOMA](./SOMA/README.md)
- Learn how to use [TOMO](./TOMO/README.md)
- Learn how to use [FRED](./FRED/README.md)
- Learn how to use [Payment System's](./payment-systems/README.md)
- Learn how to use [Fed Publications](./publications/README.md)
