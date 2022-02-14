create table users(id int not null PRIMARY KEY auto_increment,username varchar(20) not null UNIQUE,email varchar(20) not null UNIQUE,password varchar(50) not null);
