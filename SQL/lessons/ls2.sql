-- ДЗ
-- В БД group_181022 cоздайте таблицу goods (id целое число, title строка 64, quantity целое число, price дробное число 2 знака после точки)
-- Добавить несколько строк
-- Удалить таблиц
use group_181022;

drop table if exists goods;
create table goods (
	id integer primary key auto_increment,
    title varchar(64),
    quantity integer check(quantity between 10 and 20),
    price numeric(7, 2) check (price > 2)
);

select * from goods; 

insert into goods (title, quantity, price) values ("apple", 11, 100.55),
													("orange", 12, 23.98),
                                                    ("pineapple", 17, 10.11);
                                                    
insert into goods (title, price) values ("apple", 100.55);

drop table goods;

-- constraints
-- NOT NULL - нельза создавать строку со значением null в указанном поле
-- UNIQUE - значение в поле должно быть уникальным 
-- PRIMARY KEY - (not null + unique)
-- CHECK - проверяет подходит ли значение по условию

-- delete string

delete from goods
where price >= 14;

truncate goods;

set sql_safe_updates = 0;

-- ИЗМЕНЕНИЕ ДАННЫХ
update goods
set quantity = 17, price = 90.00
where title = "apple";

-- ALTER TABLE - ИЗМИНЕНИЕ ПОЛЕЙ

-- Добавить новое поле
alter table goods
add country varchar(64);

-- Удалить поле
alter table goods
drop column country;

-- Изменить поле (изменить тип данных)
alter table goods
modify column price numeric(6, 2);

-- Изменение имени поле
alter table goods
change title product_title varchar(64);

alter table goods
rename column product_title to product;

-- Удалить констрейнт
alter table goods
drop check goods_chk_2;

-- add constraint
alter table goods
add constraint custom_check check(price > 1);

-- praxice 
-- 1. Создайте таблицу goods 
-- id целое число первичный ключ авто-инкремент, 
-- title строка 128, 
-- quantity целое число, допустимые значения от 0 до 10
drop table if exists goods;
create table goods (
	id integer primary key auto_increment,
    title varchar(64),
    quantity integer check(quantity between 0 and 10)
);

-- 2. Заполнить 5 строками
insert into goods (title, quantity) values ("apple", 10),
											("orange", 10),
											("pineapple", 7),
											("strawberry", 9),
											("cherry", 7);

-- 3. Добавить поле price (целое число) со значением по умолчанию 10
alter table goods
add price integer default 10;

-- 4. Изменить тип данных price на numeric(8, 2). Перед изменением типа данных необходимо очистить поле
update goods
set price = null;

alter table goods
modify column price numeric(8, 2);

-- 5. Переименовать поле price на item_price
alter table goods 
rename column price to item_price;

-- 6. Удалить это поле (item_price)
alter table goods
drop item_price;

-- praxice 2
-- 1. Создать таблицу students с полями

-- name (не null)
-- lastname (не null)
-- avg_mark (от 0 до 5)
-- gender varchar(128) (или “M” или “F”)
drop table if exists students;
create table students (
	firstname varchar(34) not null,
    lastname varchar(34) not null,
    avg_mark numeric(2, 1) check(avg_mark between 0 and 5),
    gender varchar(128) check(gender in ("M", "F"))
);

-- 2. Добавить 5 записей студентов
insert into students (firstname, lastname, avg_mark, gender) values ("Oleg", "Petrov", 4.3, "M"),
																("Semen", "Stepanov", 3.1, "M"),
                                                                ("Olga", "Semenova", 4.7, "F"),
                                                                ("Igor", "Romanov", 3.1, "M"),
                                                                ("Irina", "Ivanova", 2.2, "F");
                                                                
-- 3. Добавить поле id целое число первичный ключ авто-инкремент 
alter table students
add id integer primary key auto_increment;

-- 4. Поменять тип у gender на char(1)
alter table students 
modify column gender char(1);






