# repo()

## About

``` python
FedPy.TOMO().repo(asDict: bool)
```

Returns a `DataFrame` of historical repo operation's.

#### Parameters:
- `asDict` : boolean, if True returns as dictionary, but Defaults to False

## Example use
Let's fetch data on reverse repo operation's. 
``` python
import FedPy

tomo = FedPy.TOMO()
repo_ops = tomo.repo()
print(repo_ops)
```

#### Output:
```
                                                           2021-11-05  ...                                         2003-02-07
eventCode                                                         730  ...                                                730
eventDescription                                              Results  ...                                            Results
productCode                                                        70  ...                                                 70
productDescription                       Repo/Reverse Repo Operations  ...                                    Repo Operations
businessId                                                RP 110521 1  ...                                      RP02070312001
postId                           7aeec088-2a9a-45f0-b698-35dd28067d2a  ...               31b9e26a-46d7-4777-ad8b-edaa4cb13f29
postDt                                                     2021-11-05  ...                                         2003-02-07
insertTs                                      2021-11-05T13:25:13.064  ...                            2013-09-28T09:51:58.000
origInsertTs                                  2021-11-05T12:45:03.920  ...                            2013-09-28T09:51:58.000
data                {'operationDt': '2021-11-05', 'deliveryDt': '2...  ...  {'operationDt': '2003-02-07', 'deliveryDt': '2...
```
