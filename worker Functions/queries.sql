
-- Table for users
create table users(id int not null PRIMARY KEY auto_increment,username varchar(20) not null UNIQUE,email varchar(20) not null UNIQUE,password varchar(50) not null);

-- Table for products
create table products(
	id int not null PRIMARY KEY auto_increment,
	p_name varchar(50) not null,
	p_price bigint(50000) not null,
	p_desc varchar(500) not null,
	p_images varchar(10000)
);
