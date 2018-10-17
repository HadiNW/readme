SELECT p.id, p.name, count (t.product_id) total FROM transactions t
JOIN products p
ON p.id = t.product_id
group by p.id


SELECT c.id, c.name, p.name, p.price, t.qty, t.subtotal, p.id product_id ,SUM(subtotal) FROM customers c
JOIN transactions t
ON c.id = t.customer_id
JOIN products p
ON p.id = t.product_id
group by c.id


SELECT customer_id, prd.name FROM products prd 
	LEFT JOIN  (		
		SELECT c.id customer_id, c.name, p.name, p.price, t.qty, t.subtotal, p.id product_id, SUM(subtotal) FROM customers c
		JOIN transactions t
		ON c.id = t.customer_id
		JOIN products p
		ON p.id = t.product_id
		group by c.id
	) tbl
	ON tbl. product_id = prd.id