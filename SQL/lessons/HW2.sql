-- ДЗ
-- 1. Переименовать поле name на firstname
-- 2. Выборки
-- найти учеников, у которых оценка больше 4
-- найти учеников, у которых не входит в диапазон от 3 до 4
-- найти учеников, у которых имя начинается на И
-- найти учеников, у которых оценка 2.2 или 3.1 или 4.7
-- 3. *Увеличить всем учащимся оценку в 10 раз
-- 4. Поменять у Олега Петрова фамилию на Сидоров
-- 5. Для всех учеников, у которых оценка не больше 31, увеличить оценку на 10

use group_181022;
-- 1 Переименовать поле name на firstname
alter table students
change firstname_1 firstname varchar(64);

-- 2. Выборки
-- найти учеников, у которых оценка больше 4
select
 *
from students
where avg_mark > 4;
-- найти учеников, у которых не входит в диапазон от 3 до 4
select
 *
from students
where avg_mark not between 3 and 4;


-- найти учеников, у которых имя начинается на И
select
 *
from students
where firstname like 'i%';

-- найти учеников, у которых оценка 2.2 или 3.1 или 4.7
select
 *
from students
where avg_mark in (2.2, 3.1, 4.7);

-- 3 *Увеличить всем учащимся оценку в 10 раз

set sql_safe_updates = 0;

alter table students
modify column avg_mark numeric(3, 1);

alter table students
drop check students_chk_1;

update students
set avg_mark = avg_mark * 10;

-- 4. Поменять у Олега Петрова фамилию на Сидоров
update students
set lastname = 'Sidorov'
where firstname = 'Oleg'
and lastname = 'Petrov';

-- 5. Для всех учеников, у которых оценка не больше 31, увеличить оценку на 10

update students
set avg_mark = avg_mark + 10
where avg_mark <= 31;










