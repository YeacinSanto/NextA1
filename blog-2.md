
## Utility Types


Let's take a scenario you have a product cart where You have everything you need and now you just want the summary, now instead of creating a new table/type you can just use typescript pick and omit to show the summary

```
type Product = {
    id : number,
    name : string,
    price : string,
    stock : number,
    color? : string
}
```
# Pick
I will take 
everything I need

```
type ProductSummary = Pick<Product,"id"|"name"|"price">
```

# Omit
 I will exclude everything that I don't need
 
```
type ProductWitoutStock = Omit<Product,"stock"|"color">
```

thats how you can clean and dry your code because you always reuse the master interface