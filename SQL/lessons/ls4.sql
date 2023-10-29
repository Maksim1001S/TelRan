use university;

select
	t1.title
from courses t1
left join students2courses t2
on t1.id = t2.course_id
where t2.student_id is null;


-- ПРАКТИКА
-- 1. Найти компетенции, которых нет ни у одного преподавателя

select
	t1.title
from competencies t1
left join teachers2competencies t2
on t1.id = t2.competencies_id
where t2.teacher_id is null;

-- 2. Вывести название курса и имя старосты этого курса

select
	t1.title,
    t2.name
from courses t1
inner join students t2
on t1.headman_id = t2.id;


-- 3. Вывести имя студента, курсы которые он посещает и имя старосты этого курса

select
	t1.name as student_name,
    t3.title,
    t4.name as headman_name
from students t1
inner join students2courses t2
on t1.id = t2.student_id
inner join courses t3
on t2.course_id = t3.id
inner join students t4
on t3.headman_id = t4.id;


-- ПРАКТИКА 2
use airport;

-- 1. Менеджеры авиакомпании потребовали выяснить количество различных моделей самолетов. 
-- Выведите все доступные модели, исключая дубликаты.
-- В выборке должен присутствовать один атрибут — model_name.

select distinct
	model_name
from airliners;

-- 2. Аналитическое подразделение решило уточнить у авиакомпании количество билетов не бизнес-класса.
-- Напишите запрос, который выведет id билетов, класс обслуживания в которых отличен от бизнес-класса (Business).
-- В выборке должен присутствовать один атрибут —  id.

select
	id
from tickets
where service_class != 'Business';

-- 3. Определите id рейсов, которые должны были вылететь из аэропорта Домодедово (DME), но были отменены.
-- В выборке должен присутствовать один атрибут — id.

select
	id
from trips
where departure = 'DME' and status = 'Cancelled';

-- 4. Определите имена и фамилии пассажиров, чьи идентификаторы заканчиваются на RCB или FCV, а номера телефонов не начинаются на +705.
-- В выборке должен присутствовать один атрибут — name.

select
	name
from clients
where (id like '%RCB' or id like '%FCV')
and phone not like '+705%';


-- 5. Найдите коды всех рейсов (trip_code), которые прибыли в пункт назначения и идентификатор которых начинаются на 'Y'. 
-- Название столбца в выборке должно быть flight. Отсортируйте выборку по коду рейса в порядке возрастания.
-- В выборке должен присутствовать один атрибут — flight.

select
	trip_code as flight
from trips
where id like 'y%' and status = 'Arrived'
order by flight;


-- 6. Выведите список имен пассажиров, чей рейс был отложен. Предусмотрите в выборке аэропорт отправления.
-- В выборке должно присутствовать два атрибута — name, departure.

select
	t1.name,
    t3.departure
from clients t1
inner join tickets t2
on t1.id = t2.client_id
inner join trips t3
on t2.trip_id = t3.id
where t3.status = 'Delayed';


-- 7. Определитель модель самолета, который не совершил ни одного рейса.
-- В выборке должен присутствовать один атрибут — model_name.

select
	t1.model_name
from airliners t1
left join trips t2
on t1.id = t2.airliner_id
where t2.trip_code is null;


-- 8. Определите имена пассажиров и цену билета, класс обслуживания который эконом-премиум.
-- В выборке должно присутствовать два атрибута — name, price.

select
	t1.name,
    t2.price
from clients t1
inner join tickets t2
on t1.id = t2.client_id
where t2.service_class = 'PremiumEconomy';

