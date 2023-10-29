-- Agrigation function
-- count() 
-- min()
-- max()
-- sum()
-- avg()

-- practice
-- 1. Найти имя, фамилию и зп сотрудника с самой высокой зарплатой
use hr;
select
	first_name,
    first_name,
    salary
from employees
where salary = (select max(salary) from employees);

-- 3. Найти кол-во сотрудников в каждом департаменте. Вывести кол-во сотрудников employees_cnt и department_name
select
	t2.department_name,
    t2.department_id,
	count(t1.department_id) as employees_cnt
from employees t1
left join departments t2
on t1.department_id = t2.department_id
group by t2.department_name;

SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));

-- 4. Найти сотрудников (имя, фамилия, зарплата), у которых максимальная зарплата в их департаментах
-- 	1
select
	t1.first_name,
    t1.last_name,
    t2.department_name,
	max(t1.salary) as max_salary
from employees t1
left join departments t2
on t1.department_id = t2.department_id
group by t2.department_name;
-- 	2

-- Максимальна зп в каждом департаменте 
select
 department_id,
    max(salary) as max_salary
from employees
group by department_id;

select
	t1.first_name,
    t1.last_name,
    t1.salary
from employees t1
inner join (
	select
		department_id,
		max(salary) as max_salary
	from employees
	group by department_id
) t2
on t1.department_id = t2.department_id
and t1.salary = t2.max_salary;

-- having - like 'where' but when we use group by


-- 5. Разделите самолеты на ближне-, средне- и дальнемагистральные. 
-- 	  Ближнемагистральными будем считать самолеты, дальность полета которых > 1000 км и <= 2500 км. 
--    Среднемагистральными — с дальностью полета > 2500 км и <= 6000 км. 
--    Дальнемагистральными — с дальностью полета > 6000 км. 
--    В выборке должно быть два столбца, где в первом указана модель самолета. 
--    Во втором, category, — категория, со значениями short-haul, medium-haul, long-haul (ближне-, средне- и дальнемагистральные соответственно). Если максимальная дальность полета <= 1000 км или данных о дальности полета нет, в category выведите 'UNDEFINED'.
--    В выборке должны присутствовать два атрибута — model_name, category.

select 
	model_name,
    case 
		when range_ > 1000 and range_ <= 2500 then "short-haul"
        when range_ > 2500 and range_ <= 6000 then "medium-haul"
        when range_ > 6000 then "long-haul"
        else "undefined"
    end category
from airliners;





