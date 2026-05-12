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
    },
};

export default function FacultyShowChildren({ record }: { record?: any }) {
    const [departments, setDepartments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const facultyId = record?.params?.id;

    useEffect(() => {
        if (!facultyId) {
            setLoading(false);
            return;
        }

        (async () => {
            try {
                const res = await fetch(`/api/hierarchy/faculty/${facultyId}/departments`);
                const data = await res.json();
                setDepartments(data || []);
            } catch {
                setDepartments([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [facultyId]);

    if (loading) return <Text>Loading departments...</Text>;

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
                        <Text><strong>University:</strong></Text>
                        <Link href={`/admin/resources/University/records/${record?.params?.university.id}/show`} >
                            {record?.params?.university.name || '-'}
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
                <H1>Departments ({departments.length})</H1>
                {departments.length === 0 && <Text>No departments found.</Text>}

                {departments.length > 0 && (
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Name</th>
                                <th style={styles.th}>Code</th>
                                <th style={styles.th}>Fields</th>
                                <th style={styles.th}>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((d) => {
                                return (
                                    <tr key={d.id}>
                                        <td style={styles.td}><strong>{d.name}</strong></td>
                                        <td style={styles.td}>{d.code || '-'}</td>
                                        <td style={styles.td}>{d._count?.fields ?? 0}</td>
                                        
                                        <td style={styles.td}>{d.created_at ? new Date(d.created_at).toLocaleDateString() : '-'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}

                <Box mt="lg">
                    <Button as="a" href={`/admin/resources/Department?page=1&filters.faculty=${record?.params?.id}`}>Manage Departments</Button>
                </Box>
            </Box>
        </Box>
    );
}
