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
(NUll,'经理'),
(NUll,'酒店'),
(NUll,'主管'),
(NUll,'顾问');

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
    job_full_info_id INT PRIMARY KEY AUTO_INCREMENT,   #编号
    title VARCHAR(50),                                 #职位标题
    money VARCHAR(50),                                #薪水
    create_time DATE,                                  #发布时间
   /* welfare VARCHAR(50),                               #福利*/
    demand_education VARCHAR(50),                      #学历要求
    demand_experience VARCHAR(50),                     #经验要求
    demand_gender INT,                                 #性别要求
    demand_age VARCHAR(50),                            #年龄要求
    job_location VARCHAR(50),                          #工作地点
    people_num VARCHAR(50),                            #人数
    job_content text,                                  #职位描述
    job_kind_id INT NOT NULL,                          #职位类别
    job_city_id INT NOT NULL,                          #职位城市
   /* #job_recruiter_id INT NOT NULL                      #发布者*/
);
INSERT INTO job_full_info VALUES
(NUll,'汽车维修技工/技师','3.5-6千/月','2019/08/13发布','初中及以下','无工作经验','性别不限','20岁以上','上海车享家汽车科技服务有限公司-重庆分公司','5人','岗位职责：1 .1年或以上汽车维修工作经验；2 .熟悉汽车检测及维修流程；岗位要求：1 中专及以上学历，汽车检修服务等相关专业毕业；2.受过系统全面的汽车维修专业培训；3.良好的汽车售后服务意识。4.持有效驾照并能熟练驾驶。','21','9'),
(NUll,'雀巢专业餐饮-销售代表','6-8千/月','2019/08/13发布','大专','1年工作经验','性别不限','20岁以上','雀巢（中国）有限公司重庆分公司','1人','雀巢公司是全球著名的跨国公司之一，素以生产优质食品著称于世。在雀巢大家庭中，我们是一个由吃货组成的部门，主要工作就是研究各种餐厅各种美食，再用我们的产品帮助厨师创造出更多美食。这就是雀巢专业餐饮，一个酷炫而专业的部门！在这里，你将掌握到最潮流的美食信息，媲美老饕的美食鉴赏力，与大厨谈笑风生的诀窍。我们不只是美食家，更是美食创造者！现在雀巢（中国）有限公司专业餐饮部-重庆销售团队召唤销售小伙伴一枚。我们希望你：大专以上学历良好的团队意识，除了分享美食，工作的酸甜苦辣也要和小伙伴们一起面对。顶得住压力山大，因为你将面临的客户都是***的美食家—厨师。优秀的沟通交流能力，也就是擅长与不同的人愉快地聊天。热爱美食者优先，嘴不馋的小伙伴慎入。','11','9'),
(NUll,'销售顾问','0.8-1.5万/月','2019/08/13发布','大专','工作经验不限','性别不限','20岁以上','重庆市渝中区民族路188号WFC环球金融中心12层','2人','岗位职责：1、通过销售拜访，了解商户的业务现状与实际需求并结合消费者的消费动向，制定个性化营销方案，与商户谈判并达成合作；2、执行公司的销售策略及政策，达成业绩目标；3、与公司各部门配合，及时处理用户的反馈、投诉和建议，提高用户满意度；4、归档和更新所有目标商户拜访、协议、服务条款等有关的文件和数据，确保信息在数据库中得到正确的维护；任职要求：1、大专及以上学历，有销售工作经验优先；2、有很强的学习能力和适应能力，适应互联网行业的快速发展，精力充沛，具备在高强压力下出色完成任务的能力；3、具备较强的人际沟通及逻辑思维能力，思维敏捷，能够准确把握产品优势和客户心理，高效整合内外部资源促成销售业绩；4、富有激情和创新理念，追求个人职业发展和公司利益的双赢；5、热爱销售，善于挑战，积极乐观，有强烈的成功欲望和企图心；6、为人正直，诚实可靠，以公司利益为重；','11','9'),
(NUll,'影院副店长','面议','2019/08/13发布','大专','5-7年工作经验','性别不限','20岁以上','建新北路2支路1号(观音桥步行街西环路金源不夜城)','1人','岗位职责：1. 协助影院店长制定本店经营计划；执行经营计划的实施过程，并对营运部分结果负部分责任； 2、负责营运部门的员工管理，协助店长进行员工管理，包括但不限于针对员工的招聘、培训、考核等工作，为影院储备管理人才。监督、落实各项规章、制度流程的落实；3、协助店长制订、落实、执行营销政策及营销活动，进行大客户、团体客户管理，督促销售业绩的完成。协助管理各类媒体资源，在当地推广华谊兄弟品牌，提升品牌知名度和影响力；4、协助管理店内的经营活动，深入日常管理工作；严格按照影投总部相关制度规定执行。完成日常值班及突发事件的处理工作以及影院内环境的管理工作。完成卖品供应商品类筛选及定期维护工作；5、执行公司成本管理制度，有效控制影城经营各项成本；6、负责店内防火、防盗及保安工作；做好消防安全管理。负责协调好与大厦物业及相关部门的关系，确保店内风、火、电、气安全正常运行。配合影投总部营运部进行店内安全管理工作，协助影院店长维护当地对外工作接洽；7、完成领导交办的其他相关工作事项。任职资格：1、大学专科（含）以上教育经历，管理类（酒店管理、工商管理）相关专业；2、3年以上连锁服务行业从业经验，1年以上单店负责人的岗位经历；3、具备良好的沟通表达能力；具备主动学习的能力；逻辑性强；性格开朗、主动热情、具备同理心；有责任心、吃苦耐劳；4、熟练应用OFFICE及相关办公软件。','2','9'),
(NUll,'阿迪达斯重庆首创资深店长','1-1.5万/月','2019/08/13发布','大专','工作经验不限','性别不限','25-35周岁','首创奥特莱斯','1人','岗位职责:欢迎加入阿迪达斯直营零售店！岗位职责：1、通过分析相关数据，驱动店铺销售，提升店铺的销售业绩2、成为客户服务模范，带领团队建立及维护良好客户关系，提高客户忠诚度3、指导、培训团队成员的产品知识、服务及销售技巧；不断激励团队成员实现***绩效4、为店铺团队成员的招聘、入职、培训及发展提供规划及支持5、按照公司标准维护店内陈列及其他宣传资料6、按照公司政策和程序，系统、高效地运营及管理店铺，确保库存充足，控制库存损耗及确保现金安全等7、领导和实施所有适用的损失预防政策和程序，确保安全高效的购物环境8、按照公司有关方针及政策恰当执行品牌策略岗位要求：1、25-35周岁，全日制大专及以上学历2、至少2年以上零售或服务行业管理岗经验，具备较强的销售、对客服务及店铺和人员管理经验3、关注时尚，热爱运动，愿意在零售行业长期发展4、有亲和力，具备敏锐的商业头脑，目标导向，关注结果，具备良好的领导、沟通、组织、协调和执行能力5、较强的分析、计算能力，能熟练使用office办公软件6、能适应快节奏的工作环境7、具备一定英语沟通能力者优先培训及福利：1、五险一金及补充医疗商业保险2、15天带薪年假及公司福利假期3、员工折扣及员工工服4、节日福利及生日/结婚/生育礼券5、专业培训及广阔的职业发展空间：店长-小区经理-大区经理工作地点：全市就近分配（我们将尽量为您安排离家最近的店铺）工作时间：排班视不同门店及业务需求而定','2','9'),
(NUll,'店长','6-8千/月','2019/08/13发布','大专','3-4年工作经验','性别不限','20岁以上','重庆市合川区','10人','岗位职责 设立工作团队的目标，提升组织能力，以身作则；- 为工作团队制定战略和营运计划，监控执行力度并对成果进行评估；- 制定计划，实现出色的门店营运；- 为咖啡师提供培训、反馈和发展机会，构建高效团队；- 维护luckin coffee门店正常营运秩序；任职要求：- 大专及以上学历；- 接受轮班制工作，平均每周工作四十小时；- 优秀的人际交往技能及团队合作能力；- 快速的学习能力及指导他人工作的能力；- 3年以上餐饮或零售行业工作经验，1年以上门店管理经验。','2','9'),
(NUll,'marella店经理','0.8-1万/月','2019/08/13发布','大专','3-4年工作经验','性别不限','28-38岁','重庆万象城','1人','1、 全面负责专卖店各项运营管理，督导员工日常工作并培训；2、 激励员工的销售热情，协助店铺达成每月的销售指标；3、 积极主动收集市场的相关信息并汇报公司；4、 处理客户投诉及与店面销售有关的问题；5、贯彻公司指令及落实领导交办的其他工作。岗位要求：1、28-38岁、身体健康；2、大专以上学历；3、三年以上高档女装品牌服装销售及运营管理经验（或同等职级）；4、具备团队管理和协调能力；5、具备较强的责任心，健康积极的工作态度，良好的职业操守及语言、文字表达能力；6、熟练操作电脑办公软件。','24','9'),
(NUll,'导购员','2.2-5千/月','2019/08/13发布','高中','1年工作经验','性别不限','30岁以下','江北区普泰广场','2人','京东线下实体店导购要求：年龄30岁以下，形象气质佳，高中及以上学历，能吃苦耐劳，学习能力强，会烘焙烹饪者优先。','7','9'),
(NUll,'维多利亚的秘密-机场店-主管','6-8千/月','2019/08/13发布','大专','工作经验不限','性别不限','20岁以上','重庆机场','若干','岗位职责：1. 以顾客为中心2. 擅长口头沟通，展示出领导/影响合作伙伴和团队的能力3. 管理复杂和相冲突任务的能力4. 分析业务、对机会排序，及建立简单策略改善业绩的能力5. 分派执行任务或计画或其后续工作责任的能力6. 非常注重细节7. 展现出视觉行销技能8. 情绪智商高，对多元文化敏感9. 此前有零售或服务相关领域管理经验10. 能够根据业务需要，在晚上/周末/假日工作','26','9'),
(NUll,'重庆公司-语音客服','3-5千/月','2019/08/13发布','大专','工作经验不限','性别不限','20岁以上','重庆市渝北区洪湖西路24号软件大楼B栋25楼','10名','岗位职责：1、通过电话受理客户查询、客户建议及客户投诉等服务；2、通话中能及时发现来电客户的需求及意见，并记录相关信息；3、为客户提供完整准确的方案及信息，第一时间解决客户问题，提供优质的服务质量。任职要求：1、大专及以上学历，专业不限；2、具有良好的口语表达能力，普通话标准；3、打字40字/分以上，并能熟练操作办公软件；4、具备较强的学习能力，能快速的学习相关的业务知识；5、具备较强的耐心，包容心且具备较强的服务意识，团队合作意识。工作时间：早班9-18:00，晚班16:00-24:00（排班制，上五休二，夜班打车报销）','18','9'),
(NUll,'美容顾问','4.5-6千/月','2019/08/13发布','中专','1年工作经验','性别不限','30岁以下','重庆','若干','职位描述：1. 负责欧舒丹产品的日常销售工作；2. 招募开发新会员以及老会员的维护；3. 货品及赠品库存的日常管理；4. 完成每月销售目标；5. 上级主管交办的其他工作。任职资格：1. 工作积极主动，性格开朗，有责任心和团队意识； 2. 肤质好，形象气质佳； 3. 具有良好的沟通能力及协调能力； 4. 有相关化妆品或护肤品销售经验者优先。福利待遇：优厚的工作条件，良好的发展机会 1. 享有商业医疗保险；2. 季度发放员工福利品；3. 享受绩效年终奖等。','27','9'),
(NUll,'物流销售','面议','2019/08/13发布','大专','2年工作经验','性别不限','30岁以下','江北区港城南路1号海尔工业园','1人','岗位职责：1、控制区域内业务合规，提升社会化收入；2、客户信息调研，了解客户物流需求，拓展符合集团战略的社会化大客户；3、维护客户信息，达成客户满意度；4、客户报价及成本预算；5、运输招标管理；任职要求：1、全日制大专及以上学历；2、2年以上相关工作经验；3、熟悉办公软件；4、能与企业同心同德，认同企业文化；5、有物流销售经验人员优先。','11','9'),
(NUll,'商业置业顾问','30-40万/年','2019/08/13发布','大专','工作经验不限','性别不限','30岁以下','渝北区回兴复地君屿墅','1人','1、具有专业的销售谈判技巧及谈判应变能力；2、根据业务发展需要完成销售目标； 3、在销售后按时完成回款，提交相关资料；4、定期对销售方案的执行情况进行总结；5、完成上级安排的其他工作。任职条件：1、大专及以上学历；市场营销、管理或相关专业；2、从事房地产商业销售2年以上，具备实际营销经验，同时有营销企划、营销策划经验优先。','27','9');



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
(40,2,'南孚电池'),
(41,2,'85℃'),
(42,2,'李宁'),
(43,2,'近铁集团'),
(44,2,'日立'),
(45,2,'肯德基'),
(46,2,'萨莉亚'),
(47,2,'李锦记'),
(48,2,'苏宁'),
(49,2,'FILA'),
(50,2,'伊利'),
(51,2,'高顿教育集团'),
(52,2,'周生生'),
(53,2,'富士康'),
(54,3,'做五休二'),
(55,3,'五险一金'),
(56,3,'包吃包住'),
(57,3,'专业培训'),
(58,4,'销售助理'),
(59,4,'客服'),
(60,4,'促销员'),
(61,4,'服务员'),
(62,4,'导购'),
(63,4,'小时工'),
(64,4,'营业员'),
(65,4,'接待'),
(66,5,'北京'),
(67,5,'上海'),
(68,5,'广州'),
(69,5,'深圳'),
(70,5,'武汉'),
(71,5,'成都'),
(72,5,'南京'),
(73,5,'天津'),
(74,5,'重庆'),
(75,5,'西安'),
(76,5,'杭州'),
(77,5,'全部');

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
(11,39,'img/index/minggi/log/nuoxin.png','外资(非欧美)|1000-5000人|餐饮'),
(12,40,'img/index/minggi/log/nanfudianchi.jpg','合资|1000-5000人|快速消费品/电子/半导体'),
(13,41,'img/index/minggi/log/85cafe.jpg','外资(非欧美)|10000人以上|餐饮'),
(14,42,'img/index/minggi/log/lining.jpg','上市公司|5000-10000人|服装/纺织'),
(15,43,'img/index/minggi/log/second2564031.png','外资(欧美)|500-10000人|交通/物流/仓储'),
(16,44,'img/index/minggi/log/rili.jpg','机械|设备|重工'),
(17,45,'img/index/minggi/log/kendeji.png','外资(欧美)|10000人以上|餐饮'),
(18,46,'img/index/minggi/log/saliya.png','外资(欧美)|10000人以上|餐饮'),
(19,47,'img/index/minggi/log/lijinji.jpg','外资(欧美)|1000-5000人|快速消费品'),
(20,48,'img/index/minggi/log/suning.jpg','少于50人|家电'),
(21,49,'img/index/minggi/log/fila.png','外资(非欧美)|5000-10000人|服装/纺织'),
(22,50,'img/index/minggi/log/yilijituan.jpg','民营公司|快速消费品'),
(23,51,'img/index/minggi/log/gaodongjiaoyujituan.jpg','民营公司|1000-5000人|其它'),
(24,52,'img/index/minggi/log/zhoushengsheng.jpg','外资(非欧美)|5000-10000人|批发/零售'),
(25,53,'img/index/minggi/log/honghaijingmi.jpg','外资(非欧美)|500-1000人|机械/设备/重工');
