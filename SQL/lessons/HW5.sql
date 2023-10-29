-- ДЗ (база hr)
-- 1. Найти департаменты, в которых больше 10 сотрудников
-- 2. Найти департамент с наибольшим кол-вом сотрудников 
-- 3. Найти департаменты в которых есть работники, зарабатывающие больше 10 000. В результате выборки формируются два поля (department_id и поле со значениями 1 или 0)
-- 4. Найти департаменты в которых все работники зарабатывают больше 10 000. В результате выборки формируются два поля (department_id и поле со значениями 1 или 0)
-- 5. Найти департаменты в которых все работники зарабатывают больше 10 000. В результате выборки формируются два поля (department_name и поле со значениями 1 или 0)
use hr;
-- 1

-- department_id with more like 10 employees +
select 
	department_id,
	count(department_id) as department_count
from employees
group by department_id
having department_count >= 10;

-- find name of department
select 
	t1.department_name
from departments t1 
right join ( 
select 
	department_id,
	count(department_id) as department_count
from employees
group by department_id
having department_count >= 10
) t2
on t1.department_id = t2.department_id;


-- 2

-- department_id with the most employees
		-- 1
			select 
				max(cnt) as max_dep
			from (
				select 
					department_id,
					count(department_id) as cnt
				from employees
				group by department_id
			) t1;
		-- 2
			select 
				department_id
			from employees
			group by department_id
			having count(*) = (
					select 
						max(cnt) as max_dep
					from (
					select 
						department_id,
						count(department_id) as cnt
					from employees
					group by department_id
				) t1
			);
-- find name of department
select
	department_name
from departments
where department_id in (
	select 
		department_id
	from employees
	group by department_id
	having count(*) = (
		select 
			max(cnt) as max_dep
		from (
			select 
				department_id,
				count(department_id) as cnt
			from employees
			group by department_id
		) t1
	)
);
    


-- 3 +
select
	department_id,
    case
		when salary > 10000 then 1
        else 0
	end salary_moreLike_10000
from employees
group by department_id;

-- 4
select
	department_id,
    case 
		when count(CASE WHEN salary < 10000 THEN 1 END) = 0 then 1
		else 0
	end all_salary_more10000
from employees
group by department_id;

-- 5
select  
	t2.department_name,
    t1.all_salary_more10000
from (select
	department_id,
    case 
		when count(CASE WHEN salary < 10000 THEN 1 END) = 0 then 1
		else 0
	end all_salary_more10000
from employees
group by department_id) t1
inner join departments t2
on t1.department_id = t2.department_id;















-- on lesson 

-- 1. Найти департаменты, в которых больше 10 сотрудников

select
 department_name
from departments
where department_id in (
 select
  department_id
 from employees
 group by department_id
 having count(*) > 10
);

select
 max(department_name)
from departments t1
inner join employees t2
on t1.department_id = t2.department_id
group by t2.department_id
having count(*) > 10;



-- 2
-- найти кол-во сотрудников в каждом департаменте

select
  department_id,
        count(*) as cnt
from employees
group by department_id;

-- найти максимальное кол-во сотрудников среди всех департаментов 

select
 max(cnt) as max_cnt
from (
 select
  department_id,
        count(*) as cnt
 from employees
 group by department_id
) t1;



-- найти айди департамента с указанным количеством сотрудников (45)

select
 department_id
from employees
group by department_id
having count(*) = (
 select
  max(cnt) as max_cnt
 from (
  select
   department_id,
   count(*) as cnt
  from employees
  group by department_id
 ) t1
);

-- найти название департамента по его айди

select
 department_name
from departments
where department_id in (
 select
  department_id
 from employees
 group by department_id
 having count(*) = (
  select
   max(cnt) as max_cnt
  from (
   select
    department_id,
    count(*) as cnt
   from employees
   group by department_id
  ) t1
 )
);


-- 3. Найти департаменты в которых есть работники, зарабатывающие больше 10 000. 
-- В результате выборки формируются два поля (department_id и поле со значениями 1 или 0)

select
 department_id,
    max(
  case
   when salary > 10000 then 1
            else 0
  end
    ) as rich_people
from employees
group by department_id;

-- 4
select
 department_id,
    min(
  case
   when salary > 10000 then 1
            else 0
  end
    ) as rich_people
from employees
group by department_id;


-- 5. Найти департаменты в которых все работники зарабатывают больше 10 000. 
-- В результате выборки формируются два поля (department_name и поле со значениями 1 или 0)

select 
 t1.department_name,
    t2.rich_people
from departments t1
inner join (
 select
  department_id,
  min(
   case
    when salary > 10000 then 1
    else 0
   end
  ) as rich_people
 from employees
 group by department_id
) t2
on t1.department_id = t2.department_id;