import React from 'react'
import { Box, H1, H2, Text, Link } from '@adminjs/design-system'
const buildAvatarUrl = (record) => {
    const value = record?.avatar_url
    if (value) return value
    const name = `${record?.first_name || 'User'} ${record?.last_name || ''}`.trim()
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`
}
const card: React.CSSProperties = {
    background: '#fff',
    padding: 16,
    borderRadius: 10,
    border: '1px solid #e6edf3',
    marginBottom: 16,
}

const flexWrap: React.CSSProperties = {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
}

const half: React.CSSProperties = {
    flex: 1,
    minWidth: 320,
}

const avatar: React.CSSProperties = {
    width: 34,
    height: 34,
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 10,
}

const row: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    paddingTop: 4,
    paddingBottom: 4,
}

const CourseShow = (props: any) => {
    const course = props.record?.params?.full

    if (!course) return <Text>Loading...</Text>

    return (
        <Box>

            {/* COURSE INFO */}
            <Box style={card}>
                <H1>{course.name}</H1>

                <Text><strong>Code:</strong> {course.code}</Text>
                <Text><strong>Status:</strong> {course.status}</Text>
                <Text><strong>Module:</strong> {course.module?.name}</Text>
                <Text><strong>Faculty:</strong> {course.faculty?.name}</Text>
                <Text><strong>Field:</strong> {course.field?.name}</Text>
            </Box>

            {/* SECTIONS */}
            <CourseSections sections={course.courseSections} />

            {/* ENROLLMENTS + PUBLISHER SIDE BY SIDE */}
            <Box style={flexWrap}>

                {/* ENROLLMENTS */}
                <Box style={{ ...card, ...half }}>
                    <CourseEnrollments enrollments={course.courseEnrollments} />
                </Box>

                {/* PUBLISHER */}
                <Box style={{ ...card, ...half }}>
                    <PublisherCard publisher={course.publisher} />
                </Box>

            </Box>

        </Box>
    )
}

/* ---------------- SECTIONS ---------------- */

export const CourseSections = ({ sections }: any) => {
    return (
        <Box style={card}>
            <H2>Course Sections</H2>

            {sections?.length === 0 && <Text>No sections</Text>}

            {sections?.map((s: any) => (
                <Box key={s.id} style={{ marginTop: 12, borderBottom: '1px solid #eee', paddingBottom: 12 }}>
                    <Text><strong>{s.order}. {s.title}</strong></Text>
                    <Text>{s.content}</Text>

                    {s.materials?.length > 0 && (
                        <Box style={{ marginTop: 8 }}>
                            <Text><strong>Materials:</strong></Text>

                            {s.materials.map((m: any) => (
                                <Box key={m.id}>
                                    <Link href={m.link} target="_blank">
                                        ⬇ {m.name}
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    )
}

/* ---------------- ENROLLMENTS ---------------- */

export const CourseEnrollments = ({ enrollments }: any) => {
    return (
        <Box style={{ maxHeight: 300, overflowY: 'auto' }}>
            <H2>Students Enrolled ({enrollments?.length || 0})</H2>

            {enrollments?.map((e: any) => (
                <Box key={e.id} style={row}>
                    <img
                        src={buildAvatarUrl(e.student?.user)}
                        style={avatar}
                    />

                    <Text style={{ fontWeight: 'bold' }}>
                        {e.student?.user?.first_name} {e.student?.user?.last_name}
                    </Text>
                </Box>
            ))}
        </Box>
    )
}

/* ---------------- PUBLISHER ---------------- */

export const PublisherCard = ({ publisher }: any) => {
    if (!publisher) return <Text>No publisher</Text>

    return (
        <Box>
            <H2>Publisher</H2>

            <Box style={row}>
                <img
                    src={buildAvatarUrl(publisher.user)}
                    style={avatar}
                />

                <Box>
                    <Text>
                        <strong>
                            {publisher.user?.first_name} {publisher.user?.last_name}
                        </strong>
                    </Text>
                </Box>
            </Box>

            <Box style={{ marginTop: 12 }}>
                <Text><strong>University:</strong></Text>
                <Text>{publisher.university?.name || '—'}</Text>
            </Box>

            <Box style={{ marginTop: 8 }}>
                <Text><strong>Email:</strong></Text>
                <Text>{publisher.user?.email || '—'}</Text>
            </Box>
        </Box>
    )
}

export default CourseShow