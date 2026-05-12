import React from 'react';
import { Box, H1, H2, Text, Link } from '@adminjs/design-system';
const buildAvatarUrl = (record) => {
    const value = record?.avatar_url;
    if (value)
        return value;
    const name = `${record?.first_name || 'User'} ${record?.last_name || ''}`.trim();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`;
};
const card = {
    background: '#fff',
    padding: 16,
    borderRadius: 10,
    border: '1px solid #e6edf3',
    marginBottom: 16,
};
const flexWrap = {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
};
const half = {
    flex: 1,
    minWidth: 320,
};
const avatar = {
    width: 34,
    height: 34,
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 10,
};
const row = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    paddingTop: 4,
    paddingBottom: 4,
};
const CourseShow = (props) => {
    const course = props.record?.params?.full;
    if (!course)
        return React.createElement(Text, null, "Loading...");
    return (React.createElement(Box, null,
        React.createElement(Box, { style: card },
            React.createElement(H1, null, course.name),
            React.createElement(Text, null,
                React.createElement("strong", null, "Code:"),
                " ",
                course.code),
            React.createElement(Text, null,
                React.createElement("strong", null, "Status:"),
                " ",
                course.status),
            React.createElement(Text, null,
                React.createElement("strong", null, "Module:"),
                " ",
                course.module?.name),
            React.createElement(Text, null,
                React.createElement("strong", null, "Faculty:"),
                " ",
                course.faculty?.name),
            React.createElement(Text, null,
                React.createElement("strong", null, "Field:"),
                " ",
                course.field?.name)),
        React.createElement(CourseSections, { sections: course.courseSections }),
        React.createElement(Box, { style: flexWrap },
            React.createElement(Box, { style: { ...card, ...half } },
                React.createElement(CourseEnrollments, { enrollments: course.courseEnrollments })),
            React.createElement(Box, { style: { ...card, ...half } },
                React.createElement(PublisherCard, { publisher: course.publisher })))));
};
export const CourseSections = ({ sections }) => {
    return (React.createElement(Box, { style: card },
        React.createElement(H2, null, "Course Sections"),
        sections?.length === 0 && React.createElement(Text, null, "No sections"),
        sections?.map((s) => (React.createElement(Box, { key: s.id, style: { marginTop: 12, borderBottom: '1px solid #eee', paddingBottom: 12 } },
            React.createElement(Text, null,
                React.createElement("strong", null,
                    s.order,
                    ". ",
                    s.title)),
            React.createElement(Text, null, s.content),
            s.materials?.length > 0 && (React.createElement(Box, { style: { marginTop: 8 } },
                React.createElement(Text, null,
                    React.createElement("strong", null, "Materials:")),
                s.materials.map((m) => (React.createElement(Box, { key: m.id },
                    React.createElement(Link, { href: m.link, target: "_blank" },
                        "\u2B07 ",
                        m.name)))))))))));
};
export const CourseEnrollments = ({ enrollments }) => {
    return (React.createElement(Box, { style: { maxHeight: 300, overflowY: 'auto' } },
        React.createElement(H2, null,
            "Students Enrolled (",
            enrollments?.length || 0,
            ")"),
        enrollments?.map((e) => (React.createElement(Box, { key: e.id, style: row },
            React.createElement("img", { src: buildAvatarUrl(e.student?.user), style: avatar }),
            React.createElement(Text, { style: { fontWeight: 'bold' } },
                e.student?.user?.first_name,
                " ",
                e.student?.user?.last_name))))));
};
export const PublisherCard = ({ publisher }) => {
    if (!publisher)
        return React.createElement(Text, null, "No publisher");
    return (React.createElement(Box, null,
        React.createElement(H2, null, "Publisher"),
        React.createElement(Box, { style: row },
            React.createElement("img", { src: buildAvatarUrl(publisher.user), style: avatar }),
            React.createElement(Box, null,
                React.createElement(Text, null,
                    React.createElement("strong", null,
                        publisher.user?.first_name,
                        " ",
                        publisher.user?.last_name)))),
        React.createElement(Box, { style: { marginTop: 12 } },
            React.createElement(Text, null,
                React.createElement("strong", null, "University:")),
            React.createElement(Text, null, publisher.university?.name || '—')),
        React.createElement(Box, { style: { marginTop: 8 } },
            React.createElement(Text, null,
                React.createElement("strong", null, "Email:")),
            React.createElement(Text, null, publisher.user?.email || '—'))));
};
export default CourseShow;
