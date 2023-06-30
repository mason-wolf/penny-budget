
-- What was the amount spent by category for this year?
select t.category, sum(t.amount) as amount,
monthname(t.date) as month
from transactions t
where year(t.date) = 2023
and archived = 1
and category = 'Food & Dining'
group by month(t.date)
