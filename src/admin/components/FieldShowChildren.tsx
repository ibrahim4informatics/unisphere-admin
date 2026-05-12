import React, { useEffect, useState } from 'react';
import { Box, H1, Text, Button, Link } from '@adminjs/design-system';

const styles: Record<string, React.CSSProperties> = {
    card: {
        background: '#fff',
        borderRadius: 8,
        padding: 16,
        border: '1px solid #e6edf3',
        marginTop: 20,
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left',
        background: '#f7fafc',
    },
    td: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left',
    },
    badge: {
        padding: '4px 8px',
        borderRadius: 4,
        fontWeight: 600,
        fontSize: 12,
        marginRight: 6,
    },
};

export default function FieldShowChildren({ record }: { record?: any }) {
    const [levels, setLevels] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const fieldId = record?.params?.id;

    useEffect(() => {
        if (!fieldId) {
            setLoading(false);
            return;
        }

        (async () => {
            try {
                const res = await fetch(`/api/hierarchy/field/${fieldId}/levels`);
                const data = await res.json();
                setLevels(data || []);
            } catch {
                setLevels([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [fieldId]);

    if (loading) return <Text>Loading levels...</Text>;

    return (
        <Box>

            {/* Info of university */}
            <Box style={styles.card}>
                <H1>General Informations</H1>

                <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 12 }}>

                    <Box>
                        <Text><strong>Name:</strong></Text>
                        <Text>{record?.params?.name || '-'}</Text>
                    </Box>

                    <Box>
                        <Text><strong>Code:</strong></Text>
                        <Text>{record?.params?.code || '-'}</Text>
                    </Box>


                    <Box>
                        <Text><strong>Academic System:</strong></Text>
                        <Text>{record?.params?.academic_system || '-'}</Text>
                    </Box>



                    <Box>
                        <Text><strong>Department:</strong></Text>
                        <Link href={`/admin/resources/Department/records/${record?.params?.department.id}/show`} >
                            {record?.params?.department.name || '-'}
                        </Link>
                    </Box>




                    <Box>
                        <Text><strong>Created At:</strong></Text>
                        <Text>
                            {record?.params?.created_at
                                ? new Date(record.params.created_at).toLocaleString()
                                : '-'}
                        </Text>
                    </Box>

                    <Box>
                        <Text><strong>Updated At:</strong></Text>
                        <Text>
                            {record?.params?.updated_at
                                ? new Date(record.params.updated_at).toLocaleString()
                                : '-'}
                        </Text>
                    </Box>

                </Box>
            </Box>
            <Box style={styles.card}>
                <H1>Levels ({levels.length})</H1>
                {levels.length === 0 && <Text>No levels found.</Text>}

                {levels.length > 0 && (
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Name</th>
                                <th style={styles.th}>Cycle</th>
                                <th style={styles.th}>Badges</th>
                                <th style={styles.th}>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {levels.map((l) => {
                                const active = l.isActive !== false;
                                return (
                                    <tr key={l.id}>
                                        <td style={styles.td}><strong>{l.name}</strong></td>
                                        <td style={styles.td}>{l.cycle || '-'}</td>
                                        <td style={styles.td}>
                                            {l.is_final && (
                                                <span style={{ ...styles.badge, background: '#dbeafe', color: '#0c4a6e' }}>
                                                    Final
                                                </span>
                                            )}
                                            <span
                                                style={{
                                                    ...styles.badge,
                                                    background: active ? '#ecfdf5' : '#fff1f2',
                                                    color: active ? '#065f46' : '#7f1d1d',
                                                }}
                                            >
                                                {active ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td style={styles.td}>{l.created_at ? new Date(l.created_at).toLocaleDateString() : '-'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}

                <Box mt="lg">
                    <Button as="a" href={`/admin/resources/Level?page=1&filters.field=${record?.params?.id}`}>Manage Levels</Button>
                </Box>
            </Box>



            {/* ================= MODULES CARD ================= */}
            <Box style={styles.card}>
                <H1>Modules ({record?.params?.modules?.length || 0})</H1>

                {!record?.params?.modules || record.params.modules.length === 0 ? (
                    <Text>No modules found.</Text>
                ) : (
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Name</th>
                                <th style={styles.th}>Code</th>
                                <th style={styles.th}>Related Fields</th>
                                <th style={styles.th}>Related Levels</th>
                                <th style={styles.th}>Courses Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.params.modules.map((m: any) => (
                                <tr key={m.id}>
                                    <td style={styles.td}>
                                        <strong>{m.name}</strong>
                                    </td>

                                    <td style={styles.td}>
                                        {m.code || '-'}
                                    </td>

                                    <td style={styles.td}>
                                        {m.fields && m.fields.length > 0 ? (
                                            m.fields.map((field: any) => (
                                                <Link
                                                    key={field.id}
                                                    href={`/admin/resources/Field/records/${field.id}/show`}
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <span
                                                        style={{
                                                            ...styles.badge,
                                                            background: '#e0f2fe',
                                                            color: '#075985',
                                                            marginBottom: 4,
                                                            display: 'inline-block',
                                                        }}
                                                    >
                                                        {field.name}
                                                    </span>
                                                </Link>
                                            ))
                                        ) : (
                                            '-'
                                        )}
                                    </td>




                                    <td style={styles.td}>
                                        {m.levels && m.levels.length > 0 ? (
                                            m.levels.map((level: any) => (
                                                <Link
                                                    key={level.id}
                                                    href={`/admin/resources/Level/records/${level.id}/show`}
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <span
                                                        style={{
                                                            ...styles.badge,
                                                            background: '#c1febb',
                                                            color: '#10a42b',
                                                            marginBottom: 4,
                                                            display: 'inline-block',
                                                        }}
                                                    >
                                                        {level.name}
                                                    </span>
                                                </Link>
                                            ))
                                        ) : (
                                            '-'
                                        )}
                                    </td>

                                    <td style={styles.td}>
                                        {m._count?.courses ?? 0}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <Box mt="lg">
                    <Button as="a" href="/admin/resources/Module">
                        Manage Modules
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
