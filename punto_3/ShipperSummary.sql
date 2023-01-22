use StoreSample

Select companyname, 
		SUM(freight) as TotalFreight , 
		Sum(CostShipped)as TotalCostShipped,  
		Sum(ItemsShipped)as TotalItemsShipped
	from Sales.Shippers S
		inner join Sales.Orders O on S.shipperid = O.shipperid
		inner join ( 
			SELECT   orderid, SUM(unitprice * qty) as CostShipped 
			FROM Sales.OrderDetails
				group by orderid
		) TCS On TCS.orderid = O.orderid
		inner join (
			SELECT   orderid, SUM(qty) as ItemsShipped 
			FROM Sales.OrderDetails
			group by orderid) TIS On TIS.orderid = O.orderid
	group by companyname 
order by companyname