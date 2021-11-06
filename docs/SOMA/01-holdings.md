# holdings() 

## About

``` python
FedPy.SOMA().holdings(security_type)
```
This will return a DataFrame with the SOMA holding's of the security type passed to it ordered by CUSIP.

##### Parameters:
- security_type : string for a security or list of string's for multiple securities.
  - Valid security types: 
    - "bills" : U.S Treasury Bills held in SOMA.
    - "notesbonds" : U.S Treasury Notes & Bonds held in SOMA.
    - "tips" : U.S Treasury Inflation Protected Securities held in SOMA.
    - "mbs" : Mortgage Backed Securities held in SOMA. 
    - "cmbs" : Commercial Mortgage Backed Securities held in SOMA. 
    - "agency debts" : Agency Debt's held in SOMA. 
    - "frn" : Floating Rate Note's held in SOMA.


## Example use
Let's pull all the U.S Treasuries held in the SOMA Portfolio, because this includes multiple security types we will need to pass a list of strings.

``` python
import FedPy


treasuries = FedPy.holdings(["bills", "notesbonds"])
print(treasuries)
```

##### Output:
```
                                9127964W6  ...           912810SZ2
asOfDate                       2021-11-03  ...          2021-11-03
maturityDate                   2021-11-04  ...          2051-08-15
issuer                                     ...                    
spread                                     ...                    
coupon                                     ...                   2
parValue                      20426299000  ...         16407222100
inflationCompensation                      ...                    
percentOutstanding     0.1257560211293619  ...  0.1794970041932151
changeFromPriorWeek                     0  ...                   0
changeFromPriorYear                        ...         16407222100
securityType                        Bills  ...          NotesBonds
```

