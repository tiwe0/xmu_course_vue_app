const options_course_college = [
    {value: '人文学院', label: '人文学院'},
    {value: '新闻传播学院', label: '新闻传播学院'},
    {value: '外文学院', label: '外文学院'},
    {value: '经济学院', label: '经济学院'},
    {value: '王亚南经济研究院', label: '王亚南经济研究院'},
    {value: '马克思主义学院', label: '马克思主义学院'},
    {value: '管理学院', label: '管理学院'},
    {value: '财务管理与会计研究院', label: '财务管理与会计研究院'},
    {value: '法学院', label: '法学院'},
    {value: '知识产权研究院', label: '知识产权研究院'},
    {value: '公共事务学院', label: '公共事务学院'},
    {value: '艺术学院', label: '艺术学院'},
    {value: '海外教育学院/国际学院', label: '海外教育学院/国际学院'},
    {value: '国际关系学院/南洋研究院', label: '国际关系学院/南洋研究院'},
    {value: '数学科学学院', label: '数学科学学院'},
    {value: '物理科学与技术学院', label: '物理科学与技术学院'},
    {value: '化学化工学院', label: '化学化工学院'},
    {value: '材料学院', label: '材料学院'},
    {value: '生命科学学院', label: '生命科学学院'},
    {value: '海洋与地球学院', label: '海洋与地球学院'},
    {value: '环境与生态学院', label: '环境与生态学院'},
    {value: '建筑与土木工程学院', label: '建筑与土木工程学院'},
    {value: '医学院', label: '医学院'},
    {value: '药学院', label: '药学院'},
    {value: '公共卫生学院', label: '公共卫生学院'},
    {value: '能源学院', label: '能源学院'},
    {value: '航空航天学院', label: '航空航天学院'},
    {value: '电子科学与技术学院', label: '电子科学与技术学院'},
    {value: '社会与人类学院', label: '社会与人类学院'},
    {value: '信息学院', label: '信息学院'},
    {value: '创意与创新学院', label: '创意与创新学院'},
    {value: '体育部', label: '体育部'}
];

const options_course_type = [
    {value: "体育课", label: "体育课"},
    {value: "专业必修课", label: "专业必修课"},
    {value: "专业选修课", label: "专业选修课"},
    {value: "院选课", label: "院选课"},
    {value: "校选课", label: "校选课"},
    {value: "大学英语课", label: "大学英语课"}
];


const options_course_rate = [
    {value: "1", label: "⭐"},
    {value: "2", label: "⭐ ⭐"},
    {value: "3", label: "⭐ ⭐ ⭐"},
    {value: "4", label: "⭐ ⭐ ⭐ ⭐", selected: true},
    {value: "5", label: "⭐ ⭐ ⭐ ⭐ ⭐"}
];

const data = {
    options_course_college: options_course_college,
    options_course_type: options_course_type,
    options_course_rate: options_course_rate
};

export { data };
