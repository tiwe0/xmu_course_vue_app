import {data} from './options_course_college.js';

const select_course_college = {
    id: "course_college",
    label: "学院",
    name: "course_college",
    options: data.options_course_college
};

const select_course_type = {
    id: "course_type",
    label: "课程类型",
    name: "course_type",
    options: data.options_course_type
};

const select_course_difficulty = {
    id: "course_difficulty",
    label: "难度",
    name: "course_difficulty",
    options: data.options_course_rate
};

const select_course_practical = {
    id: "course_practical",
    label: "实用度",
    name: "course_practical",
    options: data.options_course_rate
};

const select_course_highscore = {
    id: "course_highscore",
    label: "得分公平度",
    name: "course_highscore",
    options: data.options_course_rate
};

const select_course_rate = {
    id: "course_rate",
    label: "综合评价",
    name: "course_rate",
    options: data.options_course_rate
};

const input_course_name = {
    id: "course_name",
    label: "课程名称",
    name: "course_name"
};

const input_course_teacher = {
    id: "course_teacher",
    label: "课程老师",
    name: "course_teacher"
};

const textarea_course_comment = {
    id: "course_comment",
    label: "课程评价",
    name: "course_comment"
};

const data_article_comment = {
    select_course_college: select_course_college,
    select_course_type: select_course_type,
    select_course_difficulty: select_course_difficulty,
    select_course_highscore: select_course_highscore,
    select_course_practical: select_course_practical,
    select_course_rate: select_course_rate,
    input_course_name: input_course_name,
    input_course_teacher: input_course_teacher,
    textarea_course_comment: textarea_course_comment
};

export {data_article_comment};
