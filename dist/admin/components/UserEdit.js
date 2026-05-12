import React from 'react';
import { ApiClient, useNotice } from 'adminjs';
import { Box, H2, Text, Select, Input, Label, Badge, Button } from '@adminjs/design-system';
const buildOptions = (items) => items.map((item) => ({ value: String(item.id), label: item.name }));
const buildAvatarUrl = (record) => {
    const value = record?.params?.avatar_url;
    if (value)
        return value;
    const name = `${record?.params?.first_name || 'User'} ${record?.params?.last_name || ''}`.trim();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`;
};
const api = new ApiClient();
const sectionStyle = {
    background: 'white',
    padding: 20,
    borderRadius: 18,
    boxShadow: '0 12px 32px rgba(15,23,42,0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
};
const UserEdit = (props) => {
    const { record, resource } = props;
    const notice = useNotice();
    const studentProfile = record?.params?.studentProfile;
    const teacherProfile = record?.params?.teacherProfile;
    const referenceData = record?.params?.referenceData || {};
    const roleOptions = buildOptions([
        { id: 'STUDENT', name: 'Student' },
        { id: 'TEACHER', name: 'Teacher' },
        { id: 'ADMIN', name: 'Admin' },
    ]);
    const statusOptions = buildOptions([
        { id: 'PENDING', name: 'Pending' },
        { id: 'CONFIRMED', name: 'Confirmed' },
        { id: 'BANED', name: 'Banned' },
    ]);
    const academicTitleOptions = buildOptions([
        { id: 'ASSISTANT', name: 'Assistant' },
        { id: 'LECTURER', name: 'Lecturer' },
        { id: 'PROFESSOR', name: 'Professor' },
        { id: 'DOCTOR', name: 'Doctor' },
        { id: 'RESEARCHER', name: 'Researcher' },
        { id: 'NONE', name: 'None' },
    ]);
    const [formState, setFormState] = React.useState({
        first_name: record?.params?.first_name || '',
        last_name: record?.params?.last_name || '',
        email: record?.params?.email || '',
        role: record?.params?.role || '',
        status: record?.params?.status || '',
        studentUniversityId: record?.params?.studentUniversityId ?? studentProfile?.universityId ?? '',
        studentFacultyId: record?.params?.studentFacultyId ?? studentProfile?.facultyId ?? '',
        studentDepartmentId: record?.params?.studentDepartmentId ?? studentProfile?.departmentId ?? '',
        studentFieldId: record?.params?.studentFieldId ?? studentProfile?.fieldId ?? '',
        studentLevelId: record?.params?.studentLevelId ?? studentProfile?.levelId ?? '',
        teacherUniversityId: record?.params?.teacherUniversityId ?? teacherProfile?.universityId ?? '',
        teacherSpecialization: record?.params?.teacherSpecialization ?? teacherProfile?.specialization ?? '',
        teacherAcademicTitle: record?.params?.teacherAcademicTitle ?? teacherProfile?.academic_title ?? '',
    });
    const [isSaving, setIsSaving] = React.useState(false);
    const handleSave = async () => {
        const recordId = record?.id || record?.params?.id;
        const resourceId = resource?.id;
        if (!recordId || !resourceId) {
            notice({ message: 'Unable to save: missing record context.', type: 'error' });
            return;
        }
        const payload = Object.fromEntries(Object.entries(formState).map(([key, value]) => [key, value === '' ? undefined : value]));
        setIsSaving(true);
        try {
            await api.recordAction({
                resourceId,
                recordId,
                actionName: 'edit',
                data: payload,
            });
            notice({ message: 'User updated', type: 'success' });
        }
        catch (error) {
            notice({ message: 'Failed to update user.', type: 'error' });
        }
        finally {
            setIsSaving(false);
        }
    };
    const universityOptions = buildOptions(referenceData.universities || []);
    const facultyOptions = buildOptions((referenceData.faculties || []).filter((faculty) => String(faculty.university_id) === String(formState.studentUniversityId)));
    const departmentOptions = buildOptions((referenceData.departments || []).filter((department) => String(department.faculty_id) === String(formState.studentFacultyId)));
    const fieldOptions = buildOptions((referenceData.fields || []).filter((field) => String(field.department_id) === String(formState.studentDepartmentId)));
    const levelOptions = buildOptions((referenceData.levels || []).filter((level) => String(level.field_id) === String(formState.studentFieldId)));
    return (React.createElement(Box, { style: { display: 'flex', flexDirection: 'column', gap: 20, padding: 24 } },
        React.createElement(Box, { style: sectionStyle },
            React.createElement(Box, { style: { display: 'flex', gap: 16, alignItems: 'center' } },
                React.createElement("img", { src: buildAvatarUrl(record), alt: "Avatar", style: { width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' } }),
                React.createElement(Box, null,
                    React.createElement(H2, { style: { margin: 0 } },
                        record?.params?.first_name,
                        " ",
                        record?.params?.last_name),
                    React.createElement(Text, { style: { color: '#64748B' } }, record?.params?.email),
                    React.createElement(Box, { style: { display: 'flex', gap: 8, marginTop: 6 } },
                        React.createElement(Badge, null, record?.params?.role),
                        React.createElement(Badge, null, record?.params?.status))))),
        React.createElement(Box, { style: sectionStyle },
            React.createElement(H2, { style: { margin: 0 } }, "User Details"),
            React.createElement(Box, { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 } },
                React.createElement(Box, null,
                    React.createElement(Label, null, "First name"),
                    React.createElement(Input, { value: formState.first_name, onChange: (event) => setFormState((prev) => ({
                            ...prev,
                            first_name: event.target.value,
                        })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Last name"),
                    React.createElement(Input, { value: formState.last_name, onChange: (event) => setFormState((prev) => ({
                            ...prev,
                            last_name: event.target.value,
                        })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Email"),
                    React.createElement(Input, { value: formState.email, onChange: (event) => setFormState((prev) => ({ ...prev, email: event.target.value })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Role"),
                    React.createElement(Select, { value: roleOptions.find((option) => option.value === formState.role), options: roleOptions, onChange: (selected) => setFormState((prev) => ({ ...prev, role: selected?.value || '' })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Status"),
                    React.createElement(Select, { value: statusOptions.find((option) => option.value === formState.status), options: statusOptions, onChange: (selected) => setFormState((prev) => ({
                            ...prev,
                            status: selected?.value || '',
                        })) })))),
        studentProfile ? (React.createElement(Box, { style: sectionStyle },
            React.createElement(H2, { style: { margin: 0 } }, "Student Academic Info"),
            React.createElement(Box, { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 } },
                React.createElement(Box, null,
                    React.createElement(Label, null, "University"),
                    React.createElement(Select, { value: universityOptions.find((option) => option.value === String(formState.studentUniversityId)), options: universityOptions, onChange: (selected) => setFormState((prev) => ({
                            ...prev,
                            studentUniversityId: selected?.value || '',
                            studentFacultyId: '',
                            studentDepartmentId: '',
                            studentFieldId: '',
                            studentLevelId: '',
                        })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Faculty"),
                    React.createElement(Select, { value: facultyOptions.find((option) => option.value === String(formState.studentFacultyId)), options: facultyOptions, onChange: (selected) => setFormState((prev) => ({
                            ...prev,
                            studentFacultyId: selected?.value || '',
                            studentDepartmentId: '',
                            studentFieldId: '',
                            studentLevelId: '',
                        })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Department"),
                    React.createElement(Select, { value: departmentOptions.find((option) => option.value === String(formState.studentDepartmentId)), options: departmentOptions, onChange: (selected) => setFormState((prev) => ({
                            ...prev,
                            studentDepartmentId: selected?.value || '',
                            studentFieldId: '',
                            studentLevelId: '',
                        })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Field"),
                    React.createElement(Select, { value: fieldOptions.find((option) => option.value === String(formState.studentFieldId)), options: fieldOptions, onChange: (selected) => setFormState((prev) => ({
                            ...prev,
                            studentFieldId: selected?.value || '',
                            studentLevelId: '',
                        })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Level"),
                    React.createElement(Select, { value: levelOptions.find((option) => option.value === String(formState.studentLevelId)), options: levelOptions, onChange: (selected) => setFormState((prev) => ({
                            ...prev,
                            studentLevelId: selected?.value || '',
                        })) }))),
            React.createElement(Text, { style: { color: '#94A3B8' } }, "Select the academic units for this student."))) : null,
        teacherProfile ? (React.createElement(Box, { style: sectionStyle },
            React.createElement(H2, { style: { margin: 0 } }, "Teacher Profile"),
            React.createElement(Box, { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 } },
                React.createElement(Box, null,
                    React.createElement(Label, null, "University"),
                    React.createElement(Select, { value: universityOptions.find((option) => option.value === String(formState.teacherUniversityId)), options: universityOptions, onChange: (selected) => setFormState((prev) => ({
                            ...prev,
                            teacherUniversityId: selected?.value || '',
                        })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Specialization"),
                    React.createElement(Input, { value: formState.teacherSpecialization, onChange: (event) => setFormState((prev) => ({
                            ...prev,
                            teacherSpecialization: event.target.value,
                        })) })),
                React.createElement(Box, null,
                    React.createElement(Label, null, "Academic title"),
                    React.createElement(Select, { value: academicTitleOptions.find((option) => option.value === String(formState.teacherAcademicTitle)), options: academicTitleOptions, onChange: (selected) => setFormState((prev) => ({
                            ...prev,
                            teacherAcademicTitle: selected?.value || '',
                        })) }))))) : null,
        !studentProfile && !teacherProfile ? (React.createElement(Box, { style: sectionStyle },
            React.createElement(Text, { style: { color: '#94A3B8' } }, "This user does not have student or teacher profile data yet."))) : null,
        React.createElement(Box, { style: { display: 'flex', justifyContent: 'flex-end' } },
            React.createElement(Button, { variant: "primary", onClick: handleSave, disabled: isSaving }, isSaving ? 'Saving...' : 'Save changes'))));
};
export default UserEdit;
