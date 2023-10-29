use hr;

select 
	*
from employees;
-- 1. Вывести сотрудников (имя, фамилия, мэйл и зарплата), которые зарабатывают больше 10000 и чье имя содержит букву o
select 
	first_name,
    last_name,
    email,
    salary
from employees
where salary > 10000
and first_name like "%o%";

-- 2. Вывести названия департаментов с location_id 170
select 
	department_name,
    location_id
from departments
where location_id = '1700';

-- 3. Вывести страны у которых регион 1 или 4
select 
	country_name,
	region_id
from countries
where region_id = 1 or region_id = 4;

-- create Database
create database Group_181022;

-- choose Database
use Group_181022;

-- drop DB
drop database Group_181022;

-- create table
drop table if exists users;
create table users (
	id int,
    firstname varchar(32),
    lastname varchar(32),
    avg_mark numeric(2, 1)
);

-- drop table
DELETE FROM users
WHERE firstname = 'Olga';
	

insert into users (id, firstname, lastname, avg_mark) values (1, 'Olga', 'Orlova', 4.5),
															(2, 'Elena', 'Petrova', 3.3), 
															(3, 'Ivan', 'Ushanov', 4.9), 
                                                            (4, 'Anna', 'Ivanova', 3.8), 
                                                            (5, 'Igor', 'Smirnov', 4.1);