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

export default function DepartmentShowChildren({ record }: { record?: any }) {
    const [fields, setFields] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const departmentId = record?.params?.id;

    useEffect(() => {
        if (!departmentId) {
            setLoading(false);
            return;
        }

        (async () => {
            try {
                const res = await fetch(`/api/hierarchy/department/${departmentId}/fields`);
                const data = await res.json();
                setFields(data || []);
            } catch {
                setFields([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [departmentId]);

    if (loading) return <Text>Loading fields...</Text>;

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
                        <Text><strong>Faculty:</strong></Text>
                        <Link href={`/admin/resources/Faculty/records/${record?.params?.faculty.id}/show`} >
                            {record?.params?.faculty.name || '-'}
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
                <H1 variant="h4">Fields ({fields.length})</H1>
                {fields.length === 0 && <Text>No fields found.</Text>}

                {fields.length > 0 && (
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Name</th>
                                <th style={styles.th}>Code</th>
                                <th style={styles.th}>System</th>
                                <th style={styles.th}>Levels</th>
                                <th style={styles.th}>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fields.map((f) => {
                                return (
                                    <tr key={f.id}>
                                        <td style={styles.td}><strong>{f.name}</strong></td>
                                        <td style={styles.td}>{f.code || '-'}</td>
                                        <td style={styles.td}>{f.academic_system || '-'}</td>
                                        <td style={styles.td}>{f._count?.levels ?? 0}</td>
                                       
                                        <td style={styles.td}>{f.created_at ? new Date(f.created_at).toLocaleDateString() : '-'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}

                <Box mt="lg">
                    <Button as="a" href={`/admin/resources/Field?page=1&filters.department=${record?.params?.id}`}>Manage Fields</Button>
                </Box>
            </Box>
        </Box>
    );
}
