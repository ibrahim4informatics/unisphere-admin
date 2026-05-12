import React from 'react'
import { ApiClient, useNotice } from 'adminjs'
import { Box, H2, Text, Select, Input, Label, Badge, Button } from '@adminjs/design-system'

const buildOptions = (items) =>
    items.map((item) => ({ value: String(item.id), label: item.name }))

const buildAvatarUrl = (record) => {
    const value = record?.params?.avatar_url
    if (value) return value
    const name = `${record?.params?.first_name || 'User'} ${record?.params?.last_name || ''}`.trim()
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`
}

const api = new ApiClient()

const sectionStyle = {
    background: 'white',
    padding: 20,
    borderRadius: 18,
    boxShadow: '0 12px 32px rgba(15,23,42,0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
}

const UserEdit = (props) => {
    const { record, resource } = props
    const notice = useNotice()
    const studentProfile = record?.params?.studentProfile
    const teacherProfile = record?.params?.teacherProfile
    const referenceData = record?.params?.referenceData || {}

    const roleOptions = buildOptions([
        { id: 'STUDENT', name: 'Student' },
        { id: 'TEACHER', name: 'Teacher' },
        { id: 'ADMIN', name: 'Admin' },
    ])

    const statusOptions = buildOptions([
        { id: 'PENDING', name: 'Pending' },
        { id: 'CONFIRMED', name: 'Confirmed' },
        { id: 'BANED', name: 'Banned' },
    ])

    const academicTitleOptions = buildOptions([
        { id: 'ASSISTANT', name: 'Assistant' },
        { id: 'LECTURER', name: 'Lecturer' },
        { id: 'PROFESSOR', name: 'Professor' },
        { id: 'DOCTOR', name: 'Doctor' },
        { id: 'RESEARCHER', name: 'Researcher' },
        { id: 'NONE', name: 'None' },
    ])

    const [formState, setFormState] = React.useState({
        first_name: record?.params?.first_name || '',
        last_name: record?.params?.last_name || '',
        email: record?.params?.email || '',
        role: record?.params?.role || '',
        status: record?.params?.status || '',
        studentUniversityId:
            record?.params?.studentUniversityId ?? studentProfile?.universityId ?? '',
        studentFacultyId: record?.params?.studentFacultyId ?? studentProfile?.facultyId ?? '',
        studentDepartmentId:
            record?.params?.studentDepartmentId ?? studentProfile?.departmentId ?? '',
        studentFieldId: record?.params?.studentFieldId ?? studentProfile?.fieldId ?? '',
        studentLevelId: record?.params?.studentLevelId ?? studentProfile?.levelId ?? '',
        teacherUniversityId:
            record?.params?.teacherUniversityId ?? teacherProfile?.universityId ?? '',
        teacherSpecialization:
            record?.params?.teacherSpecialization ?? teacherProfile?.specialization ?? '',
        teacherAcademicTitle:
            record?.params?.teacherAcademicTitle ?? teacherProfile?.academic_title ?? '',
    })
    const [isSaving, setIsSaving] = React.useState(false)

    const handleSave = async () => {
        const recordId = record?.id || record?.params?.id
        const resourceId = resource?.id
        if (!recordId || !resourceId) {
            notice({ message: 'Unable to save: missing record context.', type: 'error' })
            return
        }

        const payload = Object.fromEntries(
            Object.entries(formState).map(([key, value]) => [key, value === '' ? undefined : value]),
        )

        setIsSaving(true)
        try {
            await api.recordAction({
                resourceId,
                recordId,
                actionName: 'edit',
                data: payload,
            })
            notice({ message: 'User updated', type: 'success' })
        } catch (error) {
            notice({ message: 'Failed to update user.', type: 'error' })
        } finally {
            setIsSaving(false)
        }
    }

    const universityOptions = buildOptions(referenceData.universities || [])
    const facultyOptions = buildOptions(
        (referenceData.faculties || []).filter(
            (faculty) =>
                String(faculty.university_id) === String(formState.studentUniversityId),
        ),
    )
    const departmentOptions = buildOptions(
        (referenceData.departments || []).filter(
            (department) =>
                String(department.faculty_id) === String(formState.studentFacultyId),
        ),
    )
    const fieldOptions = buildOptions(
        (referenceData.fields || []).filter(
            (field) => String(field.department_id) === String(formState.studentDepartmentId),
        ),
    )
    const levelOptions = buildOptions(
        (referenceData.levels || []).filter(
            (level) => String(level.field_id) === String(formState.studentFieldId),
        ),
    )

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 24 }}>
            <Box style={sectionStyle}>
                <Box style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <img
                        src={buildAvatarUrl(record)}
                        alt="Avatar"
                        style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <Box>
                        <H2 style={{ margin: 0 }}>{record?.params?.first_name} {record?.params?.last_name}</H2>
                        <Text style={{ color: '#64748B' }}>{record?.params?.email}</Text>
                        <Box style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                            <Badge>{record?.params?.role}</Badge>
                            <Badge>{record?.params?.status}</Badge>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box style={sectionStyle}>
                <H2 style={{ margin: 0 }}>User Details</H2>
                <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                    <Box>
                        <Label>First name</Label>
                        <Input
                            value={formState.first_name}
                            onChange={(event) =>
                                setFormState((prev) => ({
                                    ...prev,
                                    first_name: event.target.value,
                                }))
                            }
                        />
                    </Box>
                    <Box>
                        <Label>Last name</Label>
                        <Input
                            value={formState.last_name}
                            onChange={(event) =>
                                setFormState((prev) => ({
                                    ...prev,
                                    last_name: event.target.value,
                                }))
                            }
                        />
                    </Box>
                    <Box>
                        <Label>Email</Label>
                        <Input
                            value={formState.email}
                            onChange={(event) =>
                                setFormState((prev) => ({ ...prev, email: event.target.value }))
                            }
                        />
                    </Box>
                    <Box>
                        <Label>Role</Label>
                        <Select
                            value={roleOptions.find((option) => option.value === formState.role)}
                            options={roleOptions}
                            onChange={(selected) =>
                                setFormState((prev) => ({ ...prev, role: selected?.value || '' }))
                            }
                        />
                    </Box>
                    <Box>
                        <Label>Status</Label>
                        <Select
                            value={statusOptions.find((option) => option.value === formState.status)}
                            options={statusOptions}
                            onChange={(selected) =>
                                setFormState((prev) => ({
                                    ...prev,
                                    status: selected?.value || '',
                                }))
                            }
                        />
                    </Box>
                </Box>
            </Box>

            {studentProfile ? (
                <Box style={sectionStyle}>
                    <H2 style={{ margin: 0 }}>Student Academic Info</H2>
                    <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                        <Box>
                            <Label>University</Label>
                            <Select
                                value={universityOptions.find(
                                    (option) => option.value === String(formState.studentUniversityId),
                                )}
                                options={universityOptions}
                                onChange={(selected) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        studentUniversityId: selected?.value || '',
                                        studentFacultyId: '',
                                        studentDepartmentId: '',
                                        studentFieldId: '',
                                        studentLevelId: '',
                                    }))
                                }
                            />
                        </Box>
                        <Box>
                            <Label>Faculty</Label>
                            <Select
                                value={facultyOptions.find(
                                    (option) => option.value === String(formState.studentFacultyId),
                                )}
                                options={facultyOptions}
                                onChange={(selected) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        studentFacultyId: selected?.value || '',
                                        studentDepartmentId: '',
                                        studentFieldId: '',
                                        studentLevelId: '',
                                    }))
                                }
                            />
                        </Box>
                        <Box>
                            <Label>Department</Label>
                            <Select
                                value={departmentOptions.find(
                                    (option) => option.value === String(formState.studentDepartmentId),
                                )}
                                options={departmentOptions}
                                onChange={(selected) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        studentDepartmentId: selected?.value || '',
                                        studentFieldId: '',
                                        studentLevelId: '',
                                    }))
                                }
                            />
                        </Box>
                        <Box>
                            <Label>Field</Label>
                            <Select
                                value={fieldOptions.find(
                                    (option) => option.value === String(formState.studentFieldId),
                                )}
                                options={fieldOptions}
                                onChange={(selected) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        studentFieldId: selected?.value || '',
                                        studentLevelId: '',
                                    }))
                                }
                            />
                        </Box>
                        <Box>
                            <Label>Level</Label>
                            <Select
                                value={levelOptions.find(
                                    (option) => option.value === String(formState.studentLevelId),
                                )}
                                options={levelOptions}
                                onChange={(selected) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        studentLevelId: selected?.value || '',
                                    }))
                                }
                            />
                        </Box>
                    </Box>
                    <Text style={{ color: '#94A3B8' }}>Select the academic units for this student.</Text>
                </Box>
            ) : null}

            {teacherProfile ? (
                <Box style={sectionStyle}>
                    <H2 style={{ margin: 0 }}>Teacher Profile</H2>
                    <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                        <Box>
                            <Label>University</Label>
                            <Select
                                value={universityOptions.find(
                                    (option) => option.value === String(formState.teacherUniversityId),
                                )}
                                options={universityOptions}
                                onChange={(selected) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        teacherUniversityId: selected?.value || '',
                                    }))
                                }
                            />
                        </Box>
                        <Box>
                            <Label>Specialization</Label>
                            <Input
                                value={formState.teacherSpecialization}
                                onChange={(event) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        teacherSpecialization: event.target.value,
                                    }))
                                }
                            />
                        </Box>
                        <Box>
                            <Label>Academic title</Label>
                            <Select
                                value={academicTitleOptions.find(
                                    (option) => option.value === String(formState.teacherAcademicTitle),
                                )}
                                options={academicTitleOptions}
                                onChange={(selected) =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        teacherAcademicTitle: selected?.value || '',
                                    }))
                                }
                            />
                        </Box>
                    </Box>
                </Box>
            ) : null}

            {!studentProfile && !teacherProfile ? (
                <Box style={sectionStyle}>
                    <Text style={{ color: '#94A3B8' }}>
                        This user does not have student or teacher profile data yet.
                    </Text>
                </Box>
            ) : null}

            <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="primary" onClick={handleSave} disabled={isSaving}>
                    {isSaving ? 'Saving...' : 'Save changes'}
                </Button>
            </Box>
        </Box>
    )
}

export default UserEdit
