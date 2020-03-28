

create table User (
id int auto_increment not null,
email varchar(255) not null unique,
password varchar(255) not null
);

create table Client (
id int auto_increment not null,
first_name char(255) not null,
last_name char(255) not null,
phone varchar(255) not null,
email varchar(255) not null unique
);

create table Address (
street varchar(255) not null,
city varchar(255) not null,
state varchar(255) not null,
county varchar(255) not null
);

create table Job (
submit_date varchar(255) not null,
service_date varchar(255) not null,
roof_grade varchar(255) not null,
notes varchar(255) not null
);