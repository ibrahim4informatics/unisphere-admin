import React, { useEffect, useMemo, useState } from 'react';
import { ApiClient } from 'adminjs';
import { Box, H1, H2, H3, Text, Button, Badge } from '@adminjs/design-system';
const api = new ApiClient();
const cardShadow = '0 16px 40px rgba(15,23,42,0.08)';
const softShadow = '0 10px 24px rgba(15,23,42,0.06)';
const formatCount = (value) => new Intl.NumberFormat('en-US').format(value || 0);
const formatPercent = (value, total) => {
    if (!total)
        return '0% of total';
    return `${Math.round((value / total) * 100)}% of total`;
};
const SectionHeader = ({ title, badge }) => (React.createElement(Box, { style: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 } },
    React.createElement(H2, { style: { margin: 0, fontSize: 22 } }, title),
    badge ? (React.createElement(Badge, { style: { background: '#EEF2FF', color: '#4F46E5' } }, badge)) : null));
const StatCard = ({ title, value, color = '#4F46E5', accent }) => (React.createElement(Box, { style: {
        background: 'white',
        padding: 24,
        borderRadius: 18,
        boxShadow: softShadow,
        minWidth: 220,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        borderTop: `4px solid ${color}`,
    } },
    accent ? (React.createElement(Text, { style: { color: '#94A3B8', fontSize: 12, textTransform: 'uppercase' } }, accent)) : null,
    React.createElement(H2, { style: { color, fontSize: 30, margin: 0 } }, value),
    React.createElement(Text, { style: { color: '#64748B' } }, title)));
const ClickCard = ({ title, value, onClick, hint }) => {
    const [hovered, setHovered] = useState(false);
    return (React.createElement(Box, { onClick: onClick, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: {
            cursor: 'pointer',
            background: 'linear-gradient(135deg,#4F46E5,#6366F1)',
            color: 'white',
            padding: 24,
            borderRadius: 18,
            minWidth: 240,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            boxShadow: '0 14px 30px rgba(79,70,229,0.25)',
            transform: hovered ? 'translateY(-4px)' : 'translateY(0px)',
            transition: 'transform 180ms ease',
        } },
        React.createElement(Text, { style: { color: 'rgba(255,255,255,0.8)', fontSize: 12 } }, hint),
        React.createElement(H2, { style: { fontSize: 30, margin: 0, fontWeight: 700 } }, value),
        React.createElement(Text, { style: { color: 'rgba(255,255,255,0.95)' } }, title)));
};
const StatGrid = ({ children }) => (React.createElement(Box, { style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16,
    } }, children));
const PieChart = ({ items }) => {
    const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
    let current = 0;
    const segments = items.map((item) => {
        const start = (current / total) * 100;
        current += item.value;
        const end = (current / total) * 100;
        return `${item.color} ${start}% ${end}%`;
    });
    return (React.createElement(Box, { style: { display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' } },
        React.createElement(Box, { style: {
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: `conic-gradient(${segments.join(',')})`,
                boxShadow: softShadow,
            } }),
        React.createElement(Box, { style: { display: 'flex', flexDirection: 'column', gap: 10 } }, items.map((item) => (React.createElement(Box, { key: item.label, style: { display: 'flex', alignItems: 'center', gap: 10 } },
            React.createElement(Box, { style: {
                    width: 10,
                    height: 10,
                    borderRadius: 9999,
                    background: item.color,
                } }),
            React.createElement(Text, { style: { color: '#475569' } }, item.label),
            React.createElement(Text, { style: { color: '#0F172A', fontWeight: 600 } }, item.value)))))));
};
const BarList = ({ items, accent = '#4F46E5' }) => {
    const max = Math.max(1, ...items.map((item) => item.value));
    return (React.createElement(Box, { style: { display: 'flex', flexDirection: 'column', gap: 12 } }, items.map((item) => (React.createElement(Box, { key: item.name },
        React.createElement(Box, { style: { display: 'flex', justifyContent: 'space-between', marginBottom: 6 } },
            React.createElement(Text, { style: { color: '#475569' } }, item.name),
            React.createElement(Text, { style: { color: '#0F172A', fontWeight: 600 } }, item.value)),
        React.createElement(Box, { style: {
                height: 10,
                background: '#E2E8F0',
                borderRadius: 9999,
                overflow: 'hidden',
            } },
            React.createElement(Box, { style: {
                    width: `${(item.value / max) * 100}%`,
                    background: accent,
                    height: '100%',
                    borderRadius: 9999,
                } })))))));
};
const LineChart = ({ points }) => {
    const max = Math.max(1, ...points.map((point) => point.value));
    const width = 260;
    const height = 80;
    const padding = 8;
    const path = points
        .map((point, index) => {
        const x = (index / Math.max(1, points.length - 1)) * (width - padding * 2) + padding;
        const y = height - padding - (point.value / max) * (height - padding * 2);
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
        .join(' ');
    return (React.createElement(Box, { style: { width: '100%' } },
        React.createElement("svg", { width: "100%", height: height, viewBox: `0 0 ${width} ${height}` },
            React.createElement("path", { d: path, stroke: "#4F46E5", strokeWidth: 3, fill: "none" })),
        React.createElement(Box, { style: { display: 'flex', justifyContent: 'space-between' } },
            React.createElement(Text, { style: { color: '#94A3B8', fontSize: 12 } }, points[0]?.date),
            React.createElement(Text, { style: { color: '#94A3B8', fontSize: 12 } }, points[points.length - 1]?.date))));
};
const InsightList = ({ title, items, valueLabel }) => (React.createElement(Box, { style: {
        background: 'white',
        padding: 20,
        borderRadius: 18,
        boxShadow: softShadow,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        minHeight: 220,
    } },
    React.createElement(H3, { style: { margin: 0, fontSize: 16, color: '#0F172A' } }, title),
    items.length === 0 ? (React.createElement(Text, { style: { color: '#94A3B8' } }, "No data yet")) : (items.map((item) => (React.createElement(Box, { key: item.id, style: { display: 'flex', justifyContent: 'space-between', gap: 12 } },
        React.createElement(Text, { style: { color: '#475569', flex: 1 } }, item.label),
        React.createElement(Text, { style: { color: '#0F172A', fontWeight: 600 } },
            item.value,
            " ",
            valueLabel)))))));
const Dashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        api
            .getDashboard()
            .then((res) => setData(res.data))
            .catch(() => setError('Unable to load dashboard data'));
    }, []);
    const charts = useMemo(() => {
        if (!data)
            return null;
        return {
            userDistribution: data.charts.userDistribution.map((item, index) => ({
                ...item,
                color: ['#4F46E5', '#3B82F6', '#22C55E'][index] || '#6366F1',
            })),
            courseStatus: data.charts.courseStatus.map((item) => ({
                ...item,
                color: {
                    Draft: '#94A3B8',
                    Pending: '#F59E0B',
                    Accepted: '#22C55E',
                    Rejected: '#EF4444',
                }[item.label] || '#6366F1',
            })),
        };
    }, [data]);
    if (error) {
        return React.createElement(Text, { style: { color: '#EF4444' } }, error);
    }
    if (!data)
        return React.createElement(Text, null, "Loading UniSphere dashboard...");
    const insightCards = [
        {
            title: 'Most Active Courses',
            valueLabel: 'enrollments',
            items: data.insights.mostActiveCourses.map((course) => ({
                id: course.id,
                label: course.name,
                value: course.value,
            })),
        },
        {
            title: 'Most Liked Posts',
            valueLabel: 'likes',
            items: data.insights.mostLikedPosts.map((post) => ({
                id: post.id,
                label: post.content.slice(0, 60) + (post.content.length > 60 ? '...' : ''),
                value: post.value,
            })),
        },
        {
            title: 'Most Commented Posts',
            valueLabel: 'comments',
            items: data.insights.mostCommentedPosts.map((post) => ({
                id: post.id,
                label: post.content.slice(0, 60) + (post.content.length > 60 ? '...' : ''),
                value: post.value,
            })),
        },
        {
            title: 'Top Teachers by Courses',
            valueLabel: 'courses',
            items: data.insights.topTeachers.map((teacher) => ({
                id: teacher.id,
                label: teacher.name,
                value: teacher.value,
            })),
        },
    ];
    return (React.createElement(Box, { style: { padding: 32, background: '#F8FAFC', minHeight: '100vh' } },
        React.createElement(Box, { style: {
                padding: 30,
                background: 'linear-gradient(135deg,#4F46E5,#6366F1)',
                borderRadius: 20,
                color: 'white',
                marginBottom: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                boxShadow: cardShadow,
            } },
            React.createElement(H1, { style: { margin: 0, fontSize: 34 } }, "UniSphere Admin Dashboard"),
            React.createElement(Text, { style: { color: 'rgba(255,255,255,0.9)', maxWidth: 520 } }, "Snapshot of platform growth, academic performance, and engagement.")),
        React.createElement(SectionHeader, { title: "Global KPIs", badge: "University pulse" }),
        React.createElement(StatGrid, null,
            React.createElement(StatCard, { accent: formatPercent(data.kpis.users.total, data.kpis.users.total), title: "Total Users", value: data.kpis.users.total, color: "#4F46E5" }),
            React.createElement(StatCard, { accent: formatPercent(data.kpis.users.students, data.kpis.users.total), title: "Students", value: data.kpis.users.students, color: "#3B82F6" }),
            React.createElement(StatCard, { accent: formatPercent(data.kpis.users.teachers, data.kpis.users.total), title: "Teachers", value: data.kpis.users.teachers, color: "#6366F1" }),
            React.createElement(StatCard, { accent: formatPercent(data.kpis.users.admins, data.kpis.users.total), title: "Admins", value: data.kpis.users.admins, color: "#22C55E" }),
            React.createElement(StatCard, { accent: formatPercent(data.kpis.users.pending, data.kpis.users.total), title: "Pending Users", value: data.kpis.users.pending, color: "#F59E0B" }),
            React.createElement(StatCard, { accent: formatPercent(data.kpis.users.banned, data.kpis.users.total), title: "Banned Users", value: data.kpis.users.banned, color: "#EF4444" })),
        React.createElement(Box, { style: { marginTop: 28 } },
            React.createElement(StatGrid, null,
                React.createElement(StatCard, { accent: formatPercent(data.kpis.courses.total, data.kpis.courses.total), title: "Total Courses", value: data.kpis.courses.total, color: "#4F46E5" }),
                React.createElement(StatCard, { accent: formatPercent(data.kpis.courses.draft, data.kpis.courses.total), title: "Draft", value: data.kpis.courses.draft, color: "#94A3B8" }),
                React.createElement(StatCard, { accent: formatPercent(data.kpis.courses.pending, data.kpis.courses.total), title: "Pending", value: data.kpis.courses.pending, color: "#F59E0B" }),
                React.createElement(StatCard, { accent: formatPercent(data.kpis.courses.accepted, data.kpis.courses.total), title: "Accepted", value: data.kpis.courses.accepted, color: "#22C55E" }),
                React.createElement(StatCard, { accent: formatPercent(data.kpis.courses.rejected, data.kpis.courses.total), title: "Rejected", value: data.kpis.courses.rejected, color: "#EF4444" }),
                React.createElement(StatCard, { accent: formatPercent(data.kpis.posts.today, data.kpis.posts.total), title: "Posts Today", value: data.kpis.posts.today, color: "#3B82F6" }))),
        React.createElement(Box, { style: { marginTop: 28 } },
            React.createElement(SectionHeader, { title: "Smart Navigation", badge: "Quick actions" }),
            React.createElement(StatGrid, null,
                React.createElement(ClickCard, { title: "Review Pending Users", value: data.kpis.users.pending, hint: "Pending approvals", onClick: () => (window.location.href = '/admin/resources/User?filters.status=PENDING') }),
                React.createElement(ClickCard, { title: "Banned Users", value: data.kpis.users.banned, hint: "Action required", onClick: () => (window.location.href = '/admin/resources/User?filters.status=BANED') }),
                React.createElement(ClickCard, { title: "Pending Courses", value: data.kpis.courses.pending, hint: "Awaiting review", onClick: () => (window.location.href = '/admin/resources/Course?filters.status=PENDING') }),
                React.createElement(ClickCard, { title: "Accepted Courses", value: data.kpis.courses.accepted, hint: "Published now", onClick: () => (window.location.href = '/admin/resources/Course?filters.status=ACCEPTED') }))),
        React.createElement(Box, { style: {
                marginTop: 32,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 20,
            } },
            React.createElement(Box, { style: { background: 'white', padding: 24, borderRadius: 18, boxShadow: softShadow } },
                React.createElement(SectionHeader, { title: "User Distribution", badge: "Roles" }),
                React.createElement(PieChart, { items: charts.userDistribution })),
            React.createElement(Box, { style: { background: 'white', padding: 24, borderRadius: 18, boxShadow: softShadow } },
                React.createElement(SectionHeader, { title: "Course Status", badge: "Pipeline" }),
                React.createElement(PieChart, { items: charts.courseStatus })),
            React.createElement(Box, { style: { background: 'white', padding: 24, borderRadius: 18, boxShadow: softShadow } },
                React.createElement(SectionHeader, { title: "Courses per Faculty", badge: "Top 5" }),
                React.createElement(BarList, { items: data.charts.coursesPerFaculty, accent: "#4F46E5" })),
            React.createElement(Box, { style: { background: 'white', padding: 24, borderRadius: 18, boxShadow: softShadow } },
                React.createElement(SectionHeader, { title: "User Growth", badge: "Last 30 days" }),
                React.createElement(LineChart, { points: data.charts.userGrowth }))),
        React.createElement(Box, { style: { marginTop: 32 } },
            React.createElement(SectionHeader, { title: "Admin Actions", badge: "Productivity" }),
            React.createElement(Box, { style: { display: 'flex', gap: 12, flexWrap: 'wrap' } },
                React.createElement(Button, { variant: "primary", onClick: () => (window.location.href = '/admin/resources/User'), style: { paddingLeft: 18, paddingRight: 18 } }, "Manage Users"),
                React.createElement(Button, { variant: "primary", onClick: () => (window.location.href = '/admin/resources/Course?filters.status=PENDING'), style: { paddingLeft: 18, paddingRight: 18 } }, "Review Courses"),
                React.createElement(Button, { variant: "primary", onClick: () => (window.location.href = '/admin/resources/Post'), style: { paddingLeft: 18, paddingRight: 18 } }, "Moderate Posts"),
                React.createElement(Button, { variant: "primary", onClick: () => (window.location.href = '/admin/resources/CourseEnrollment'), style: { paddingLeft: 18, paddingRight: 18 } }, "View Enrollments"))),
        React.createElement(Box, { style: { marginTop: 32 } },
            React.createElement(SectionHeader, { title: "Content Insights", badge: "Engagement" }),
            React.createElement(Box, { style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 18,
                } }, insightCards.map((card) => (React.createElement(InsightList, { key: card.title, title: card.title, items: card.items, valueLabel: card.valueLabel }))))),
        React.createElement(Box, { style: { marginTop: 32 } },
            React.createElement(SectionHeader, { title: "Academic Reach", badge: "Students per faculty" }),
            React.createElement(Box, { style: { background: 'white', padding: 24, borderRadius: 18, boxShadow: softShadow } },
                React.createElement(BarList, { items: data.insights.studentsPerFaculty, accent: "#3B82F6" }))),
        React.createElement(Box, { style: { marginTop: 32 } },
            React.createElement(SectionHeader, { title: "Platform Health", badge: "System totals" }),
            React.createElement(StatGrid, null,
                React.createElement(StatCard, { accent: `Records: ${formatCount(data.system.universities)}`, title: "Universities", value: data.system.universities, color: "#4F46E5" }),
                React.createElement(StatCard, { accent: `Records: ${formatCount(data.system.faculties)}`, title: "Faculties", value: data.system.faculties, color: "#6366F1" }),
                React.createElement(StatCard, { accent: `Records: ${formatCount(data.system.departments)}`, title: "Departments", value: data.system.departments, color: "#3B82F6" }),
                React.createElement(StatCard, { accent: `Records: ${formatCount(data.system.fields)}`, title: "Fields", value: data.system.fields, color: "#22C55E" }),
                React.createElement(StatCard, { accent: `Records: ${formatCount(data.system.levels)}`, title: "Levels", value: data.system.levels, color: "#22C55E" }),
                React.createElement(StatCard, { accent: `Profiles: ${formatCount(data.system.studentProfiles)}`, title: "Students", value: data.system.studentProfiles, color: "#4F46E5" }),
                React.createElement(StatCard, { accent: `Profiles: ${formatCount(data.system.teacherProfiles)}`, title: "Teachers", value: data.system.teacherProfiles, color: "#6366F1" }),
                React.createElement(StatCard, { accent: `Profiles: ${formatCount(data.system.adminProfiles)}`, title: "Administrators", value: data.system.adminProfiles, color: "#3B82F6" }),
                React.createElement(StatCard, { accent: `Records: ${formatCount(data.system.enrollments)}`, title: "Enrollments", value: data.system.enrollments, color: "#4F46E5" })))));
};
export default Dashboard;
