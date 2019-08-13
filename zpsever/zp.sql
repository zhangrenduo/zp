#设置客户端连接服务器端的编码（SET NAMES UTF8）
SET NAMES UTF8;
#先丢弃数据库zp,如果有
DROP DATABASE IF EXISTS zp;
#创建数据库zp,设置存储的编码为UTF8
CREATE DATABASE zp CHARSET=UTF8;
#进入数据库
USE zp;

#1.求职者登录信息表job_seeker
#enum(枚举类型)类型理解
#CURRENT_TIME获取当前系统默认时间
#timestamp 用法详解
CREATE TABLE job_seeker(
    job_seeker_id INT PRIMARY KEY AUTO_INCREMENT,  #编号
    user_name VARCHAR(50) NOT NULL,                #用户名
    password  VARCHAR(50) NOT NULL,                #密码
    email VARCHAR(30) NOT NULL,                    #邮箱
    role enum('1','2','3','4') DEFAULT 1,   #1求职者 2招聘者 3管理者 4备用
    reg_time DATE                          #注册时间
);
INSERT INTO job_seeker VALUES
(NUll,'沈方倩','123456','2986125126@qq.com','1',1996-6);
INSERT INTO job_seeker VALUES
(NUll,'张仁朵','123456','1146286109@qq.com','1',2000-6);
INSERT INTO job_seeker VALUES
(NUll,'潘娅','123456','2986125126@qq.com','1',2000-6);
INSERT INTO job_seeker VALUES
(NUll,'邓浩然','123456','2986125126@qq.com','1',2000-6);


#2.求职者详细信息表job_seeker_info(外键:主表id(job_seeker_id))
CREATE TABLE job_seeker_info(
    job_seeker_info_id INT PRIMARY KEY AUTO_INCREMENT,  #编号
    name VARCHAR(20),                                   #姓名
    birthday DATE,                                      #出生日期
    highest_education VARCHAR(20),                      #最高学历
    hope_job VARCHAR(50),                               #期望职位
    phone VARCHAR(20),                                  #电话
    disability_kind VARCHAR(50),                        #残疾类别
    gender INT,                                         #性别
    location VARCHAR(50),                               #现居地址 
    work_experience VARCHAR(50),                        #工作经验
    hope_city VARCHAR(20),                              #期望城市
    email VARCHAR(30),                                  #邮箱
    job_kind VARCHAR(20),                               #工作类型
    hope_money VARCHAR(20),                             #期望薪资
    nation VARCHAR(20),                                 #民族
    marriage VARCHAR(10),                               #婚姻状况
    household VARCHAR(50),                              #户籍地区
    graduation_time DATE,                               #毕业时间
    QQ CHAR(10),                                        #QQ
    start_time DATE,                                    #到岗时间
    height VARCHAR(10),                                 #身高
    political VARCHAR(10),                              #政治面貌
    IDnumber VARCHAR(20),                               #身份证号
    job_aeeker_id INT NOT NULL,                         #主表id
    head_img_URL VARCHAR(50)                            #头像地址
);
INSERT INTO job_seeker_info VALUES
(NUll,'沈方倩','1999-04-04','专科','Web前端','15687069086','无',0,'重庆','无','昆明','2986125126@qq.com','IT','4k以上','汉族','未婚','云南曲靖','2020-06','2986125126','随时','157','共青团员','530321199904040922',1,'img/avatar/default.png');
INSERT INTO job_seeker_info VALUES
(NUll,'张仁朵','1999-04-04','专科','Web前端','15687069086','无',0,'重庆','无','昆明','2986125126@qq.com','IT','4k以上','汉族','未婚','云南曲靖','2020-06','2986125126','随时','157','共青团员','530321199904040922',1,'img/avatar/default.png');
INSERT INTO job_seeker_info VALUES
(NUll,'潘娅','1999-04-04','专科','Web前端','15687069086','无',0,'重庆','无','昆明','2986125126@qq.com','IT','4k以上','汉族','未婚','云南曲靖','2020-06','2986125126','随时','157','共青团员','530321199904040922',1,'img/avatar/default.png');
INSERT INTO job_seeker_info VALUES
(NUll,'邓浩然','1999-04-04','专科','Web前端','15687069086','无',1,'重庆','无','昆明','2986125126@qq.com','IT','4k以上','汉族','未婚','云南曲靖','2020-06','2986125126','随时','157','共青团员','530321199904040922',1,'img/avatar/default.png');


#3.反馈信息表feedback_info(外键：主表id(job_aeeker_id))
#CURRENT_TIME获取当前系统默认时间
#timestamp 用法详解
CREATE TABLE feedback_info(
    feedback_info_id INT PRIMARY KEY AUTO_INCREMENT,    #编号
    feedback_kind VARCHAR(20),                          #反馈类型
    feedback_content text,                              #内容
    create_time DATE, #反馈时间
    contact VARCHAR(50),                                  #联系方式
    job_aeeker_id INT NOT NULL                         #用户id
);

#4.城市列表job_city
CREATE TABLE job_city(
    job_city_id INT PRIMARY KEY AUTO_INCREMENT,      #城市编号
    job_city_name VARCHAR(50)                        #城市名称
);
INSERT INTO job_city VALUES
(NULL,'北京'),
(NULL,'上海'),
(NULL,'广州'),
(NULL,'深圳'),
(NULL,'武汉'),
(NULL,'成都'),
(NULL,'南京'),
(NULL,'天津'),
(NULL,'重庆'),
(NULL,'西安'),
(NULL,'杭州');

#5.职位分类表 job_kind
CREATE TABLE job_kind(
    job_kind_id INT PRIMARY KEY AUTO_INCREMENT,     #职位编号
    job_kind_name VARCHAR(50)                       #职位类别名称
);
INSERT INTO job_kind VALUES
(NUll,'营业员'),
(NUll,'店长'),
(NUll,'司机'),
(NUll,'保安'),
(NUll,'服务员'),
(NUll,'快递员'),
(NUll,'导购'),
(NUll,'仓管'),
(NUll,'物流'),
(NUll,'物业'),
(NUll,'销售'),
(NUll,'收银员'),
(NUll,'普工'),
(NUll,'导游'),
(NUll,'技工'),
(NUll,'领班'),
(NUll,'保洁'),
(NUll,'客服'),
(NUll,'电工'),
(NUll,'前台'),
(NUll,'汽车'),
(NUll,'学徒'),
(NUll,'厨师'),
(NUll,'酒店');

#6.招聘者信息job_recruiter
CREATE TABLE job_recruiter(
    job_recruiter_id INT PRIMARY KEY AUTO_INCREMENT,   #公司编号
    job_recruiter_name VARCHAR(50),                    #公司名称
    field VARCHAR(50),                                 #领域
    scale VARCHAR(50),                                 #性质
    nature VARCHAR(50),                                #规模
    introduction VARCHAR(50),                          #简介
    logoURL VARCHAR(50),                               #logoURL
    location VARCHAR(50)                               #地点
);


/*
7.职位信息表job_full_info(外键：城市列表id(job_city_id)、职位分类表id(job_kind_id)、招聘者信息id(job_recruiter_id)关联表4 5 6)
*/
CREATE TABLE job_full_info(
    job_full_info_id INT PRIMARY KEY AUTO_INCREMENT,   #职位编号
    title VARCHAR(50),                                 #标题
    money DECIMAL(8,2),                                #薪水
    create_time DATE,#发布时间
    welfare VARCHAR(50),                               #福利
    demand_education VARCHAR(50),                      #学历要求
    demand_experience VARCHAR(50),                     #经验要求
    demand_gender INT,                                 #性别要求
    demand_age VARCHAR(50),                            #年龄要求
    job_location VARCHAR(50),                          #工作地点
    people_num VARCHAR(50),                            #人数
    job_content text,                                  #职位描述
    job_kind_id INT NOT NULL,                          #职位类别
    job_city_id INT NOT NULL,                          #职位城市
    job_recruiter_id INT NOT NULL                      #发布者
);
INSERT INTO job_full_info VALUES
(NUll,'房地产',5000.00,DEFAULT,'五险一金','专科以上','1年以上','不限','22-35','北京','不限','外资(欧美)|150-500人|机械|设备|重工',13,1,'不知');
INSERT INTO job_full_info VALUES
(NUll,'房地产',5000.00,DEFAULT,'五险一金','专科以上','1年以上','不限','22-35','北京','不限','外资(欧美)|150-500人|机械|设备|重工',13,1,'不知');
INSERT INTO job_full_info VALUES
(NUll,'房地产',5000.00,DEFAULT,'五险一金','专科以上','1年以上','不限','22-35','北京','不限','外资(欧美)|150-500人|机械|设备|重工',13,1,'不知');

#8.职位收藏表job_collection(外键:求职者id(job_seeker_id))
CREATE TABLE job_collection(
    job_collection INT PRIMARY KEY AUTO_INCREMENT,       #职位编号
    create_time DATE, #收藏时间
    job_seeker_id INT NOT NULL,                          #求职者
    job_full_info INT NOT NULL                           #发布者
);

#9.职位投递记录表job_delivery(外键：求职者id(job_aeeker_id))
CREATE TABLE job_delivery(
    job_delivery_id INT PRIMARY KEY AUTO_INCREMENT,      #记录id
    create_time DATE, #投递时间
    job_seeker_id INT NOT NULL,                          #求职者
    job_full_info INT NOT NULL                           #发布者
);

#10.banner图banner_info
CREATE TABLE banner_info(
    banner_info_id INT PRIMARY KEY AUTO_INCREMENT,        #图片编号
    img_URL VARCHAR(50),                                  #图片地址
    img_content VARCHAR(1000),                            #图片描述
    create_time DATE   #添加日期
);

#11.公共信息表(网站友情链接、联系方式、版权协议等)public_info
CREATE TABLE public_info(
    public_info_id INT PRIMARY KEY AUTO_INCREMENT,        #公共信息编号
    kind VARCHAR(50),                                     #所属类别
    name VARCHAR(50),                                     #名称
    url VARCHAR(50),                                      #链接
    content text                                          #内容
);

#12.首页数据表index_title
CREATE TABLE index_title(
    index_title_id INT PRIMARY KEY AUTO_INCREMENT, #编号
    title VARCHAR(50)                              #父标题
);
#13.首页数据表index_ptitle
CREATE TABLE index_ptitle(
    index_ptitle_id INT PRIMARY KEY AUTO_INCREMENT, #编号
    index_title_id INT NOT NULL,                    #父标题
    ptitle VARCHAR(50)                              #子标题
);
#13.首页数据表index_dtitle
CREATE TABLE index_dtitle(
    index_dtitle_id INT PRIMARY KEY AUTO_INCREMENT, #编号
    index_ptitle_id INT NOT NULL,                   #子标题
    dimg VARCHAR(128),                              #图片路径
    dcontent VARCHAR(100)                           #标题
);

INSERT INTO index_title VALUES
(NULL,'热门职位'),
(NULL,'名企专区'),
(NUll,'福利好'),
(NUll,'结钱快'),
(NUll,'热门城市');

INSERT INTO index_ptitle VALUES
(1,1,'营业员'),
(2,1,'店长'),
(3,1,'司机'),
(4,1,'保安'),
(5,1,'服务员'),
(6,1,'快递员'),
(7,1,'导购'),
(8,1,'仓管'),
(9,1,'物流'),
(10,1,'物业'),
(11,1,'销售'),
(12,1,'收银员'),
(13,1,'普工'),
(14,1,'导游'),
(15,1,'技工'),
(16,1,'领班'),
(17,1,'保洁'),
(18,1,'客服'),
(19,1,'电工'),
(20,1,'前台'),
(21,1,'汽车'),
(22,1,'学徒'),
(23,1,'厨师'),
(24,1,'酒店'),
(25,1,'旅游'),
(26,1,'房地产'),
(27,1,'兼职'),
(28,1,'全部'),
(29,2,'伊顿电气'),
(30,2,'耐克'),
(31,2,'三菱电机'),
(32,2,'恒大集团'),
(33,2,'美团点评'),
(34,2,'银鹭食品集团'),
(35,2,'光明乳业'),
(36,2,'蒙牛'),
(37,2,'欧舒丹'),
(38,2,'瑞幸咖啡'),
(39,2,'诺心蛋糕'),
(40,3,'做五休二'),
(41,3,'五险一金'),
(42,3,'包吃包住'),
(43,3,'专业培训'),
(44,4,'销售助理'),
(45,4,'客服'),
(46,4,'促销员'),
(47,4,'服务员'),
(48,4,'导购'),
(49,4,'小时工'),
(50,4,'营业员'),
(51,4,'接待'),
(52,5,'北京'),
(53,5,'上海'),
(54,5,'广州'),
(55,5,'深圳'),
(56,5,'武汉'),
(57,5,'成都'),
(58,5,'南京'),
(59,5,'天津'),
(60,5,'重庆'),
(61,5,'西安'),
(62,5,'杭州'),
(63,5,'全部');

INSERT INTO index_dtitle VALUES
(1,29,'img/index/minggi/log/eatonelectrical.jpg','外资(欧美)|150-500人|机械|设备|重工'),
(2,30,'img/index/minggi/log/naike.jpg','外资(欧美)|10000人以上|服装/纺织'),
(3,31,'img/index/minggi/log/sanlingdianji.jpg','机械|设备|重工'),
(4,32,'img/index/minggi/log/hengdajituan.jpg','民营公司|500-1000人|房地产/物业'),
(5,33,'img/index/minggi/log/meituandianping.png','合资|10000人以上|互联网'),
(6,34,'img/index/minggi/log/second3902987.png','合资|10000人以上|快速消费品'),
(7,35,'img/index/minggi/log/guangmignruye.jpg','国企|10000人以上|快速消费品'),
(8,36,'img/index/minggi/log/second4351278.png','合资|10000人以上|快速消费品'),
(9,37,'img/index/minggi/log/loccitane.jpg','外资(欧美)|500-10000人|快速消费品'),
(10,38,'img/index/minggi/log/ruixinkafei.png','上市公司|10000人以上|餐饮'),
(11,39,'img/index/minggi/log/nuoxin.png','外资(非欧美)|1000-5000人|餐饮');