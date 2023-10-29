create database tmp;

use tmp;

-- Вывести имя и фамилию покупателей и идентификаторы их заказов. Если у покупателя нет заказов, в поле с заказами вывести фразу "Заказов нет".
-- В выборке должны быть поля name, lastname, order_id
select 
	t1.name,
    t1.lastname,
    coalesce(t2.id, 'without orders') as order_id
from customers t1
left join orders t2
on t1.id = t2.customer_id;


-- Вывести имя и фамилию покупателей, наименование заказанных продуктов и 
-- сумму заказа. Сумма заказа рассчитывается как произведение стоимости одной 
-- единицы товара и колличество единиц в заказе. 
-- В выборке должны быть поля name, lastname, title, total_price

SELECT 
	t1.name, 
    t1.lastname, 
    t3.title, 
    t2.amount * t3.price AS total_price
FROM customers t1
left  join orders t2
ON t1.id = t2.customer_id
left join products t3
ON t2.product_id = t3.id;




-- Выведите название товаров, которые ни разу не заказывали. 
-- Для решения данной задачи используйте джоин, а не подзапросы.
--  В выборке должно быть только поле title.
select
	*
from products
where id not in (
	select distinct
		product_id
	from orders
);


select
	t1.title
from products t1
left join orders t2
on t1.id = t2.product_id
where t2.id is null;


-- Выведите имя и фамилию покупателя, у которого нет ни одного заказа.

select 
	*
from customers t1
left join orders t2
on t1.id = t2.customer_id
where t2.id is null;


-- Напишите запрос, который выводит одно поле (avg_salary) со средней зарплатой.
-- Результат округлите с точностью до двух знаков после запятой.
select 
	round(avg(salary), 2) as avg_salary
from employee;

-- Напишите запрос, который выводит имя и фамилию сотрудников с максимальной зарплатой.

-- 1
select 
	max(salary) as max_salary
from employee;
-- 2
select 
 *
from employee
where salary = (select max(salary) from employee);


-- Напишите запрос, который выводит одно поле (done_cnt) с колличеством сделаных задач.
select 
	count(done_flg) as done_count
from tasks
where done_flg;

-- сформировать три поля 
-- done_cnt - кол-во сделаных задач
-- not_done_cnt - кол-во не сделаных задач
-- total_cnt - общее кол-во задач

select
	count(
		case 
			when done_flg = 1 then 1 
		end
    ) as done_cnt,
    count(
		case 
			when done_flg = 0 then 1 
		end
    ) as not_done_cnt,
    count(*) as total_cnt
    
from tasks;


-- Найдите общую стоимость невыполненых задач. Результат выведите в поле total_payment.
select 
	sum(payment) as total_payment
from tasks
where done_flg = 0;


-- Написать запрос, который выводит максимальную зарплату в каждом департаменте. 
-- В выборке должны быть поля department_id и max_salary.

select
	max(salary) as max_salary
from employee
group by department_id;


-- Напишите запрос, который выводит имя и фамилию сотрудников с 
-- максимальной зарплатой в их департаменте.

select 
	t1.name,
    t1.lastname,
    t1.salary
from employee t1
inner join (
		select
			department_id,
			max(salary) as max_salary
		from employee
		group by department_id
    ) t2
on t1.department_id = t2.department_id
and t1.salary = t2.max_salary;


