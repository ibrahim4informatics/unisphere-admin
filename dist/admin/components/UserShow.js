import React from 'react';
import { Box, H2, H3, Text, Badge } from '@adminjs/design-system';
const badgeStyle = (bg, color) => ({
    background: bg,
    color,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
});
const statusBadge = (status) => {
    if (status === 'CONFIRMED')
        return badgeStyle('#DCFCE7', '#15803D');
    if (status === 'PENDING')
        return badgeStyle('#FEF3C7', '#B45309');
    if (status === 'BANED')
        return badgeStyle('#FEE2E2', '#B91C1C');
    return badgeStyle('#E2E8F0', '#475569');
};
const roleBadge = (role) => {
    if (role === 'ADMIN')
        return badgeStyle('#E0E7FF', '#3730A3');
    if (role === 'TEACHER')
        return badgeStyle('#DBEAFE', '#1D4ED8');
    if (role === 'STUDENT')
        return badgeStyle('#E2E8F0', '#475569');
    return badgeStyle('#E2E8F0', '#475569');
};
const buildAvatarUrl = (record) => {
    const value = record?.params?.avatar_url;
    if (value)
        return value;
    const name = `${record?.params?.first_name || 'User'} ${record?.params?.last_name || ''}`.trim();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`;
};
const InfoRow = ({ label, value }) => (React.createElement(Box, { style: { display: 'flex', justifyContent: 'space-between', gap: 12 } },
    React.createElement(Text, { style: { color: '#94A3B8', fontSize: 12, textTransform: 'uppercase' } }, label),
    React.createElement(Text, { style: { color: '#0F172A', fontWeight: 600 } }, value || '—')));
const SectionCard = ({ title, children }) => (React.createElement(Box, { style: {
        background: 'white',
        borderRadius: 18,
        padding: 20,
        boxShadow: '0 12px 32px rgba(15,23,42,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    } },
    React.createElement(H3, { style: { margin: 0, fontSize: 16, color: '#0F172A' } }, title),
    children));
const UserShow = (props) => {
    const { record } = props;
    const studentProfile = record?.params?.studentProfile;
    const teacherProfile = record?.params?.teacherProfile;
    const adminProfile = record?.params?.adminProfile;
    const idCardUrl = record?.params?.id_card_url;
    return (React.createElement(Box, { style: { padding: 24, background: '#F8FAFC', minHeight: '100%' } },
        React.createElement(Box, { style: {
                background: 'white',
                borderRadius: 20,
                padding: 24,
                boxShadow: '0 16px 40px rgba(15,23,42,0.08)',
                display: 'flex',
                gap: 20,
                alignItems: 'center',
            } },
            React.createElement("img", { src: buildAvatarUrl(record), alt: "Avatar", style: { width: 84, height: 84, borderRadius: '50%', objectFit: 'cover' } }),
            React.createElement(Box, { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
                React.createElement(H2, { style: { margin: 0 } },
                    record?.params?.first_name,
                    " ",
                    record?.params?.last_name),
                React.createElement(Text, { style: { color: '#475569' } }, record?.params?.email),
                React.createElement(Box, { style: { display: 'flex', gap: 8 } },
                    React.createElement(Badge, { style: roleBadge(record?.params?.role) }, record?.params?.role),
                    React.createElement(Badge, { style: statusBadge(record?.params?.status) }, record?.params?.status)))),
        React.createElement(Box, { style: {
                marginTop: 20,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
            } },
            React.createElement(SectionCard, { title: "User Info" },
                React.createElement(InfoRow, { label: "Role", value: record?.params?.role }),
                React.createElement(InfoRow, { label: "Status", value: record?.params?.status }),
                React.createElement(InfoRow, { label: "Email", value: record?.params?.email }),
                React.createElement(InfoRow, { label: "First Name", value: record?.params?.first_name }),
                React.createElement(InfoRow, { label: "Last Name", value: record?.params?.last_name })),
            React.createElement(SectionCard, { title: "Student Profile" }, studentProfile ? (React.createElement(React.Fragment, null,
                React.createElement(InfoRow, { label: "University", value: studentProfile.universityName }),
                React.createElement(InfoRow, { label: "Faculty", value: studentProfile.facultyName }),
                React.createElement(InfoRow, { label: "Department", value: studentProfile.departmentName }),
                React.createElement(InfoRow, { label: "Field", value: studentProfile.fieldName }),
                React.createElement(InfoRow, { label: "Level", value: studentProfile.levelName }))) : (React.createElement(Text, { style: { color: '#94A3B8' } }, "No student profile"))),
            React.createElement(SectionCard, { title: "Teacher Profile" }, teacherProfile ? (React.createElement(React.Fragment, null,
                React.createElement(InfoRow, { label: "University", value: teacherProfile.universityName }),
                React.createElement(InfoRow, { label: "Specialization", value: teacherProfile.specialization }),
                React.createElement(InfoRow, { label: "Academic Title", value: teacherProfile.academic_title }))) : (React.createElement(Text, { style: { color: '#94A3B8' } }, "No teacher profile"))),
            React.createElement(SectionCard, { title: "Admin Profile" }, adminProfile ? (React.createElement(React.Fragment, null,
                React.createElement(InfoRow, { label: "Admin Type", value: adminProfile.admin_type }),
                React.createElement(InfoRow, { label: "Permissions", value: adminProfile.permissions?.length ? adminProfile.permissions.join(', ') : '—' }))) : (React.createElement(Text, { style: { color: '#94A3B8' } }, "No admin profile"))),
            React.createElement(SectionCard, { title: "ID Card" }, idCardUrl ? (React.createElement(Box, { style: {
                    borderRadius: 16,
                    overflow: 'hidden',
                    border: '1px solid #E2E8F0',
                    background: '#F8FAFC',
                } },
                React.createElement("img", { src: idCardUrl, alt: "ID card", style: { width: '100%', height: 'auto', display: 'block' } }))) : (React.createElement(Text, { style: { color: '#94A3B8' } }, "No ID card image"))))));
};
export default UserShow;
