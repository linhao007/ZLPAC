CREATE DATABASE SecTraAuction;

USE SecTraAuction;

#创建管理员表
CREATE TABLE t_admin
(

admin VARCHAR(10) PRIMARY KEY,
 
pasword VARCHAR(16)

);


#创建级别表
CREATE TABLE t_rank
(

r_rank TINYINT PRIMARY KEY,

r_range VARCHAR(8),

r_cmsion INT


);




#创建会员表



CREATE TABLE t_user
(
u_id  VARCHAR(15) PRIMARY KEY,

u_name VARCHAR(15),

psword VARCHAR(25),

email VARCHAR(30),

tel VARCHAR(13),

r_rank TINYINT,

vipTime INT ,

paytime DATETIME,

reIntro VARCHAR(50),

cardID CHAR(18),
tname VARCHAR(30),
u_address VARCHAR(30),
CONSTRAINT pk_rank FOREIGN KEY(r_rank) REFERENCES t_rank(r_rank) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO t_user( u_id,u_name) VALUES('dynamo','小段');
INSERT INTO t_user( u_id,u_name) VALUES('thorn','小名');
#创建车辆信息表
CREATE TABLE t_vehicle
(
v_id  VARCHAR(7) PRIMARY KEY,

note VARCHAR(100),

loc VARCHAR(50),

vname VARCHAR(20),

regTime DATETIME,

VERSION VARCHAR(20),

gear TINYINT,

vframe VARCHAR(30),

pledge varchar(6),

motor VARCHAR(15),

gearBox VARCHAR(15),

output VARCHAR(15),

mairSac VARCHAR(15),

sairSac VARCHAR(15),

fBroke TINYINT,

fTransfer TINYINT,

fDisass TINYINT,

fAgain TINYINT,

fBRule TINYINT,

fMort TINYINT,

tel VARCHAR(13),

source VARCHAR(20)

);
INSERT INTO t_vehicle( v_id,vname) VALUES('赣1001','奥迪A6');
INSERT INTO t_vehicle( v_id,vname) VALUES('赣1002','丰田1');
INSERT INTO t_vehicle( v_id,vname) VALUES('赣1003','奔驰6');
INSERT INTO t_vehicle( v_id,vname) VALUES('赣1004','宝马1');
#创建会员活动表
#beginAuction  默认为0 开始竞拍为1
#stopAuction 默认为0 终止竞拍为1
CREATE TABLE t_userpart(
u_id VARCHAR(15),
v_id VARCHAR(7),
price VARCHAR(6),
state TINYINT,
attention TINYINT,
pledge VARCHAR(6),
currentTime DATETIME ,
beginAuction TINYINT DEFAULT 0,
stopAuction TINYINT  DEFAULT 0
);
ALTER TABLE t_userpart ADD CONSTRAINT pk_up1 PRIMARY KEY(u_id,v_id);
ALTER TABLE t_userpart ADD CONSTRAINT fk_up112 FOREIGN KEY(u_id) REFERENCES t_user(u_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE t_userpart ADD CONSTRAINT fk_up2 FOREIGN KEY(v_id) REFERENCES t_vehicle(v_id) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO t_userpart(u_id,v_id,price,state,attention,pledge,currentTime) VALUE('dynamo','赣1001',2000,1,1,5000,'2014-10-21 17:31:40');
INSERT INTO t_userpart(u_id,v_id,price,state,attention,pledge,currentTime) VALUE('thorn','赣1002',4000,1,1,5000,'2014-10-22 17:31:40');

#创建网站公告
CREATE TABLE t_notice(
n_id INT(11) PRIMARY KEY AUTO_INCREMENT,
content TEXT,
title VARCHAR(30),
n_time DATETIME
);


#创建银行卡信息表
CREATE TABLE t_card(
c_id INT PRIMARY KEY AUTO_INCREMENT,
card_id VARCHAR(30),
address VARCHAR(50),
owner VARCHAR(30),
type VARCHAR(30)
);



#创建车辆竞拍表
CREATE TABLE t_bid(
bid_id INT(11) PRIMARY KEY AUTO_INCREMENT,
bidTime datetime,
bSpri int(8),
plusPri int(6),
bidEndTime datetime,
v_id varchar(7) 
);
ALTER TABLE t_bid ADD CONSTRAINT fk_up11 FOREIGN KEY(v_id) REFERENCES t_vehicle(v_id) ON DELETE CASCADE ON UPDATE CASCADE;

insert into t_bid(bidTime,bSpri,plusPri,bidEndTime,v_id) value('2014-10-22 17:34:40',2000,500,'2014-10-22 17:39:40','赣1001');
insert into t_bid(bidTime,bSpri,plusPri,bidEndTime,v_id) value('2014-10-22 18:34:40',3000,1000,'2014-10-22 18:39:40','赣1002');







